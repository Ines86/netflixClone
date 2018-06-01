import React from 'react';
import CarouselItem from '../CarouselItem';
import { connect } from "react-redux";
import { fetchRomance } from "../../actions/movies_actions";

class Romance extends React.Component {

  componentDidMount() {
    this.props.fetchRomance();
  }

  // Render Romance
  render() {
    const title = "Romance";
    return (
      <CarouselItem movieData={this.props.data.romance} title={title} />
    );
  }
}

function mapStateToProps(data) {
  return { data }
}

export default connect(mapStateToProps, { fetchRomance })(Romance);
