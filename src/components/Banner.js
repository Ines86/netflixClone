import React from 'react';

const Banner = () => (
    <div id="banner">
        <img src="images/crown3.jpg" alt="The Crown" id="banner-bg" />
        <div className="wrapper">
            <div id="overlay">
                <h3 className="subtitle">
                    <span id="netflix">Netflix</span>
                    <span id="original">Original</span>
                </h3>
                <h2 className="title">The <br />Crown</h2>
                <button className="btn play">
                    <i className="fa fa-play" aria-hidden="true"></i>
                    Play
                </button>
                <button className="btn list">
                    <i className="fa fa-plus" aria-hidden="true"></i>
                    My List
                </button>
                <p className="description">
                A Netflix original series, "The Crown" focuses on Queen Elizabeth II as a 25-year-old newlywed faced with the daunting prospect of leading the world's most famous monarchy while forging a relationship with legendary Prime Minister, Sir Winston Churchill.
                </p>
            </div>
        </div>
    </div>
);

export default Banner;