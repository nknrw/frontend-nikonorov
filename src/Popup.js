import React from 'react';
import './Popup.css'

const Popup = ({ post, onClose }) => {
  const onNotClose = (event) => {
    event.stopPropagation()
  }

	return (
		<div className="popup" onClick={onClose}>
			<div className="popup-content" onClick={onNotClose}>
        <img className='popup-image' src={post.img_2x} alt={post.title} />
				<h2 className='popup-title'>{post.title}</h2>
				<p className='popup-text'>{post.text}</p>
        <button className='popup-close-button' onClick={onClose}/>
			</div>
		</div>
	);
};
export default Popup;
