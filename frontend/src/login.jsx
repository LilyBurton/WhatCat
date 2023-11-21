import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './signUp.css';
import email from '../src/components/Assets/email_paw_wo_bg.png'
import password from '../src/components/Assets/password_tin_wo_bg.png'


function Login () {

    const [action,setAction] = useState("Back in the Prowl");
    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>{action}</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
            
                <div className="input">
                <img src={email} alt="paw" />
                    <input type="email" placeholder = "Email" />
                </div>

                <div className="input">
                <img src={password} alt="tin food" />
                    <input type="password" placeholder= "Password" />
                </div>
            
            </div>
            <div className="forgot-password">Lost Password? <span>Click Here!</span></div>
            <div className="submit-container">
                <Link to="/register" className={action==="Back in the Prowl"?"submit gray":"submit"} onClick={()=>{setAction("Welcome Human!")}}>Sign Up</Link>
                <Link to="/" className={action==="Welcome Human!"?"submit gray":"submit"} onClick={()=>{setAction("Back in the Prowl")}}>Login</Link>
            </div>
        </div>
    )
}

export default Login