import { Link } from "react-router-dom";
import "../pages/sign-up.css";

function Sign() {
  const onRegister = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const res = await fetch(`https://avtoelon.onrender.com/user/register`, {
      method: "POST",
      body: formData,
    });
    const result = await res.json();
    localStorage.setItem("user", JSON.stringify(result));
    window.location.href = "/";
  };

  return (
    <div className="login">
      <h3 className="page-name">Sign Up</h3>
      <form className="inps" method="post" onSubmit={onRegister}>
        <input
          className="name input sing__input"
          type="text"
          placeholder="Name"
          name="firstname"
          id="username"
          required
        />
        <input
          className="mail input sing__input"
          type="email"
          placeholder="Email"
          name="email"
          required
        />
        <input
          className="surename input sing__input"
          type="text"
          placeholder="Surname"
          name="lastname"
          id="lastname"
          required
        />
        <input
          className="kode input sing__input"
          type="password"
          placeholder="Password"
          name="password"
          required
        />
        <input
          className="img input sing__input"
          type="file"
          placeholder="Image"
          name="avatar"
        />
        <button className="cars__btn login-btn" type="submit">
          Register
        </button>
        <br />
        <Link className="link2" to={"/login"}>
          Already have an account?
        </Link>
      </form>
    </div>
  );
}

export default Sign;
