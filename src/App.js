import React, { useState, useEffect } from 'react';
import './App.css';
import PostCard from './PostCard';
import Popup from './Popup';
import Header from './Header'
import Navbar from './Navbar'
import Main from './Main'

const App = () => {
	const [posts, setPosts] = useState([]);
	const [searchText, setSearchText] = useState('');
	const [selectedPost, setSelectedPost] = useState(null);
	useEffect(() => {
		fetch('https://cloud.codesupply.co/endpoint/react/data.json')
			.then((response) => response.json())
			.then((data) => setPosts(data));
	}, []);
	const handleSearch = (e) => {
		setSearchText(e.target.value);
	};
	const openPopup = (post) => {
		setSelectedPost(post);
	};
	const closePopup = () => {
		setSelectedPost(null);
	};

	const filteredPosts = posts.filter(
		(post) =>
			post.title.toLowerCase().includes(searchText.toLowerCase()) ||
			post.text.toLowerCase().includes(searchText.toLowerCase())
	);
  
	return (
		<div className="main">
			<Header />
      <Navbar />
      <Main />
			<div className="post-list">
				{filteredPosts.map((post) => (
					<PostCard key={post.title} post={post} onClick={() => openPopup(post)} />
				))}
			</div>
			{selectedPost && <Popup post={selectedPost} onClose={closePopup} />}
		</div>
	);
};
export default App;
