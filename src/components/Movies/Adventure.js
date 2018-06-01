import React from 'react';
import CarouselItem from '../CarouselItem';
import { connect } from "react-redux";
import { fetchAdventureMovies } from "../../actions/movies_actions";

class Adventure extends React.Component {

  componentDidMount() {
    this.props.fetchAdventureMovies();
  }

  // Render Adventure Movies
  render() {
    const title = "Adventure";
    return (
      <CarouselItem movieData={this.props.data.adventureMovies} title={title} />
    );
  }
}

function mapStateToProps(data) {
  return { data }
}

export default connect(mapStateToProps, { fetchAdventureMovies })(Adventure);
