import React from 'react';

//internal
import Header from 'layout/header';
import Footer from 'layout/footer';
import { backgroundColorLightGray } from 'style/variable';
import backgroundCouple from '../assets/images/profile-user/background-dalat.png';

function LayoutBody(props) {
  return (
    <div>
      {/* <Header /> */}
      <main
        style={{
          minHeight: '100vh',
          // backgroundColor: backgroundColorLightGray,
          backgroundImage: `url('${backgroundCouple}')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* <img src={backgroundCouple} alt="bg" /> */}
        {props.children}
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default LayoutBody;
