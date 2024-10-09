import React, { Fragment, useState } from 'react';
import axios from "axios";
import './signup.css';  // Import the CSS file
import { useNavigate ,useLocation , useParams} from 'react-router-dom';
import { toast } from 'react-toastify';
const apiurl = process.env.REACT_APP_API_URL;


const SignupLogin = ( {isLogin,setIsLogin}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [type , setType] = useState('');
  const [isSignup, setIsSignup] = useState(true); // Toggle between signup and login

  const navigate = useNavigate();
  const location = useLocation();
  const {role} = useParams();

  const isBuyerPage = location.pathname.includes('buyerpage');
  const isFranchiseLogin = location.pathname.includes('/login/franchise');
  const isBuyerLogin = location.pathname.includes('login/buyer');
  
  const handleSubmit = (e) => {
    e.preventDefault();
  
    const userData = {
      name, 
      phone, 
      email, 
      password, 
      role,
      type
    };
  
    const url = isSignup ? `${apiurl}signup` : `${apiurl}login`;
  
    axios.post(url, userData)
    .then(result => {
      if (isSignup) {
        // Signup success
        toast.success("Signup successful! Please log in.");
        console.log(result.data);
  
        // Optionally, navigate to the login page after signup
        navigate(isBuyerLogin ? `/login/buyer` :isFranchiseLogin ? "/login/franchise" : "/login/seller" );
      } else {
        // Login success
        console.log(result.data);
        if (result.data === "Allow") {
          toast.success("Login successful!");
          setIsLogin(true);
  
          // Navigate based on the role after successful login
          navigate(isBuyerLogin ? "/buyerpage" : isFranchiseLogin ? "/franchisepage" : "/sellerpage" );
        } else {
          toast.error("Login failed. Please check your credentials.");
        }
      }
  
      // Reset input fields
      setName('');
      setPhone('');
      setEmail('');
      setPassword('');
    })
    .catch(err => {
      // Handle errors - display an error message
      if (isSignup && err.response?.status === 400) {
        // Email already exists
        toast.error(err.response.data.message);
      } else {
        toast.error("Your email and password is incorrect");
      }
      console.error(err);
    });
  }
  

  return (
    <Fragment>
     
      <div className="signup-container">
        <h1 className="signup-heading">
          {isSignup ? `Create a ${role === "buyer" ? "Buyer" : role === "seller" ? "Seller": role === "franchise" ? "Franchise" :""} Account` : "Login"}
        </h1>

        <form className="signup-box" onSubmit={handleSubmit}>
          {/* Show Name and Phone fields only if the user is signing up */}
          {isSignup && (
            <>
              <div className="input-group">
                <label htmlFor="name">Name</label>
                <input
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  required={isSignup}
                />
              </div>

              <div className="input-group">
                <label htmlFor="phone">Phone</label>
                <input
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  type="number"
                  required={isSignup}
                />
              </div>
            </>
          )}

{isFranchiseLogin && (
            <>
              <div className="input-group">
                <label htmlFor="name">Role Type</label>
               <select value={type} onChange={(e) => setType(e.target.value)}>
                <option >Select Role type</option>
                <option value={"District Franchise"}>District Franchise</option>
                <option value={"Dealer"}>Dealer</option>
                <option value={"Sub Dealer"}>Sub Dealer</option>
               </select>
              </div>

            </>
          )}

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              required
            />
          </div>

          <button className="submit-button" type="submit">
            {isSignup ? "Sign Up" : "Login"}
          </button>

          {/* Toggle between signup and login */}
          <h3 className='txt'>
            {isSignup ? "Already have an account?" : "Don't have an account?"} 
            <span 
              className="toggle-link" 
              onClick={() => setIsSignup(!isSignup)}
            >
              {isSignup ? " Login" : " Sign Up"}
            </span>
          </h3>
        </form>
      </div>
      
    </Fragment>
  );
};

export default SignupLogin;
