import {React ,useState} from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import '../../App.css';
import video from "../../LoginAssests/video.mp4";
import logo from "../../LoginAssests/logo.jpg";
import { FaUserShield } from "react-icons/fa";
import {BsFillShieldLockFill} from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";
import { MdMarkEmailRead } from "react-icons/md";
import Axios from "axios";  // Axios is used to create API that connects to the server
import {useNavigate} from "react-router-dom";
import { MdSettings } from "react-icons/md";
const Register = () => {
   const[email,setEmail] = useState('');
   const[username,setUsername] = useState('');
   const[password,setPassword] = useState('');
   const navigateTo = useNavigate();
  // onClick we want the data that user has given in the page
  const creatUser = (e)=>{
    e.preventDefault();
    // We need Axios to create API that connects to the server
    Axios.post('http://localhost:3002/register',{
      //create variable to send to the server
      Email : email,
      Username: username,
      Password : password,
    }).then(()=>{
      // console.log('User has been created');
      // NAvigate to login page once registereda
      alert('Registration Successfull')
      navigateTo('/');
      setEmail('');
      setUsername('');
      setPassword('');
    })
  }

  return (
    <div className="registerPage flex">
      <div className="container flex">
        <div className="videoDiv">
          <video src={video} autoPlay muted></video>
          <div className="textDiv">
            <h2 className="title">Create & Sell Extraordonary Products</h2>
            <p>Adopt the peace of Nature!</p>
          </div>
          <div className="footerDiv flex">
            <span className="text">Have an account?</span>
            <Link to="/">
              <button className="btn">Login</button>
            </Link>
          </div>
        </div>
        <div className="formDiv flex" >
          <div className="headerDiv">
            <img src={logo} alt="Logo-Image logo" />
            <center><h3>Let Us Know You</h3></center>
          </div>
          <form action="" className="form grid">
            
            <div className="inputDiv">
              <label htmlFor="email">Email</label>
              <div className="input flex">
                <MdMarkEmailRead className="icon" />
                <input type="email" id="email" placeholder="Enter Email" onChange={(event)=>{
                  setEmail(event.target.value)
                }}/>
              </div>
            </div>
            <div className="inputDiv">
              <label htmlFor="username">Username</label>
              <div className="input flex">
                <FaUserShield className="icon" />
                <input type="text" id="username" placeholder="Enter Username" onChange={event=>{
                  setUsername(event.target.value)
                }}/>
              </div>
            </div>
            <div className="inputDiv">
              <label htmlFor="password">Password</label>
              <div className="input flex">
                <BsFillShieldLockFill className="icon" />
                <input type="password" id="password" placeholder="Enter Password"onChange={event=>{
                  setPassword(event.target.value)
                }} />
              </div>
            </div>
            <button type="submit" className="btn flex" onClick={creatUser}>
              <span>Register</span>
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

export default Register;
