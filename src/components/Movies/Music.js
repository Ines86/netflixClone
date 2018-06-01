import React from 'react';
import CarouselItem from '../CarouselItem';
import { connect } from "react-redux";
import { fetchMusic } from "../../actions/movies_actions";

class Music extends React.Component {

  componentDidMount() {
    this.props.fetchMusic();
  }

  // Render Music
  render() {
    const title = "Musicals";
    return (
      <CarouselItem movieData={this.props.data.music} title={title} />
    );
  }
}

function mapStateToProps(data) {
  return { data }
}

export default connect(mapStateToProps, { fetchMusic })(Music);
