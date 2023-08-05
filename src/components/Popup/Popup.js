import React, { useEffect } from 'react';
import './Popup.css';

const Popup = ({ post, onClose }) => {
  useEffect(() => {
    const handleScroll = (event) => {
      event.preventDefault();
    };

    document.body.style.overflow = 'hidden';

    window.addEventListener('scroll', handleScroll, { passive: false });
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const onNotClose = (event) => {
    event.stopPropagation();
  };

  return (
    <div className="popup" onClick={onClose}>
      <div className="popup-content" onClick={onNotClose}>
        <img className='popup-image' src={post.img_2x} alt={post.title} />
        <h2 className='popup-title'>{post.title}</h2>
        <p className='popup-text'>{post.text}</p>
        <button className='popup-close-button' onClick={onClose} />
      </div>
    </div>
  );
};

export default Popup;
