import { Link } from "react-router-dom";
import "../Navbar/navbar.css"

function Navbar() {
    return (
        <>
        <div className="navbar">
            <div className="navbar-list">
                <div className="navbar-item">
                <h2 className="logo-name">Avtoelon.uz</h2>
                </div>
                <div className="navbar-item">
                    <Link to={"/"} className="pages-text">Home</Link>
                    <Link to={"/About"} className="pages-text">About</Link>
                    <Link to={"/setting"} className="pages-text">Settings</Link>
                    <Link to={"/Contact"} className="pages-text">Contact</Link>
                    <Link to={"/login"} className="pages-text">Log in</Link>
                    <Link to={"/sign"} className="pages-text">Sign up</Link>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default Navbar;