import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import '../../App.css';
import video from "../../LoginAssests/video.mp4";
import logo from "../../LoginAssests/logo.jpg";
import { FaUserShield } from "react-icons/fa";
import {BsFillShieldLockFill} from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";
const Login = () => {
  return (
    <div className="loginPage flex">
      <div className="container flex">
        <div className="videoDiv">
          <video src={video} autoPlay muted></video>
          <div className="textDiv">
            <h2 className="title">Create & Sell Extraordonary Products</h2>
            <p>Adopt the peace of Nature!</p>
          </div>
          <div className="footerDiv flex">
            <span className="text">Don't have an account?</span>
            <Link to="/register">
              <button className="btn">Sign Up</button>
            </Link>
          </div>
        </div>
        <div className="formDiv flex" >
          <div className="headerDiv">
            <img src={logo} alt="Logo-Image logo" />
            <center><h3>Welcome Back</h3></center>
          </div>
          <form action="" className="form grid">
            <span
             className="showMessage"
            >Login status will go here</span>
            <div className="inputDiv">
              <label htmlFor="username">Username</label>
              <div className="input flex">
                <FaUserShield className="icon" />
                <input type="text" id="username" placeholder="Enter Username"/>
              </div>
            </div>
            <div className="inputDiv">
              <label htmlFor="password">Password</label>
              <div className="input flex">
                <BsFillShieldLockFill className="icon" />
                <input type="password" id="password" placeholder="Enter Password" />
              </div>
            </div>
            <button type="submit" className="btn flex">
              <span>Login</span>
              <AiOutlineSwapRight className="icon" />
            </button>
            <span className="forgotPassword">
                Forgot Password?<a href="" style={{ textDecoration: 'underline' }}>Click Here</a>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
