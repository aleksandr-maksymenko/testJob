import { getNewsFeed } from 'services';

export const newsFeedActions = {
  SET_NEWS_FEED_LIST: '[NEWS_FEED] SET_NEWS_FEED_LIST',
};

export const setNewsFeedList = () => dispatch => {
  getNewsFeed().then(({ data }) => {
    dispatch({
      type: newsFeedActions.SET_NEWS_FEED_LIST,
      payload: data,
    })
  })
};
