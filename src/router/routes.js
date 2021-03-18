import Home from 'module/page/home';
import NotFound from 'module/page/error/NotFound';
import UserProfile from 'module/page/profile-user';
import SignIn from 'module/page/sign-in';
import SignUp from 'module/page/sign-up';

export const publicRoutes = [
  {
    path: '/signIn',
    component: SignIn,
    exact: true,
  },
  {
    path: '/signUp',
    component: SignUp,
  },
];

export const privateRoutes = [
  {
    path: '/userProfile',
    component: UserProfile,
  },
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
