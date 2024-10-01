import { useState } from "react";
import { Link } from "react-router-dom";
import "../Navbar/navbar.css";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="navbar">
            <h2 className="logo-name">Avtoelon.uz</h2>
            <div className={`navbar-item ${isOpen ? "active" : ""}`}>
                <Link to={"/"} className="pages-text">Home</Link>
                <Link to={"/About"} className="pages-text">About</Link>
                <Link to={"/setting"} className="pages-text">Settings</Link>
                <Link to={"/Contact"} className="pages-text">Contact</Link>
                <Link to={"/login"} className="pages-text">Log in</Link>
                <Link to={"/sign"} className="pages-text">Sign up</Link>
            </div>
            <div className="icon" onClick={toggleNavbar}>
                ☰
            </div>
        </div>
    );
}

export default Navbar;
