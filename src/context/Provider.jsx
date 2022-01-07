/* eslint-disable camelcase */
import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import api from '../api';
import AppContext from './AppContext';

function Provider({ children }) {
  const [user, setUser] = useState({});

  const state = useMemo(() => ({ user }));
  useEffect(() => {
    api.get('/users/andre9653')
      .then((response) => {
        const {
          avatar_url, bio, blog, name, location, html_url,
        } = response.data;
        setUser({
          avatar_url, bio, blog, name, location, html_url,
        });
      });
  }, []);

  return (
    <AppContext.Provider value={state}>
      {children}
    </AppContext.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.func,
  ]).isRequired,
};
