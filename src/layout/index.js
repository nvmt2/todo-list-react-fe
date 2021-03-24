import React from 'react';

//internal
import Header from 'layout/header';
import Footer from 'layout/footer';
import { backgroundColorLightGray } from 'style/mixin';

function LayoutBody(props) {
  return (
    <div>
      {/* <Header /> */}
      <main
        style={{
          minHeight: '100vh',
          backgroundColor: backgroundColorLightGray,
        }}
      >
        {props.children}
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default LayoutBody;
