import React, { useState, useEffect } from 'react';
import './App.css';
import PostCard from './PostCard';
import Popup from './Popup';
import Header from './Header';
import Navbar from './Navbar';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [selectedPost, setSelectedPost] = useState(null);
  const [isNavbarVisible, setIsNavbarVisible] = useState(window.innerWidth >= 768); // Используем ширину экрана для определения состояния

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

  const toggleNavbar = () => {
    setIsNavbarVisible((prevState) => !prevState);
  };

  const handleResize = () => {
    setIsNavbarVisible(window.innerWidth >= 768); // Проверяем ширину экрана и обновляем состояние
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
      <Header onSearch={handleSearch} toggleNavbar={toggleNavbar} />
      {isNavbarVisible && <Navbar />}
      <div className='post-list-container'>
        {filteredPosts.map((post) => (
          <PostCard key={post.title} post={post} onClick={() => openPopup(post)} />
        ))}
      </div>
      {selectedPost && <Popup post={selectedPost} onClose={closePopup} />}
    </div>
  );
};

export default App;
