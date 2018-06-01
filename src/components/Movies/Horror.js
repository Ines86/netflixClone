import React from 'react';
import CarouselItem from '../CarouselItem';
import { connect } from "react-redux";
import { fetchHorror } from "../../actions/movies_actions";

class Horror extends React.Component {

  componentDidMount() {
    this.props.fetchHorror();
  }

  // Render Horror
  render() {
    const title = "Horror";
    return (
      <CarouselItem movieData={this.props.data.horror} title={title} />
    );
  }
}

function mapStateToProps(data) {
  return { data }
}

export default connect(mapStateToProps, { fetchHorror })(Horror);
