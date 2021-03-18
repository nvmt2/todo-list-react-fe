import React from 'react';

//internal
import Header from 'layout/header';
import Footer from 'layout/footer';

function LayoutBody(props) {
  return (
    <div>
      <Header />
      <main style={{ minHeight: '90vh' }}>{props.children}</main>
      <Footer />
    </div>
  );
}

export default LayoutBody;
