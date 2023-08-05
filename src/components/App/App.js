import React, { useState, useEffect } from 'react';
import './App.css';
import PostCard from '../PostCard/PostCard';
import Popup from '../Popup/Popup';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import MobileMenu from '../MobileMenu/MobileMenu';

const App = () => {
	const [posts, setPosts] = useState([]);
	const [searchText, setSearchText] = useState('');
	const [selectedPost, setSelectedPost] = useState(null);
	const [isNavbarVisible, setIsNavbarVisible] = useState(window.innerWidth >= 768);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		fetch('https://cloud.codesupply.co/endpoint/react/data.json')
			.then((response) => response.json())
			.then((data) => setPosts(data));
	}, []);

	const handleSearch = (searchQuery) => {
		setSearchText(searchQuery);
	};

	const openPopup = (post) => {
		setSelectedPost(post);
	};

	const closePopup = () => {
		setSelectedPost(null);
	};

	const handleMobileMenuToggle = () => {
		setIsMobileMenuOpen((prevState) => !prevState);
	};

	const handleMobileMenuClose = () => {
		setIsMobileMenuOpen(false);
	};

	const handleResize = () => {
		setIsNavbarVisible(window.innerWidth >= 768);
	};

	useEffect(() => {
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const filteredPosts = posts.filter(
		(post) =>
			post.title.toLowerCase().includes(searchText.toLowerCase()) ||
			post.text.toLowerCase().includes(searchText.toLowerCase())
	);

	return (
		<div className="app">
			<Header onSearch={handleSearch} onMobileMenuToggle={handleMobileMenuToggle} />
			{isNavbarVisible ? (
				<Navbar />
			) : (
				<MobileMenu isOpen={isMobileMenuOpen} onClose={handleMobileMenuClose} />
			)}
			<div className="post-list-container">
				{filteredPosts.map((post) => (
					<PostCard key={post.title} post={post} onClick={() => openPopup(post)} />
				))}
			</div>
			{selectedPost && <Popup post={selectedPost} onClose={closePopup} />}
		</div>
	);
};

export default App;
