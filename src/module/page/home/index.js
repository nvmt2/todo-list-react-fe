import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
// internal modules
import BodyContent from 'layout/body-content';

function Home(props) {
  const test = useSelector((state) => state);
  console.log('HOME', test);
  return (
    <BodyContent>
      <h3>Home page</h3>
      <NavLink to="/signIn">sign in</NavLink>
      <br />
      <NavLink to="/userProfile">UserProfile</NavLink>
    </BodyContent>
  );
}

export default Home;
