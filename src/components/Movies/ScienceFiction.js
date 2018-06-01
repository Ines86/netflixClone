import React from 'react';
import CarouselItem from '../CarouselItem';
import { connect } from "react-redux";
import { fetchSF } from "../../actions/movies_actions";

class ScienceFiction extends React.Component {

  componentDidMount() {
    this.props.fetchSF();
  }

  // Render SF
  render() {
    const title = "Science Fiction";
    return (
      <CarouselItem movieData={this.props.data.scienceFiction} title={title} />
    );
  }
}

function mapStateToProps(data) {
  return { data }
}

export default connect(mapStateToProps, { fetchSF })(ScienceFiction);
