import { Link } from "react-router-dom";
import Navbar from "../companents/Navbar/navbar";
import "../pages/login.css";

function Login() {
  const onLogin = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.target);
      const res = await fetch(`https://avtoelon.onrender.com/user/login`, {
        method: "POST",
        body: formData,
      });
      
      if (!res.ok) {
        const errorResult = await res.json();
        throw new Error(errorResult.message || 'Login failed');
      }
  
      const result = await res.json();
      localStorage.setItem("user", JSON.stringify(result));
      window.location.href = "/";
    } catch (error) {
      alert(error.message || "An error occurred");
    }
  };
  

  return (
    <>
    <div className="sign">
    <h3 className="text">Log in</h3>
    <form className="inps" method="post" onSubmit={onLogin}>
      <input className="emeil input" type="gmail" placeholder="Emeil" name="email"/>
      <input
        className="password input"
        type="password"
        placeholder="Password"
        name="password"
      />
      <button className="signup-btn" type="submit">
        Готово
      </button>
      <Link className="link" to={"/sign"}>
        accountingiz yoqmi?
      </Link>
    </form>
  </div>;
    </>
  );
 
 
}

export default Login;
