import React from 'react';
import './Popup.css'

const Popup = ({ post, onClose }) => {
  const onNotClose = (event) => {
    event.stopPropagation()
  }

	return (
		<div className="popup" onClick={onClose}>
			<div className="popup-content" onClick={onNotClose}>
        <img src={post.img_2x} alt={post.title} />
				<h2>{post.title}</h2>
				<p>{post.text}</p>
				<button className='popup-close-button' onClick={onClose}>X</button>
			</div>
		</div>
	);
};
export default Popup;
