import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setNewsFeedList } from './store/newsFeed.actions';
import { newsFeedSelector } from './store/newsFeed.selector';

import Card from './components/Card';

import './NewsFeed.scss';

const NewsFeedComponent = ({ setNewsFeed, feed }) => {
  useEffect(() => {
    setNewsFeed();
  }, []);

  if (!feed) return <p>loading...</p>;

  return (
    <div className="news">
      {feed.map(news => (
        <Card key={news.id} {...news} />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  feed: newsFeedSelector.getNewsFeed(state),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setNewsFeed: setNewsFeedList,
    },
    dispatch,
  );

const NewsFeed = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewsFeedComponent);

export default NewsFeed;
