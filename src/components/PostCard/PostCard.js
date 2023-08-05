import React from 'react';
import './PostCard.css'

const PostCard = ({ post, onClick }) => {
	return (
		<div className="post-card" onClick={onClick}>
      <img className='post-card-image' src={post.img} srcSet={`${post.img} 1x, ${post.img_2x} 2x`} alt={post.title} />
      <p className='post-card-tags'>{post.tags}</p>
      <h2 className='post-card-title'>{post.title}</h2>
      <p className='post-card-info'><span className='post-card-info-author'>{post.autor}</span>&nbsp;• {post.date} • {post.views} Views</p>
			<p className='post-card-text'>{post.text}</p>
		</div>
	);
};
export default PostCard;
