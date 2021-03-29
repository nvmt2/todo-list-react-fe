import Home from 'module/page/main/home';
import NotFound from 'module/page/error';
import UserProfile from 'module/page/account/profile-user';
import SignIn from 'module/page/account/sign-in';
import SignUp from 'module/page/account/sign-up';

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
