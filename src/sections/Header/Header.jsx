import "./Header.css";
import { Link } from "react-router-dom";
import { Logo, NavItem } from "../../components/index";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark">
      <div className="container-fluid">
        <Logo/>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <NavItem>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/about" className="nav-link">
                About
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/skills" className="nav-link">
                Skills
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/portfolio" className="nav-link">
                Portfolio
              </Link>
            </NavItem>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
