import { Link } from "react-router-dom";
import "../footer/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-list">
          <div className="pages-text">
            <Link className="Link" to={"/"}>Home</Link>
            <Link className="Link" to={"/about"}>About Us</Link>
            <Link className="Link" to={"/setting"}>Settings</Link>
            <Link className="Link" to={"/contact"}>Contact</Link>
            <Link className="Link" to={"/login"}>Log In</Link>
            <Link className="Link" to={"/sign"}>Sign Up</Link>
          </div>
          <div className="admin">
            <p className="text-footer">©️2024 MuhammadUmar. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
