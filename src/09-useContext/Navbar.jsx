import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <h1>MainApp</h1>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/login">Login</Link>
      <hr />
    </>
  );
};
