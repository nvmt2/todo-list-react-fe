import React, { useEffect, useState } from 'react';

// helpers
import { getRandomNumber } from 'helper/utilities';

//internal
import Header from 'layout/header';
import Footer from 'layout/footer';
import { backgroundColorLightGray } from 'style/variable';
import bg1 from '../assets/images/profile-user/bg-image-1.png';
import bg2 from '../assets/images/profile-user/bg-image-2.png';
import bg3 from '../assets/images/profile-user/bg-image-3.png';
import bg4 from '../assets/images/profile-user/bg-image-4.png';
import bg5 from '../assets/images/profile-user/bg-image-5.png';
import bg6 from '../assets/images/profile-user/bg-image-6.png';

function LayoutBody(props) {
  const listBackground = [bg1, bg2, bg3, bg4, bg5, bg6];
  const DELAY_TIME_CHANGING_BACKGROUND = 5000;
  const [backgroundImg, setBackgroundImg] = useState(listBackground[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = getRandomNumber(0, listBackground.length - 1);

      setBackgroundImg(listBackground[randomIndex]);
    }, DELAY_TIME_CHANGING_BACKGROUND);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* <Header /> */}
      <main
        style={{
          minHeight: '100vh',
          // backgroundColor: backgroundColorLightGray,
          backgroundImage: `url('${backgroundImg}')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {props.children}
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default LayoutBody;
