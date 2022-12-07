import React from "react";
import { useState } from "react";
import style from "../Auth/Auth.module.css";

export default function Auth() {
  const [isSignup, setIsSignup] = useState(false);

  const handleSwitch = () => {
    setIsSignup(!isSignup);
  };
  return (
    <div className={style.Auth}>
      <div className={style.authcon}>
        {!isSignup && <div className={style.icon}><i class="fa-solid fa-right-to-bracket"></i></div>}
        {isSignup && <div className={style.icon}><i class="fa-solid fa-user-plus"></i></div>}
        <form>
          {isSignup && (
            <label htmlFor="">
              <input type="text" id="name" placeholder="Name" />
            </label>
          )}<br/>

          <label htmlFor="email">
            <input type="email" placeholder="Email" name="email" id="email" />
          </label>
          <label htmlFor="password">
            <div className="">{!isSignup && <span>Forgot Password?</span>}</div>
            <input
              type="password"
              placeholder="password"
              name="password"
              id="password"
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
