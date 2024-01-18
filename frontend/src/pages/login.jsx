import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './signUp.css';
import email_img from '../components/Assets/email_paw_wo_bg.png'
import password_img from '../components/Assets/password_tin_wo_bg.png'


function Login () {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    
    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log(email, password)
    }

    const [action,setAction] = useState("Back in the Prowl");
    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>{action}</div>
                <div className='underline'></div>
            </div>
            <div className='inputs' onSubmit={handleSubmit}>
            
            <div className="input">
                <img src={email_img} alt="paw" />
                    <input 
                    name="email"
                    className="input"
                    type="email" 
                    placeholder = "Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)
                    }
                    />
                </div>

            <div className="input">
                <img src={password_img} alt="tin food" />
                    <input 
                    name="password"
                    className="input"
                    type="password" 
                    placeholder= "Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)
                    }
                    />
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