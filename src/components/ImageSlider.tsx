import { useState, useEffect } from 'react';
import './ImageSlider.css';

interface Slide {
  id: number;
  image: string;
  title: string;
  description: string;
}

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&h=600&fit=crop',
      title: 'Exquisite Diamond Rings',
      description: 'Timeless elegance in every piece'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=1200&h=600&fit=crop',
      title: 'Luxury Diamond Necklaces',
      description: 'Crafted with precision and care'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1200&h=600&fit=crop',
      title: 'Stunning Diamond Earrings',
      description: 'Sparkle and shine with elegance'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=1200&h=600&fit=crop',
      title: 'Premium Diamond Collection',
      description: 'Where beauty meets perfection'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="image-slider">
      <div className="slider-container">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="slide-overlay">
              <div className="slide-content">
                <h2 className="slide-title">{slide.title}</h2>
                <p className="slide-description">{slide.description}</p>
              </div>
            </div>
          </div>
        ))}


        <div className="slider-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;

