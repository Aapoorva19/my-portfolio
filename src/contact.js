import { useState } from 'react';
import './Contact.css'; // Add a CSS file for styles

const Contact = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Message sent: ' + message);
    setMessage('');
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Me</h1>
      
      <div className="contact-details">
        <p className="contact-item">
          <strong>Email:</strong> <a href="mailto:bapoorvan@gmail.com">your-bapoorvan@gmail.com</a>
        </p>
        <p className="contact-item">
          <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/apoorva-nargund-3a6240250" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/apoorva-nargund-3a6240250</a>
        </p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <textarea
          className="contact-textarea"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your message"
        />
        <button className="contact-button" type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
