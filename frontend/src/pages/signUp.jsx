import React, { useState } from 'react';
import { useSignup } from '../hook/useSignup'
import { Link } from 'react-router-dom';
import './signUp.css';
import username from '../components/Assets/username_cat_wo_bg.png';
import email_img from '../components/Assets/email_paw_wo_bg.png';
import password_img from '../components/Assets/password_tin_wo_bg.png';
import confirm_password from '../components/Assets/confirmpassword_deadfish_wo_bg.png';


function Signup () {
    const [action, setAction] = useState("Welcome Human!");
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState(); 
    const {signup, error, isLoading } = useSignup();
    
    const handleSubmit = async (e) => {
        e.preventDefault()

        await signup(name, email, password, confirmPassword)
    }
    

    return (
        <>
            <div className='container'>
            <div className='header'>
                <div className='text'>{action}</div>
                <div className='underline'></div>
            </div>
            <form className="inputs" onSubmit={handleSubmit}>
                {action === "Back in the Prowl" ? <div></div> : <div className="input">
                <img src={username} alt="cat_face" />
                <input 
                name="username"
                className="input"
                type="text" 
                placeholder="Username"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
                </div>}
                

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

                {action==="Back in the Prowl"?<div></div>:<div className="input">
                <img src={confirm_password} alt="dead fish" />
                    <input 
                    name= "confirmPassword"
                    className="input"
                    type="password" 
                    placeholder= "Confirm Password" 
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)
                    }
                    />
                </div>}
            
            
                <div className="forgot-password">Lost Password? <span>Click Here!</span></div>
                    {error && <div className='error'>{error}</div>} 
                    <div className="submit-container">
                        <button disabled={isLoading} type="submit" className={action === "Back in the Prowl" ? "submit gray" : "submit"} onClick={() => { setAction("Welcome Human!") }}>Sign Up</button>
                        <Link to="/login" className={action === "Welcome Human!" ? "submit gray" : "submit"} onClick={() => { setAction("Back in the Prowl") }}>Login</Link>
                    </div>
                
            </form>
            </div>
        </>
    );
}


export default Signup