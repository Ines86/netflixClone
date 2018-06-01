import React from 'react';
import CarouselItem from '../CarouselItem';
import { connect } from "react-redux";
import { fetchActionMovies } from "../../actions/movies_actions";
import Slider from 'react-slick';

class Action extends React.Component {

  componentDidMount() {
    this.props.fetchActionMovies();
  }

  // Render Action Movies
  render() {
    const title = "Recently Added";
    return (
      <CarouselItem movieData={this.props.data.actionMovies} title={title} />
    );
  }
}

function mapStateToProps(data) {
  return { data }
}

export default connect(mapStateToProps, { fetchActionMovies })(Action);
