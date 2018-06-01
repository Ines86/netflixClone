import React from 'react';
import CarouselItem from '../CarouselItem';
import { connect } from "react-redux";
import { fetchFantasy } from "../../actions/movies_actions";

class Fantasy extends React.Component {

  componentDidMount() {
    this.props.fetchFantasy();
  }

  // Render Fantasy
  render() {
    const title = "Fantasy";
    return (
      <CarouselItem movieData={this.props.data.fantasy} title={title} />
    );
  }
}

function mapStateToProps(data) {
  return { data }
}

export default connect(mapStateToProps, { fetchFantasy })(Fantasy);
