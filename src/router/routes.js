import Home from 'module/page/home';
import NotFound from 'module/page/error/NotFound';

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
