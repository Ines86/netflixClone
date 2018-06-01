import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Search_bar from './Search_bar';

const Navigation = () => (

  <div className="wrapper">
    <div id="navbar">
      <div id="logo">
        <Link to="/"><h1>Netflix</h1></Link>
      </div>
      <nav>
        <ul>
          <li><NavLink to="/" activeClassName="active" exact={true}> Home</NavLink></li>
          <li><NavLink to="/tvshows" activeClassName="active">TV Shows</NavLink></li>
          <li><NavLink to="/movies" activeClassName="active">Movies</NavLink></li>
          <li><NavLink to="/originals" activeClassName="active">Originals</NavLink></li>
          <li><NavLink to="/recentlyadded" activeClassName="active">Recently Added</NavLink></li>
          <li><NavLink to="/mylist" activeClassName="active">My List</NavLink></li>
        </ul>
      </nav>

      <ul id="browse">
        <li><NavLink to="/" id="main-browse">Browse</NavLink></li>
        <ul className="submenu">
          <li><NavLink to="/tvshows">TV Shows</NavLink></li>
          <li><NavLink to="/movies">Movies</NavLink></li>
          <li><NavLink to="/originals">Originals</NavLink></li>
          <li><NavLink to="/recentlyadded">Recently Added</NavLink></li>
          <li><NavLink to="/mylist">My List</NavLink></li>
        </ul>
      </ul>

      <div id="userbar">
        <ul>
          <li>
            <Search_bar />
          </li>
          <li><Link to="/"><span id="kids">kids</span></Link></li>
          <li><Link to="/"><i className="fa fa-bell" aria-hidden="true"></i></Link></li>
          <li>
              <div id="userProfile">
              <Link to="/">
                <img src="images/user.gif" alt="user icon" />
              </Link>
                <ul id="userProfile-submenu">
                  <li><Link to="/"><img src="images/user2.gif" alt="user icon" /> Agnieszka</Link></li>
                  <li><Link to="/"><img src="images/kids.gif" alt="kids" /> Kids</Link></li>
                  <li><Link to="/">Manage Profiles</Link></li>
                  <li id="account"><Link to="/">Account</Link></li>
                  <li><Link to="/">Help Center</Link></li>
                  <li><Link to="/">Sign out</Link></li>
                </ul>
              </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Navigation;