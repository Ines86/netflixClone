import React from 'react';
import Originals from './Originals';
import Banner from './Banner';
import MyModal from './MyModal';
import CarouselItem from './CarouselItem';
import { connect } from "react-redux";
import { fetchUpcoming } from "../actions";
import { fetchThrillers, fetchHistory } from "../actions/movies_actions";

class Home extends React.Component {

  componentDidMount() {
    this.props.fetchUpcoming();
    this.props.fetchThrillers();
    this.props.fetchHistory();
  }

  render() {
    return (
      <div className="content">
        <Banner />
        <CarouselItem movieData={this.props.data.history} title="Historical Movies" />
        <CarouselItem movieData={this.props.data.upcoming} title="Trending Now" />
        <CarouselItem movieData={this.props.data.thriller} title="Thrillers" />
      </div>
    );
  }
}

function mapStateToProps(data) {
  return { data }
}

export default connect(mapStateToProps, { fetchThrillers, fetchUpcoming, fetchHistory })(Home);
