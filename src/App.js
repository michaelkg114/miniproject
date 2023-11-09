import React, { useState } from 'react';
import Login from './Login';
import Home from './Home';
import cart from './cart.js';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (user) => {
    setUsername(user);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <Home />
      ) : (
        <Login handleLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
