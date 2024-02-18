import React, { useReducer } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import { useAppContext } from "../../Context/Context";
// import {DUMMY_USERS} from '../../DUMMY_USERS'
import {
  button_box,
  login_form_button,
  login_form_child,
} from "./loginFormStyle";

const initialState = {
  name: "",
  email: "",
  number:"",
  address:"",
  pass: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_NUMBER":
      return { ...state, number: action.payload };
    case "SET_ADDRESS":
      return { ...state, address: action.payload };
    case "SET_PASS":
      return { ...state, pass: action.payload };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

export default function LoginForm(props) {
  const {handleSignUp,handleToken} = useAppContext();
  const [state, dispatch] = useReducer(reducer, initialState);
  const Navigate = useNavigate();
  //
  const handleSignup = async(e) => {
    e.preventDefault();
    if(!state.name||!state.email||!state.number||!state.address||!state.pass){
      return alert('Credentials must not be empty')
    }
    if(!state.email.includes('@')){
      return alert('email must be valid')
    }
    if(state.number.length!==10){
      return alert('invalid number');
    }

    const apiUrl =process.env.REACT_APP_BACKEND_URL + "/user/signup";
    try{
    const response = await fetch(apiUrl,{
      method : 'POST',
      headers : {
        'Content-type' : 'application/json',
      },
      body:JSON.stringify({
        name : state.name,
        email : state.email,
        password : state.pass,
        number : state.number,
        address : state.address
      })
    })
    const userData = await response.json();
    const user = userData.user;
    const token = userData.token;
    if(token){
      handleSignUp(user);
      handleToken(token);
      localStorage.setItem('userData',JSON.stringify({user:user,token:token}));
      Navigate(`/upload/${user._id}`, { state: { getProfile: false }, replace: true });
    }
    else{
      alert('user already exist !')
    }
    
    dispatch({ type: 'RESET' });
  } catch(error){
    alert('logging In failed,Please try again');
    console.error(error);
  }
  };
  //
  
  
  

  return (
    <>
      <Box sx={props.login_form}>
        <form>
          <Box>
            <input
              id = 'name'
              value={state.name}
              onChange={(e) =>
                dispatch({ type: "SET_NAME", payload: e.target.value })
              }
              style={login_form_child}
              type="text"
              placeholder="User Name"
            />
          </Box>
          <Box sx={{ marginTop: "20px" }}>
            <input
              id = 'email'
              value={state.email}
              onChange={(e) =>
                dispatch({ type: "SET_EMAIL", payload: e.target.value })
              }
              style={login_form_child}
              type="email"
              placeholder="E-mail Id"
            />
          </Box>
          <Box sx={{ marginTop: "20px" }}>
            <input
              id = 'number'
              value={state.number}
              onChange={(e) => {
                const inputValue = e.target.value;
                if (/^\d{0,10}$/.test(inputValue)) { // Check if input is exactly 10 digits
                  dispatch({ type: "SET_NUMBER", payload: inputValue });
                }
              }}
              style={login_form_child}
              type="text"
              placeholder="Contact Number"
            />
          </Box>
          <Box sx={{ marginTop: "20px" }}>
            <input
              id="address"
              value={state.address}
              onChange={(e) =>
                dispatch({ type: "SET_ADDRESS", payload: e.target.value })
              }
              style={login_form_child}
              type="text"
              placeholder="Address"
            />
          </Box>
          <Box sx={{ marginTop: "20px" }}>
            <input
              id = 'password'
              value={state.pass}
              onChange={(e) =>
                dispatch({ type: "SET_PASS", payload: e.target.value })
              }
              style={login_form_child}
              type="password"
              placeholder="Password"
            />
          </Box>

          <Box sx={button_box}>
            <Button
              onClick={handleSignup}
              sx={login_form_button}
              variant="contained"
            >
              Sign Up
            </Button>
          </Box>
          <Box sx={{ marginTop: "20px", display: "flex" }}>
            <Typography>Already have an account ? </Typography>
            <Typography sx={{ marginLeft: "5px" }}>
              <Link to="/login">Login</Link>
            </Typography>
          </Box>
        </form>
      </Box>
    </>
  );
}
