import React, {useState,useEffect} from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import '../../App.css';
import video from "../../LoginAssests/video.mp4";
import logo from "../../LoginAssests/logo.jpg";
import { FaUserShield } from "react-icons/fa";
import {BsFillShieldLockFill} from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { MdSettings } from "react-icons/md";
const Login = () => {
   const[loginUsername,setLoginUsername] = useState('');
   const[loginPassword,setLoginPassword] = useState('');
   const navigateTo = useNavigate();
   // onClick we want the data that user has given in the page
  // Let us show themessage for wrong password/username
  const [loginStatus,setLoginStatus] = useState();
  const [statusHolder,setStatusHolder] = useState('message');

  const loginUser = (e)=>{
    //lets prevent the empty submition
    e.preventDefault();
    // We need Axios to create API that connects to the server
    Axios.post('http://localhost:3002/login',{
      //create variable to send to the server
      LoginUsername: loginUsername,
      LoginPassword : loginPassword,
    }).then((response)=>{
      console.log();
      if(response.data.message){
        alert(response.data.message);
        setLoginStatus(`Credentials don't Exist`);
      }else{
        alert("Login Successfull");
        navigateTo('/dashboard'); // for now nothing in there in dashboard
        // we will add it later
      }
    })
  }

  useEffect(()=>{
    if(loginStatus !== '' || loginUsername !== '' || loginPassword !== ''){ 
      setStatusHolder('showMessage');  //show message
      setTimeout(()=>{
        setStatusHolder('message');  // hide it after 3 seconds
      },3000);
    }
  },[loginStatus]);

  //Lets clear the input fields after the user has submitted the form
  const onSubmit = ()=>{
    setLoginUsername('');
    setLoginPassword(''); 
  }
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
          <form action="" className="form grid" onSubmit={onSubmit}>
            <span className={statusHolder}>{loginStatus}</span>    
            <div className="inputDiv">
              <label htmlFor="username">Username</label>
              <div className="input flex">
                <FaUserShield className="icon" />
                <input type="text" id="username" placeholder="Enter Username" 
                onChange={event=>{ setLoginUsername(event.target.value) }}/>
              </div>
            </div>
            <div className="inputDiv">
              <label htmlFor="password">Password</label>
              <div className="input flex">
                <BsFillShieldLockFill className="icon" />
                <input type="password" id="password" placeholder="Enter Password" 
                onChange={event=>{setLoginPassword(event.target.value)}}/>
              </div>
            </div>
            <button type="submit" className="btn flex" onClick={loginUser}>
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
