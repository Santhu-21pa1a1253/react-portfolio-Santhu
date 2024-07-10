import logo from "../assets/K1.jpg";
import "./Navbar.css";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
const Navbar = () => {
  return (
    <nav className="logosk  mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center justify-between">
        <img src={logo} alt="logo" />
      </div>
      <div className="flex items-center justify-center m-8 gap-4 text-2xl">
        <FaLinkedin />
        <FaGithub />
        <FaSquareXTwitter />
        <FaInstagram />
      </div>
    </nav>
  );
};

export default Navbar;
