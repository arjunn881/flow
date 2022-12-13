import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import style from "../Auth/Auth.module.css";
import { signup, login } from "../../actions/Auth";

export default function Auth() {
  const [isSignup, setIsSignup] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch()
  const navigate = useNavigate()


  const handleSwitch = () => {
    setIsSignup(!isSignup);
  };

  const handleSubmit =(e)=>{
    e.preventDefault();
    if( ! email  && ! password){
      alert("enter email & password ")
    }

    if(isSignup){
      if(! name){
        alert("enter name to continue")
      }
     dispatch(signup({ name, email, password }),navigate)
    } else {
      dispatch(login({email, password}),navigate)
    }
    console.log({name,email,password})
  }
  return (
    <div className={style.Auth}>
      <div className={style.authcon}>
        {!isSignup && <div className={style.icon}><i class="fa-solid fa-right-to-bracket"></i></div>}
        {isSignup && <div className={style.icon}><i class="fa-solid fa-user-plus"></i></div>}
        <form onSubmit={handleSubmit}>
          {isSignup && (
            <label htmlFor="">
              <input type="text" id="name" placeholder="Name" onChange={(e)=>{setName(e.target.value)}} />
            </label>
          )}<br/>

          <label htmlFor="email">
            <input type="email" placeholder="Email" name="email" id="email" onChange={(e)=>{setEmail(e.target.value)}} />
          </label>
          <label htmlFor="password">
            <div className="">{!isSignup && <span>Forgot Password?</span>}</div>
            <input
              type="password"
              placeholder="password"
              name="password"
              id="password" onChange={(e)=>{setPassword(e.target.value)}}
            />
            {isSignup && <p>Password must contain 8 characters</p>}
          </label>
          <button type="submit" className="authbtn">
            {isSignup ? "Sign Up" : "Login"}
          </button>
        </form>

        <p>
          {isSignup ? "Already have an account?" : "Don't have an account"}
          <button
            type="button"
            className="handleswitchbtn"
            onClick={handleSwitch}
          >
            {isSignup ? "Login" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
}
