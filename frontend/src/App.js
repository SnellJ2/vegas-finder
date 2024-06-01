import React, { useState } from 'react';
import './styles/App.css';
import Home from './pages/Home';
import userIcon from './assets/icons/user-icon.svg';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);  // TODO: Connect to backend
  const user = {
    firstName: 'John', // TODO: Connect to backend
    icon: userIcon,
  };

  return (
    <Home isLoggedIn={isLoggedIn} user={user} />
  );
}

export default App;