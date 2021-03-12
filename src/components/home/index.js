import React from 'react';
import { useSelector } from 'react-redux';

function Home(props) {
  const test = useSelector((state) => state);
  console.log('HOME', test);
  return (
    <div>
      <h3>Home page</h3>
    </div>
  );
}

export default Home;
