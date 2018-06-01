import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from '../components/Home';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import TvShows from '../components/TvShows';
import NotFound from '../components/NotFound';
import MyList from '../components/MyList';
import RecentlyAdded from '../components/RecentlyAdded';
import Movies from '../components/Movies/Movies';
import Action from '../components/Movies/Action';
import Originals from '../components/Originals';
import SearchResults from '../components/SearchResults';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Navigation />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/tvshows" component={TvShows} />
        <Route path="/movies" component={Movies} />
        <Route path="/movies/action" component={Action} />
        <Route path="/originals" component={Originals} />
        <Route path="/recentlyadded" component={RecentlyAdded} />
        <Route path="/mylist" component={MyList} />
        <Route path="/search" component={SearchResults} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);

export default AppRouter;