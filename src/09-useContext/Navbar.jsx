import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          <span className="pl-3">MainApp</span>
        </Link>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-item nav-link" to="/login">
              LogIn
            </NavLink>
            <NavLink className="nav-item nav-link" to="/about">
              About
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};
