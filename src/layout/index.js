import React from 'react';

//internal
import Header from 'layout/header';
import Footer from 'layout/footer';

function LayoutBody(props) {
  return (
    <div>
      <Header />
      <div style={{ height: '80vh' }}>{props.children}</div>
      <Footer />
    </div>
  );
}

export default LayoutBody;
