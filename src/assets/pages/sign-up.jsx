import { Link } from "react-router-dom";
import Navbar from "../companents/Navbar/navbar";
import "../pages/sign-up.css";
import { useState } from "react";

function Sign() {

  const onRegister = async (e) => {
    e.preventDefault();
   const formData = new FormData(e.target)
  const res = await  fetch(`https://avtoelon.onrender.com/user/register`, {
        method: "POST",
        body: formData,
    })
    const result = await res.json()
    localStorage.setItem("user", JSON.stringify(result))
    window.location.href= "/"
  };

  return (
    <>

      <div className="login">
        <h3 className="page-name">sign up</h3>
        <form className="inps" method="post" onSubmit={onRegister}>
          <input
            className="name input sing__input"
            type="text"
            placeholder="Name"
            name="firstname"
            id="username"
          />
          <input
          htmlFor="emeil"
            className="mail input sing__input"
            type="gmail"
            placeholder="Email"
            name="email"
          />
          <input
          htmlFor="lastname"
            className="surename input sing__input"
            type="text"
            placeholder="Surename"
            name="lastname"
            id="lastname"
          />
          <input
            className="kode input sing__input"
            type="password"
            placeholder="Password"
            name="password"
          />
          <input
          className="img input sing__input"
          type="file"
          placeholder="image"
          name="avatar"
        />
          <button className="cars__btn login-btn" type="submit">
            Готово
          </button>
          <br />
          <Link className="link2" to={"/login"}>
            Allaqochon accountim bor
          </Link>
        </form>
      </div>
    </>
  );
}
export default Sign;
