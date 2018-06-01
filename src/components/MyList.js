import React from 'react';
import { fetchMyList } from "../actions";
import { connect } from "react-redux";
import Slider from 'react-slick';

class MyList extends React.Component {
  componentDidMount() {
    this.props.fetchMyList();
  }

  renderMyList() {
    const { backdrop_path, vote_average, first_air_date, overview, original_language, name } = this.props.data.mylist;
    const description = overview ? overview.substring(0, 150) + '...' : null;
    const date = first_air_date ? first_air_date.substring(0, 4) : null;
    return (
      <div className="my-list">
        <img src={`https://image.tmdb.org/t/p/w300//${backdrop_path}`} />
        <div className="overlay-bg">
          <div className="overlay-content">
            <h4>{name}</h4>
            <h5><span className="score">{`Score: ${vote_average}`}</span> {date} <span className="lg">{original_language}</span></h5>
            <p>{description}</p>
            <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
            <i className="fa fa-thumbs-o-down" aria-hidden="true"></i>
            <i className="fa fa-plus" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="movies">
        <div className="movieCarousel">
          <h3>My List</h3>
          {this.renderMyList()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(data) {
  return { data }
}

export default connect(mapStateToProps, { fetchMyList })(MyList);