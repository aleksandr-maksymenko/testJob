import { combineReducers } from 'redux';
import { newsFeedReducer } from 'pages/NewsFeed/store/newsFeed.reducer';

export const rootReducer = combineReducers({
  newsFeed: newsFeedReducer,
});
