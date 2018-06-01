import React from 'react';
import CarouselItem from '../CarouselItem';
import { connect } from "react-redux";
import { fetchWarMovies } from "../../actions/movies_actions";

class WarMovies extends React.Component {

  componentDidMount() {
    this.props.fetchWarMovies();
  }

  // Render War Movies
  render() {
    const title = "War Movies";
    return (
      <CarouselItem movieData={this.props.data.war} title={title} />
    );
  }
}

function mapStateToProps(data) {
  return { data }
}

export default connect(mapStateToProps, { fetchWarMovies })(WarMovies);
