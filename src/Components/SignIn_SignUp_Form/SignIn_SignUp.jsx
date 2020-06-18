import React from "react";
import "./SignIn_SignUp.scss";
import { signInWithGoogle } from "../../Firebase/firebase.utils";
const SignIn_SignUp = () => {
  let SignUpbtn = () => {
    let x = document.getElementById("SignIn");
    let y = document.getElementById("SignUp");
    let z = document.getElementById("btn");
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "130px";
  };
  let SignInbtn = () => {
    let x = document.getElementById("SignIn");
    let y = document.getElementById("SignUp");
    let z = document.getElementById("btn");
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0px";
  };
  return (
    <div className="mainContainer">
      <div className="formContainer">
        <div className="buttonBox">
          <div id="btn"></div>
          <button onClick={SignInbtn} className="toggle_btn">
            Sign In
          </button>
          <button onClick={SignUpbtn} className="toggle_btn">
            Sign Up
          </button>
        </div>
        <form id="SignIn">
          <input
            className="input"
            type="text"
            name="username"
            id="username"
            placeholder="Enter UserName"
            required
          />
          <input
            className="input"
            type="password"
            name="password"
            id="password"
            placeholder="Enter Password"
            required
          />
          <div className="handle">
            <input
              className="inputcheck"
              type="checkbox"
              name="remember-password"
              id="remember-password"
            />
            <span>Remember Password</span>{" "}
          </div>
          <button type="submit">Login</button>
          <div style={{ margin: "auto" }}>or</div>
          <button onClick={signInWithGoogle} className="googlebtn">
            Google{" "}
            <i
              style={{ padding: "2px 3px" }}
              class="fab fa-google-plus-square"
            ></i>
          </button>
        </form>
        <form id="SignUp">
          <input
            className="input"
            type="email"
            name="useremail"
            id="useremail"
            placeholder=" Enter em@il  Id"
            required
          />
          <input
            className="input"
            type="text"
            name="username"
            id="username"
            placeholder="Enter UserName"
            required
          />
          <input
            className="input"
            type="password"
            name="password"
            id="password"
            placeholder="Enter Password"
            required
          />
          <div className="handle">
            <input
              className="inputcheck"
              type="checkbox"
              name="remember-password"
              id="remember-password"
              required
            />
            <span>I agree to the terms and condition</span>{" "}
          </div>
          <button type="submit">SignUp</button>
        </form>
      </div>
    </div>
  );
};

export default SignIn_SignUp;
