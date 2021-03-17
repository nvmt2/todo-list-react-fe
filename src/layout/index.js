import React from 'react';

//internal
import Header from 'components/layout/header';
import Footer from 'components/layout/footer';

function LayoutBody(props) {
  return (
    <div>
      <Header />
      <div>{props.children}</div>
      <Footer />
    </div>
  );
}

export default LayoutBody;
