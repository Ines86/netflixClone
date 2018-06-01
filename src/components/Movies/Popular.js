import React from 'react';
import CarouselItem from '../CarouselItem';
import { connect } from "react-redux";
import { fetchPopularMovies } from "../../actions/movies_actions";

class Popular extends React.Component {

  componentDidMount() {
    this.props.fetchPopularMovies();
  }

  // Render popular movies
  render() {
    const title = "Popular";
    return (
      <CarouselItem movieData={this.props.data.movies} title={title} />
    );
  }
}

function mapStateToProps(data) {
  return { data }
}

export default connect(mapStateToProps, { fetchPopularMovies })(Popular);
