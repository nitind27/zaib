import { useState, useRef, useEffect } from 'react';
import './Chatbot.css';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm here to help you with any questions about our jewelry collection. How can I assist you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (inputValue.trim() === '') return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages([...messages, userMessage]);
    setInputValue('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse = getBotResponse(inputValue);
      const botMessage: Message = {
        id: messages.length + 2,
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();

    if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
      return "Hello! How can I help you today?";
    }

    if (input.includes('price') || input.includes('cost') || input.includes('expensive')) {
      return "Our jewelry prices range from $1,500 to $7,000 depending on the piece. Would you like to know about a specific item?";
    }

    if (input.includes('ring') || input.includes('rings')) {
      return "We have a beautiful collection of rings including engagement rings, marriage rings, and luxury rings. Would you like to see our collection?";
    }

    if (input.includes('necklace') || input.includes('necklaces')) {
      return "Our necklace collection features elegant designs for both men and women. You can browse our collection on the Necklaces page.";
    }

    if (input.includes('earring') || input.includes('earrings')) {
      return "We offer a stunning variety of earrings in different styles. Check out our Earrings page to see the full collection.";
    }

    if (input.includes('bracelet') || input.includes('bracelets')) {
      return "Our bracelet collection includes both men's and women's designs. Visit our Bracelets page to explore.";
    }

    if (input.includes('contact') || input.includes('phone') || input.includes('email') || input.includes('address')) {
      return "You can reach us at:\n📞 Phone: +1 (555) 123-4567\n📧 Email: info@jewellery.com\n📍 Address: 123 Jewelry Street, City, State 12345\n\nOr fill out the contact form on this page!";
    }

    if (input.includes('hours') || input.includes('open') || input.includes('time')) {
      return "Our showroom is open:\nMonday - Friday: 10:00 AM - 7:00 PM\nSaturday: 10:00 AM - 6:00 PM\nSunday: 12:00 PM - 5:00 PM";
    }

    if (input.includes('warranty') || input.includes('guarantee') || input.includes('return')) {
      return "We offer a 1-year warranty on all our jewelry pieces. Returns are accepted within 30 days of purchase with original receipt. For more details, please contact us.";
    }

    if (input.includes('thank') || input.includes('thanks')) {
      return "You're welcome! Is there anything else I can help you with?";
    }

    if (input.includes('bye') || input.includes('goodbye')) {
      return "Thank you for visiting! Have a wonderful day. Feel free to come back if you have any questions.";
    }

    return "I'm here to help! You can ask me about our jewelry collections, prices, contact information, store hours, or anything else. How can I assist you?";
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
      <button
        className="chatbot-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle chatbot"
      >
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        )}
      </button>

      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <div className="chatbot-header-content">
              <div className="chatbot-avatar">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="chatbot-header-text">
                <h3>Jewellery Assistant</h3>
                <p>Online now</p>
              </div>
            </div>
          </div>

          <div className="chatbot-messages">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`message ${message.sender === 'user' ? 'user-message' : 'bot-message'}`}
              >
                <div className="message-content">
                  <p>{message.text}</p>
                  <span className="message-time">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="chatbot-input-container">
            <input
              type="text"
              className="chatbot-input"
              placeholder="Type your message..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button className="chatbot-send-btn" onClick={handleSend} aria-label="Send message">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;

