import { useRef, useEffect, useState } from 'react';
import './ImageSliderSection.css';

interface Slide {
  id: number;
  image: string;
  title?: string;
}

const ImageSliderSection = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const positionRef = useRef(0);
  const [isPaused, setIsPaused] = useState(false);
  const imagesPerView = 5; // Number of images to show at once

  const slides: Slide[] = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&h=600&fit=crop',
      title: 'Diamond Collection'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=1200&h=600&fit=crop',
      title: 'Gold Jewelry'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1200&h=600&fit=crop',
      title: 'Elegant Earrings'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=1200&h=600&fit=crop',
      title: 'Luxury Necklaces'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&h=600&fit=crop',
      title: 'Premium Rings'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=1200&h=600&fit=crop',
      title: 'Designer Bracelets'
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1200&h=600&fit=crop',
      title: 'Exclusive Pendants'
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=1200&h=600&fit=crop',
      title: 'Classic Watches'
    },
    {
      id: 9,
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&h=600&fit=crop',
      title: 'Vintage Collection'
    },
    {
      id: 10,
      image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=1200&h=600&fit=crop',
      title: 'Modern Designs'
    }
  ];

  // Duplicate slides for seamless infinite loop
  const duplicatedSlides = [...slides, ...slides, ...slides];

  const slideWidth = 100 / imagesPerView; // 20% per slide
  const totalSlides = slides.length;
  const resetPoint = slideWidth * totalSlides; // Point where we reset

  useEffect(() => {
    const track = trackRef.current;
    if (!track || isPaused) return;

    const animate = () => {
      if (isPaused) return;
      
      // Smooth continuous movement
      positionRef.current += 0.15; // Adjust speed here (lower = slower, higher = faster)
      
      // Reset position seamlessly when we've moved one full set of slides
      if (positionRef.current >= resetPoint) {
        positionRef.current = positionRef.current - resetPoint; // Maintain smooth flow
        // Remove transition for instant reset (invisible to user due to duplicates)
        track.style.transition = 'none';
        track.style.transform = `translateX(-${positionRef.current}%)`;
        // Force reflow to apply the reset immediately
        void track.offsetWidth;
        // Re-enable transition for smooth animation
        track.style.transition = 'transform 0.1s linear';
      }

      track.style.transform = `translateX(-${positionRef.current}%)`;
      animationRef.current = requestAnimationFrame(animate);
    };

    // Start animation
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [imagesPerView, slides.length, isPaused, resetPoint]);

  const goToPrevious = () => {
    const track = trackRef.current;
    if (!track) return;
    
    setIsPaused(true);
    positionRef.current -= slideWidth;
    
    // Handle seamless loop
    if (positionRef.current < 0) {
      positionRef.current = resetPoint - slideWidth;
      track.style.transition = 'none';
      track.style.transform = `translateX(-${positionRef.current}%)`;
      void track.offsetWidth;
    }
    
    track.style.transition = 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    track.style.transform = `translateX(-${positionRef.current}%)`;
    
    setTimeout(() => {
      setIsPaused(false);
    }, 600);
  };

  const goToNext = () => {
    const track = trackRef.current;
    if (!track) return;
    
    setIsPaused(true);
    positionRef.current += slideWidth;
    
    // Handle seamless loop
    if (positionRef.current >= resetPoint) {
      positionRef.current = positionRef.current - resetPoint;
      track.style.transition = 'none';
      track.style.transform = `translateX(-${positionRef.current}%)`;
      void track.offsetWidth;
    }
    
    track.style.transition = 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    track.style.transform = `translateX(-${positionRef.current}%)`;
    
    setTimeout(() => {
      setIsPaused(false);
    }, 600);
  };

  return (
    <div className="image-slider-section">
      <div className="slider-section-container">
        <div className="slider-section-header">
          <h2 className="slider-section-heading">Best Seller</h2>
        </div>
        
        <button 
          className="slider-nav-btn slider-nav-prev" 
          onClick={goToPrevious} 
          aria-label="Previous slide"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6"></path>
          </svg>
        </button>
        
        <div className="slider-section-wrapper">
          <div 
            ref={trackRef}
            className="slider-section-track slider-section-track-infinite"
          >
            {duplicatedSlides.map((slide, index) => (
              <div key={`${slide.id}-${index}`} className="slider-section-slide">
                <img src={slide.image} alt={slide.title || `Slide ${slide.id}`} className="slider-section-image" />
                {slide.title && <div className="slider-section-title">{slide.title}</div>}
              </div>
            ))}
          </div>
        </div>

        <button 
          className="slider-nav-btn slider-nav-next" 
          onClick={goToNext} 
          aria-label="Next slide"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ImageSliderSection;


