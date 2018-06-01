import React from 'react';
import { connect } from "react-redux";
import { fetchSearchResults } from "../actions";
import { bindActionCreators } from "redux";
import MyModal from './MyModal';
import { fetchDetails } from "../actions/index";

class SearchResults extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isAddOpen: false
    }

    this.closeAddModal = this.closeAddModal.bind(this);
  }

  handleAddClick = (id, media_type) => {
    this.setState({
      isAddOpen: true
    });

    this.props.fetchDetails(id, media_type);
  };

  closeAddModal = () => {
    this.setState({
      isAddOpen: false
    });
  };

  renderShows(data) {
    return (this.props.data.results.map((movie, i) => {
      const { id, media_type, backdrop_path, overview, poster_path, release_date, name, title, vote_average, first_air_date, original_language } = movie;
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
        <div key={id} className="my-list results" onClick={this.handleAddClick.bind(null, id, media_type)}>
          <img src={backdrop()} alt="movie poster" />
          <div className="overlay-bg">
            <div className="overlay-content">
              <h4>{movieTitle}</h4>
              <h5><span className="score">{`Score: ${vote_average}`}</span> {showRelease} <span className="lg">{original_language}</span></h5>
              <p>{description}</p>
              <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
              <i className="fa fa-thumbs-o-down" aria-hidden="true"></i>
              <i className="fa fa-plus" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      );
    }))
  }

  render() {
    return (
      <div className="movies">
        <div className="movieCarousel">
          <h3>Search Results</h3>
          {this.renderShows()}
        </div>
        <MyModal
          show={this.state.isAddOpen}
          onClose={this.closeAddModal}
        />
      </div>
    );
  }
}

function mapStateToProps(data) {
  return { data }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchDetails }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResults);
