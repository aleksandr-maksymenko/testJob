import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

history.listen(location => {
  // Do some stuff with history
});
