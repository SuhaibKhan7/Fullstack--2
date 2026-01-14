import React from "react";
import "./Header.css";
import { useContext } from "react";
import { AuthContext } from "../context/Auth";

function Header() {
    const { user, setUser, theme, setTheme, isloggedIn, setIsLoggedIn } = useContext(AuthContext);
  return (
    <header className="header">
      {/* Logo */}
      <h2 className="logo">MyShop</h2>

      {/* Search Bar */}
          { !isloggedIn && <input
              type="text"
              placeholder="Enter your Name"
              className="search"
              value={user} onChange={(e) => setUser(e.target.value)}
          />}

      {/* Buttons */}
          <div className="actions">
            
              {isloggedIn ? <div>
                  <span className="user-greet">Hello, {user}!</span>
                  <button className="btn" onClick={() => setIsLoggedIn(false)}>Logout</button>
                </div>
                  : <button className="btn" onClick={() => setIsLoggedIn(true)}>Login</button>}
              
              <button className="btn" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>{theme === 'light' ? 'Dark🌑' : 'Light💡'}</button>
      </div>
    </header>
  );
}

export default Header;