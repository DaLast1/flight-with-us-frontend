import React, { useContext } from 'react';

import { ThemeContext } from '../shared/context/ThemeProvider';

import Navbar from '../shared/components/Navbar';
import BottomNavbar from '../shared/components/BottomNavbar';
import './User.css';

const User = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <React.Fragment>
      <Navbar />
      <div className={theme === 'dark' ? 'user-page dark' : 'user-page'}>
        user
      </div>
      <BottomNavbar />
    </React.Fragment>
  );
};

export default User;
