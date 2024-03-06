import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="./"><h4>Home</h4></Link>
      <Link to="./register"><h4>Register</h4></Link>
      <Link to="./login"><h4>Login</h4></Link>
      <hr />
    </nav>
    
  );
}
