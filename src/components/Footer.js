import React from 'react';

const Footer = () => (
  <footer>
    <ul id="social-media">
      <li><a href="#"><i className="fa fa-facebook-official" aria-hidden="true"></i></a></li>
      <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
      <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
      <li><a href="#"><i className="fa fa-youtube-play" aria-hidden="true"></i></a></li>
    </ul>
    <div id="technologies">
      <ul>
        <li><a href="#">React</a></li>
        <li><a href="#">Redux</a></li>
        <li><a href="#">Redux-Thunk</a></li>
      </ul>

      <ul>
        <li><a href="#">Axios</a></li>
        <li><a href="#">CSS3</a></li>
        <li><a href="#">SCSS</a></li>
      </ul>

      <ul>
        <li><a href="#">Slick Gallery</a></li>
        <li><a href="#">Normalize</a></li>
        <li><a href="#">The Movie Database API</a></li>
      </ul>

      <ul>
        <li><a href="#">Webpack</a></li>
        <li><a href="#">Object-rest-spread</a></li>
      </ul>
    </div>

    <p>&copy; 2018 Netflix Clone by Agnieszka</p>
  </footer>
);

export default Footer;