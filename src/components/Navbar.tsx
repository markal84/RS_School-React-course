import { FC } from 'react';
import { Link } from 'react-router-dom';

const Navbar: FC = () => {
  return (
    <nav>
      <ul className="Navbar">
        <li className="Navbar-link">
          <Link to="/">Home</Link>
        </li>
        <li className="Navbar-link">
          <Link to="/about">About</Link>
        </li>
      </ul>
      <div className="Navbar-dot"></div>
    </nav>
  );
};

export default Navbar;
