import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './signUp.css';
import username from '../src/components/Assets/username_cat_wo_bg.png';
import email_img from '../src/components/Assets/email_paw_wo_bg.png';
import password_img from '../src/components/Assets/password_tin_wo_bg.png';
import confirm_password from '../src/components/Assets/confirmpassword_deadfish_wo_bg.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup () {

    const [action, setAction] = useState("Welcome Human!");
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/register', {name, email, password})
        .then(result => console.log(result))
        .catch(err => console.log(err))
        navigate('/login')
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
                <input type="text" placeholder="Username" onChange={(e) => setName(e.target.value)} />
                </div>}
                

                <div className="input">
                <img src={email_img} alt="paw" />
                    <input type="email" placeholder = "Email" onChange={(e) => setEmail(e.target.value)}/>
                </div>

                <div className="input">
                <img src={password_img} alt="tin food" />
                    <input type="password" placeholder= "Password" onChange={(e) => setPassword(e.target.value)}/>
                </div>

                {action==="Back in the Prowl"?<div></div>:<div className="input">
                <img src={confirm_password} alt="dead fish" />
                    <input type="password" placeholder= "Confirm Password" onChange={(e) => setPassword(e.target.value)}/>
                </div>}
            
            
                <div className="forgot-password">Lost Password? <span>Click Here!</span></div>
                    <div className="submit-container">
                        <button type="submit" className={action === "Back in the Prowl" ? "submit gray" : "submit"} onClick={() => { setAction("Welcome Human!") }}>Sign Up</button>
                        <Link to="/login" className={action === "Welcome Human!" ? "submit gray" : "submit"} onClick={() => { setAction("Back in the Prowl") }}>Login</Link>
                    </div>
            </form>
            </div>
        </>
    );
}

export default Signup