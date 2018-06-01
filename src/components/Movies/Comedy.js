import React from 'react';
import CarouselItem from '../CarouselItem';
import { connect } from "react-redux";
import { fetchComedies } from "../../actions/movies_actions";

class Comedies extends React.Component {

  componentDidMount() {
    this.props.fetchComedies();
  }

  // Render Comedies
  render() {
    const title = "Comedies";
    return (
      <CarouselItem movieData={this.props.data.comedies} title={title} />
    );
  }
}

function mapStateToProps(data) {
  return { data }
}

export default connect(mapStateToProps, { fetchComedies })(Comedies);
