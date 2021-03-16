import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
// internal modules
import { actionSignIn } from 'redux/user/action';

function Login() {
  // STATE
  let dispatch = useDispatch();
  let location = useLocation();
  let history = useHistory();
  let { isAuthenticated } = useSelector((state) => state.user);
  let signIn = () => {
    dispatch(actionSignIn());
    history.push(location.state);
  };

  // LIFECYCLE
  useEffect(() => {
    isAuthenticated && history.goBack();
  }, [isAuthenticated]);

  console.log('SignIn', location);
  return (
    <div>
      <h3>Sign In page</h3>
      <button onClick={signIn}>Sign in</button>
    </div>
  );
}

export default Login;
