import React from 'react';
import CarouselItem from '../CarouselItem';
import { connect } from "react-redux";
import { fetchCrimeMovies } from "../../actions/movies_actions";

class Crime extends React.Component {

  componentDidMount() {
    this.props.fetchCrimeMovies();
  }

  // Render Crime Movies
  render() {
    const title = "Crime Movies";
    return (
      <CarouselItem movieData={this.props.data.crimeMovies} title={title} />
    );
  }
}

function mapStateToProps(data) {
  return { data }
}

export default connect(mapStateToProps, { fetchCrimeMovies })(Crime);
