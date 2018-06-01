import React from 'react';
import Slider from 'react-slick';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import MyModal from './MyModal';
import { fetchTvDetails } from "../actions/index";

class CarouselItemTv extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isAddOpen: false
    }

    this.closeAddModal = this.closeAddModal.bind(this);
  }

  handleAddClick = (id) => {
    this.setState({
      isAddOpen: true
    });

    this.props.fetchTvDetails(id);
  };

  closeAddModal = () => {
    this.setState({
      isAddOpen: false
    });
  };

  renderMovies(movieData) {
    return (this.props.movieData.map((movie, i) => {
      const { id, backdrop_path, title, name, vote_average, release_date, overview, first_air_date, original_language, poster_path } = movie;
      const description = (overview.length > 150) ? overview.substring(0, 150) + '...' : overview;
      const showRelease = release_date ? release_date.substring(0, 4) : first_air_date.substring(0, 4);
      const movieTitle = title ? title : name;
      function backdrop() {
        if (movie.backdrop_path) {
          return `https://image.tmdb.org/t/p/w300//${movie.backdrop_path}`;
        } else if (movie.poster_path) {
          return `https://image.tmdb.org/t/p/w342//${movie.poster_path}`;
        } else {
          return `/images/default.jpg`;
        }
      }
      return (
        <div key={id} onClick={this.handleAddClick.bind(null, id)}>
          <img src={backdrop()} alt="tv show poster" />
          <div className="overlay-bg">
            <div className="overlay-content">
              <h4>{movieTitle}</h4>
              <h5><span className="score">{`Score: ${vote_average}`}</span> {showRelease} <span className="lg">{original_language}</span></h5>
              <p>{description}</p>
              <i className="fa fa-thumbs-o-up" aria-hidden="true" key={id + 1}></i>
              <i className="fa fa-thumbs-o-down" aria-hidden="true" key={id + 2}></i>
              <i className="fa fa-plus" aria-hidden="true" key={id + 3}></i>
            </div>
          </div>
        </div>
      );
    }))
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 700,
      slidesToShow: 4,
      slidesToScroll: 3,
      arrows: true,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="movies">
        <div className="movieCarousel">
          <h3>{this.props.title}</h3>
          <Slider {...settings}>
            {this.renderMovies(this.props.movieData)}
          </Slider>
        </div>
        <MyModal
          show={this.state.isAddOpen}
          onClose={this.closeAddModal}
        />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchTvDetails }, dispatch);
}

export default connect(null, mapDispatchToProps)(CarouselItemTv);


