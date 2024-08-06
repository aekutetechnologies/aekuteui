import { Link } from "react-router-dom";
import '../style.css'
const Navbar = () => {
  return (
    <header className="bg-trasparent my-2">
    <nav className="mx-auto container p-5 nav-card flex items-center justify-between flex-wrap">
      <div className="">
        <img src="" alt="logo" />
      </div>
      <div className="flex gap-4">
        <Link to="/elements">Components</Link>
        <Link to="/pricing">Pricing </Link>
        <Link to='/register'>Sign up</Link>
      </div>
    </nav>
  </header>
  );
};

export default Navbar;

