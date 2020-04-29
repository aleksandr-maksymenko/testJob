import { apiRequest } from 'config';

export const getNewsFeed = (
  type = 'recent',
  number = 6,
  addEntities = true,
  addUserRelatedEntities = true,
  startIndex = 0,
) => {
  const request = new URLSearchParams();
  request.set('addEntities', addEntities);
  request.set('addUserRelatedEntities', addUserRelatedEntities);
  request.set('number', number);
  request.set('startIndex', startIndex);
  request.set('type', type);

  return apiRequest(`buyersguideapi/feedlist?${request.toString()}`);
};
