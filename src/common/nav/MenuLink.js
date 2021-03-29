import React from 'react';
import { useLocation } from 'react-router-dom';
// internal modules
import MyNavLink from 'common/nav/MyNavLink';
import { listNavLink } from 'constance/nav';

function MenuLink() {
  const location = useLocation();
  const endpoint = location.pathname;
  console.log('MenuSidebar');

  return (
    <div>
      {listNavLink.map((item, index) => {
        let isActive = item.path === endpoint;
        return (
          <MyNavLink key={index} isActive={isActive} {...item}>
            {item.title}
          </MyNavLink>
        );
      })}
    </div>
  );
}

export default MenuLink;
