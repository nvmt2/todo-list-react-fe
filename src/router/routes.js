import Home from 'components/home';
import NotFound from 'components/error/NotFound';

export const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '*',
    component: NotFound,
  },
];
