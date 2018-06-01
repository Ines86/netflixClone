import {
  FETCH_POPULAR_MOVIES,
  FETCH_ACTION_MOVIES,
  FETCH_ADVENTURE_MOVIES,
  FETCH_COMEDIES,
  FETCH_CRIME_MOVIES,
  FETCH_DOCUMENTARY,
  FETCH_DRAMA,
  FETCH_FANTASY,
  FETCH_HISTORY,
  FETCH_HORROR,
  FETCH_MUSIC,
  FETCH_MYSTERY,
  FETCH_ROMANCE,
  FETCH_THRILLERS,
  FETCH_WAR_MOVIES,
  FETCH_WESTERNS,
  FETCH_SF,
  REQUEST_FAILED
} from '../actions/movies_actions';

const moviesReducers = {
  popularMovies: (movies = [], action) => {
    switch (action.type) {
      case (FETCH_POPULAR_MOVIES):
        return movies = action.payload.data.results;
      case (REQUEST_FAILED):
        return console.log(action.payload);
      default:
        return movies;
    }
  },

  actionMovies: (actionMovies = [], action) => {
    switch (action.type) {
      case (FETCH_ACTION_MOVIES):
        return actionMovies = action.payload.data.results;
      case (REQUEST_FAILED):
        return console.log(action.payload);
      default:
        return actionMovies;
    }
  },

  adventureMovies: (adventureMovies = [], action) => {
    switch (action.type) {
      case (FETCH_ADVENTURE_MOVIES):
        return adventureMovies = action.payload.data.results;
      case (REQUEST_FAILED):
        return console.log(action.payload);
      default:
        return adventureMovies;
    }
  },
  comedies: (comedies = [], action) => {
    switch (action.type) {
      case (FETCH_COMEDIES):
        return comedies = action.payload.data.results;
      case (REQUEST_FAILED):
        return console.log(action.payload);
      default:
        return comedies;
    }
  },

  crimeMovies: (crimeMovies = [], action) => {
    switch (action.type) {
      case (FETCH_CRIME_MOVIES):
        return crimeMovies = action.payload.data.results;
      case (REQUEST_FAILED):
        return console.log(action.payload);
      default:
        return crimeMovies;
    }
  },

  documentary: (documentary = [], action) => {
    switch (action.type) {
      case (FETCH_DOCUMENTARY):
        return documentary = action.payload.data.results;
      case (REQUEST_FAILED):
        return console.log(action.payload);
      default:
        return documentary;
    }
  },

  drama: (drama = [], action) => {
    switch (action.type) {
      case (FETCH_DRAMA):
        return drama = action.payload.data.results;
      case (REQUEST_FAILED):
        return console.log(action.payload);
      default:
        return drama;
    }
  },

  fantasy: (fantasy = [], action) => {
    switch (action.type) {
      case (FETCH_FANTASY):
        return fantasy = action.payload.data.results;
      case (REQUEST_FAILED):
        return console.log(action.payload);
      default:
        return fantasy;
    }
  },


  history: (history = [], action) => {
    switch (action.type) {
      case (FETCH_HISTORY):
        return history = action.payload.data.results;
      case (REQUEST_FAILED):
        return console.log(action.payload);
      default:
        return history;
    }
  },


  horror: (horror = [], action) => {
    switch (action.type) {
      case (FETCH_HORROR):
        return horror = action.payload.data.results;
      case (REQUEST_FAILED):
        return console.log(action.payload);
      default:
        return horror;
    }
  },

  music: (music = [], action) => {
    switch (action.type) {
      case (FETCH_MUSIC):
        return music = action.payload.data.results;
      case (REQUEST_FAILED):
        return console.log(action.payload);
      default:
        return music;
    }
  },

  mystery: (mystery = [], action) => {
    switch (action.type) {
      case (FETCH_MYSTERY):
        return mystery = action.payload.data.results;
      case (REQUEST_FAILED):
        return console.log(action.payload);
      default:
        return mystery;
    }
  },

  romance: (romance = [], action) => {
    switch (action.type) {
      case (FETCH_ROMANCE):
        return romance = action.payload.data.results;
      case (REQUEST_FAILED):
        return console.log(action.payload);
      default:
        return romance;
    }
  },

  thriller: (thriller = [], action) => {
    switch (action.type) {
      case (FETCH_THRILLERS):
        return thriller = action.payload.data.results;
      case (REQUEST_FAILED):
        return console.log(action.payload);
      default:
        return thriller;
    }
  },

  war: (war = [], action) => {
    switch (action.type) {
      case (FETCH_WAR_MOVIES):
        return war = action.payload.data.results;
      case (REQUEST_FAILED):
        return console.log(action.payload);
      default:
        return war;
    }
  },

  western: (western = [], action) => {
    switch (action.type) {
      case (FETCH_WESTERNS):
        return western = action.payload.data.results;
      case (REQUEST_FAILED):
        return console.log(action.payload);
      default:
        return western;
    }
  },

  scienceFiction: (sf = [], action) => {
    switch (action.type) {
      case (FETCH_SF):
        return sf = action.payload.data.results;
      case (REQUEST_FAILED):
        return console.log(action.payload);
      default:
        return sf;
    }
  }
}

export default moviesReducers;
