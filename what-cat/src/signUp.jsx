import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './signUp.css';
import username from '../src/components/Assets/username_cat_wo_bg.png'
import email from '../src/components/Assets/email_paw_wo_bg.png'
import password from '../src/components/Assets/password_tin_wo_bg.png'
import confirm_password from '../src/components/Assets/confirmpassword_deadfish_wo_bg.png'

const Signup = () => {

    const [action,setAction] = useState("Welcome Human!");
    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>{action}</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
                {action==="Back in the Prowl"?<div></div>:<div className="input">
                <img src={username} alt="cat_face" />
                    <input type="text" placeholder = "Username" />
                </div>}
                

                <div className="input">
                <img src={email} alt="paw" />
                    <input type="email" placeholder = "Email" />
                </div>

                <div className="input">
                <img src={password} alt="tin food" />
                    <input type="password" placeholder= "Password" />
                </div>

                {action==="Back in the Prowl"?<div></div>:<div className="input">
                <img src={confirm_password} alt="dead fish" />
                    <input type="password" placeholder= "Confirm Password" />
                </div>}
            
            </div>
            <div className="forgot-password">Lost Password? <span>Click Here!</span></div>
            <div className="submit-container">
                <button className={action==="Back in the Prowl"?"submit gray":"submit"} onClick={()=>{setAction("Welcome Human!")}}>Sign Up</button>
                <Link to="/login" className={action==="Welcome Human!"?"submit gray":"submit"} onClick={()=>{setAction("Back in the Prowl")}}>Login</Link>
            </div>
        </div>
    )
}

export default Signup