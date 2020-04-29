import { newsFeedActions } from './newsFeed.actions';

export const initialState = {
  feedList: [],
};

export function newsFeedReducer(state = initialState, action) {
  switch (action.type) {
    case newsFeedActions.SET_NEWS_FEED_LIST:
      return {
        ...state,
        feedList: action.payload,
      };
    default:
      return state;
  }
}
