import React from 'react';
import { connect } from "react-redux";
import { Switch, Route, Link } from 'react-router-dom';
import Popular from "./Popular";
import Action from './Action';
import Adventure from './Adventure';
import Comedy from './Comedy';
import Crime from './Crime';
import Documentary from './Documentary';
import Drama from './Drama';
import Fantasy from './Fantasy';
import History from './History';
import Horror from './Horror';
import Music from './Music';
import Mystery from './Mystery';
import Romance from './Romance';
import Thrillers from './Thrillers';
import WarMovies from './WarMovies';
import Western from './Western';
import ScienceFiction from './ScienceFiction';

const Movies = ({ match }) => (
  <div className="content">
    <div className="submenu">
      <h2>Movies</h2>
      <div className="genres">
        <button className="dropbtn">Genres</button>
        <div className="dropdown-content">
          <ul>
            <li><Link to={`${match.url}/action`}>Action</Link></li>
            <li><Link to={`${match.url}/adventure`}>Adventure</Link></li>
            <li><Link to={`${match.url}/comedy`}>Comedies</Link></li>
            <li><Link to={`${match.url}/crime`}>Crime Movies</Link></li>
            <li><Link to={`${match.url}/documentary`}>Documentaries</Link></li>
            <li><Link to={`${match.url}/drama`}>Dramas</Link></li>
          </ul>
          <ul>
            <li><Link to={`${match.url}/fantasy`}>Fantasy</Link></li>
            <li><Link to={`${match.url}/history`}>Historical Movies</Link></li>
            <li><Link to={`${match.url}/horror`}>Horror</Link></li>
            <li> <Link to={`${match.url}/music`}>Musicals</Link></li>
            <li> <Link to={`${match.url}/mystery`}>Mystery</Link></li>
            <li> <Link to={`${match.url}/romance`}>Romance</Link></li>
          </ul>
          <ul>
            <li> <Link to={`${match.url}/sf`}>Science Fiction</Link></li>
            <li> <Link to={`${match.url}/thriller`}>Thrillers</Link></li>
            <li> <Link to={`${match.url}/war`}>War Movies</Link></li>
            <li> <Link to={`${match.url}/western`}>Westerns</Link></li>
          </ul>
        </div>
      </div>
    </div>
    <Switch>
      <Route path="/movies/popular" component={Popular} />
      <Route path="/movies/action" component={Action} />
      <Route path="/movies/adventure" component={Adventure} />
      <Route path="/movies/comedy" component={Comedy} />
      <Route path="/movies/crime" component={Crime} />
      <Route path="/movies/documentary" component={Documentary} />
      <Route path="/movies/drama" component={Drama} />
      <Route path="/movies/fantasy" component={Fantasy} />
      <Route path="/movies/history" component={History} />
      <Route path="/movies/horror" component={Horror} />
      <Route path="/movies/music" component={Music} />
      <Route path="/movies/mystery" component={Mystery} />
      <Route path="/movies/romance" component={Romance} />
      <Route path="/movies/sf" component={ScienceFiction} />
      <Route path="/movies/thriller" component={Thrillers} />
      <Route path="/movies/war" component={WarMovies} />
      <Route path="/movies/western" component={Western} />

      <Route exact path={match.url} render={() => (
        <Popular />
      )} />
    </Switch>
  </div>
);

export default Movies;