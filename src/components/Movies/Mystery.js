import React from 'react';
import CarouselItem from '../CarouselItem';
import { connect } from "react-redux";
import { fetchMystery } from "../../actions/movies_actions";

class Mystery extends React.Component {

  componentDidMount() {
    this.props.fetchMystery();
  }

  // Render Mystery
  render() {
    const title = "Mystery";
    return (
      <CarouselItem movieData={this.props.data.mystery} title={title} />
    );
  }
}

function mapStateToProps(data) {
  return { data }
}

export default connect(mapStateToProps, { fetchMystery })(Mystery);
