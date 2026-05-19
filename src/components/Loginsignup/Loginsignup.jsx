import './Loginsignup.css'
import React, { useState } from 'react'

const Loginsignup = () => {
  const [isLogin, setIsLogin] = useState("sign up");
  return (
    <div className='container'>
      <div className="header">
        <div className="text">{isLogin}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">   
      {isLogin===("login")?<div></div>:<div className="input">
          <label htmlFor="1"></label>
          <input type="text" placeholder='Username' key="1"/>
        </div>}
 <div className="input">
          <label htmlFor="2"></label>
          <input type="email" placeholder='Email' key="2"/>
        </div>
         <div className="input">
          <label htmlFor="3"></label>
          <input type="password" placeholder='Password' key="3"/>
        </div>
        {isLogin===("sign up")?<div></div>:<div className="forgot-password">lost password? <span>Reset it</span></div>
}
        <div className="submit-container">
          <div className={isLogin==="login" ? 'submit gray':"submit"} onClick={() => setIsLogin("sign up")}>Sign up</div>
          <div className={isLogin==="sign up" ? 'submit gray':"submit"} onClick={() => setIsLogin("login")}>Login</div>
        </div>
        </div>  
    </div>
  )
}
export default Loginsignup