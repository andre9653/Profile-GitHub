import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';

function Header() {
  const { user } = useContext(AppContext);
  console.log(user);
  return (
    <header>
      {/* name
     link github */}
      {user.name}
    </header>
  );
}

export default Header;
