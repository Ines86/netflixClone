import React from 'react';
import ReactStars from 'react-stars';
import { connect } from "react-redux";
import { fetchDetails } from "../actions/index";

class MyModal extends React.Component {

  renderAction() {
    const { title, runtime, media_type, tagline, number_of_seasons, first_air_date, episode_run_time, original_name, backdrop_path, overview, vote_average, release_date, original_language } = this.props.data.details;
    const showTitle = title ? title : original_name;
    const duration = runtime ? runtime : episode_run_time ? episode_run_time[episode_run_time.length - 1] : "";

    const ratingChanged = (newRating) => {
      console.log(newRating);
    }
    return (
      <div className="modal-content">
        {backdrop_path && <img src={`https://image.tmdb.org/t/p/w780//${backdrop_path}`} />}
        <div className="modal-overlay">
          <div className="modal-header">
            <button className="closeBtn" onClick={this.props.onClose}>X</button>
            <h2>{showTitle}</h2>
            <h5>
              <span className="rating stars">
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={22}
                  color2={'#B80612'}
                />
              </span>
              <span className="date">{release_date ? release_date : first_air_date}</span>
              <span className="lg">{original_language}</span>
              <span className="seasons">{number_of_seasons && "Seasons: " + number_of_seasons}</span>
            </h5>
          </div>
          <div className="modal-body">
            <p style={{ fontSize: overview && overview.length > 500 ? '1.2rem' : '1.4rem' }}>{overview}</p>
            {tagline && <p>Tagline:<span> {tagline}</span></p>}
            <p>Duration:<span> {duration} minutes</span></p>
            <p>Rating:<span> {vote_average}</span></p>
          </div>
          <div className="modal-footer">
            <ul>
              <li><a href="">overview</a></li>
              <li><a href="">more like this</a></li>
              <li><a href="">details</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className="modal">
        <div className="modal-box">
          {this.renderAction()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(data) {
  return { data }
}

export default connect(mapStateToProps, { fetchDetails })(MyModal);