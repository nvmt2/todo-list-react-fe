import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

function Home(props) {
  const test = useSelector((state) => state);
  console.log('HOME', test);
  return (
    <div>
      <h3>Home page</h3>
      <NavLink to="/signIn">sign in</NavLink>
      <br />
      <NavLink to="/userProfile">UserProfile</NavLink>
    </div>
  );
}

export default Home;
