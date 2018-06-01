import { combineReducers } from 'redux';
import upcomingReducer from './upcomingReducer';
import tvshowsReducer from './tvshowsReducer';
import myListReducers from './myListReducers';
import recentlyAddedReducers from './recentlyAddedReducers';
import moviesReducers from './moviesReducers';
import originalsReducers from './originalsReducers';
import resultsReducers from './resultsReducers';
import detailsReducers from './detailsReducers';


const rootReducer = combineReducers({
    upcoming: upcomingReducer,
    tvshows: tvshowsReducer,
    mylist: myListReducers,
    recent: recentlyAddedReducers,
    movies: moviesReducers.popularMovies,
    actionMovies: moviesReducers.actionMovies,
    adventureMovies: moviesReducers.adventureMovies,
    comedies: moviesReducers.comedies,
    crimeMovies: moviesReducers.crimeMovies,
    documentary: moviesReducers.documentary,
    drama: moviesReducers.drama,
    fantasy: moviesReducers.fantasy,
    history: moviesReducers.history,
    horror: moviesReducers.horror,
    music: moviesReducers.music,
    mystery: moviesReducers.mystery,
    romance: moviesReducers.romance,
    thriller: moviesReducers.thriller,
    war: moviesReducers.war,
    western: moviesReducers.western,
    originals: originalsReducers,
    results: resultsReducers,
    scienceFiction: moviesReducers.scienceFiction,
    details: detailsReducers
});

export default rootReducer;