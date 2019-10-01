import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { signout, isAuthenticate } from '../auth';

const isActive = (history, path) => {
  return history.location.pathname === path
    ? { color: '#ff9900' }
    : { color: '#ffffff' };
};

const Menu = ({ history }) => (
  <div>
    <ul className="nav nav-tabs bg-primary">
      <li className="nav-item">
        <Link style={isActive(history, '/')} className="nav-link" to="/">
          Home
        </Link>
      </li>

      {!isAuthenticate() && (
        <>
          <li className="nav-item">
            <Link
              style={isActive(history, '/signin')}
              className="nav-link"
              to="/signin"
            >
              Signin
            </Link>
          </li>

          <li className="nav-item">
            <Link
              style={isActive(history, '/signup')}
              className="nav-link"
              to="/signup"
            >
              Signup
            </Link>
          </li>
        </>
      )}

      {isAuthenticate() && (
        <li className="nav-item">
          <span
            className="nav-link"
            style={{ cursor: 'pointer', color: '#ffffff' }}
            onClick={() => signout(() => history.push('/signin'))}
          >
            Signout
          </span>
        </li>
      )}
    </ul>
  </div>
);

export default withRouter(Menu);
