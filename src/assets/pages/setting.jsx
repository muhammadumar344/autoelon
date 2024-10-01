import Navbar from "../companents/Navbar/navbar";
import "../pages/setting.css";
import avatar from "../img/avatar.jpg";
import { Link, useNavigate } from "react-router-dom";

function Setting() {
  const navigate = useNavigate();
  
  const userData = localStorage.getItem("user");
  const { user, token } = JSON.parse(localStorage.getItem("user")) || { user: {}, token: "" };

  const onDelete = async () => {
    var deleteOptions = {
      method: "DELETE",
      headers: {
        token: token,
      },
    };

      await fetch(`https://avtoelon.onrender.com/user/${user._id}`, deleteOptions)
      .then(() => {
        localStorage.removeItem("user");  
        window.location.reload();  
        navigate("/"); 
      }) 

  };

  return (
    <>
      <div className="account-list">
        <div className="account">
          <div className="account-item">
            <img
              src={user.avatar && user.avatar.url ? user.avatar.url : avatar}
              alt="User Profile"
              style={{ width: "100px", height: "100px", borderRadius: "50%" }}
            />
            <div className="firstname-box">
              <h2 className="setting-text">{user.firstname}</h2>
            </div>
            <h2 className="setting-text">{user.lastname}</h2>
            <div className="user-class">{user.role}</div>
            <div className="user-gmail">{user.email}</div>
          </div>
            <button className="btn-delete-user" onClick={onDelete}>
              Delete
            </button>
        </div>
        <div className="user-cars">
          <div className="then-texts">
            <h3 className="user-cars-text">Users Cars</h3>
            <div className="posts">
              <Link to={"/postCarPage"} className="text-plus">
                +
              </Link>
              <Link to={"/postCategory"} className="text-plus">
                +
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Setting;
