import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3 mb-3">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            MainApp
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
        </div>
      </nav>
    </>
  );
};
