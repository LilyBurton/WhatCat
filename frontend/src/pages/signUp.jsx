import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './signUp.css';
import username from '../components/Assets/username_cat_wo_bg.png';
import email_img from '../components/Assets/email_paw_wo_bg.png';
import password_img from '../components/Assets/password_tin_wo_bg.png';
import confirm_password from '../components/Assets/confirmpassword_deadfish_wo_bg.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Signup () {
    const [action, setAction] = useState("Welcome Human!");
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate()

const [formInput, setFormInput] = useState({
        username: "",
        email: "",
        password: "",
        confirmPass: "",
        successMsg: "",
    });

    const [formError, setFormError] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleUserInput = (name, value) => {
        setFormInput({
            ...formInput,
            [name]: value,
        });
    };

    const validateFormInput = (event) => {
        event.preventDefault();

        let inputError = {
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
        };

        if (!formInput.username && !formInput.email && !formInput.password) {
            setFormError ({
                ...inputError,
                username: "Username is required",
                email: "Enter a valid email address",
                password: "Password is required",
            });
            return;
        }

        if (!formInput.username) {
            setFormError ({
                ...inputError,
                username: "Username is required",
            }); 
            return;
        }

        if (!formInput.email) {
            setFormError ({
                ...inputError,
                email: "Enter a valid email address",
            }); 
            return;
        }

        if (formInput.confirmPassword !== formInput.password) {
            setFormError ({
                ...inputError,
                confirmPassword: "Password should match"
            });
            return;
        }

        if (!formInput.password) {
            setFormError ({
                ...inputError,
                password: "Password is required",
            }); 
            return;
        }

        axios.post('http://localhost:3001/register', {name, email, password})
        .then(result => console.log(result))
        .catch(err => console.log(err))
        navigate('/login')

        setFormError(inputError);
        setFormInput((prevState) => ({
            ...prevState,
        }))
    }
    
        
    

    return (
        <>
            <div className='container'>
            <div className='header'>
                <div className='text'>{action}</div>
                <div className='underline'></div>
            </div>
            <form className="inputs" onSubmit={validateFormInput}>
                {action === "Back in the Prowl" ? <div></div> : <div className="input">
                <img src={username} alt="cat_face" />
                <input 
                name="username"
                className="input"
                type="text" 
                placeholder="Username"
                value={formInput.username}
                onChange={(e) => setName(e.target.name, e.target.value)}
                />

                <p className="error-message">{formError.username}</p>
                </div>}
                

                <div className="input">
                <img src={email_img} alt="paw" />
                    <input 
                    name="email"
                    className="input"
                    type="email" 
                    placeholder = "Email"
                    value={formInput.email}
                    onChange={({ target }) => {
                        handleUserInput(target.name, target.value)
                    }}
                    />

                <p className="error-message">{formError.email}</p>
                </div>

                <div className="input">
                <img src={password_img} alt="tin food" />
                    <input 
                    name="password"
                    className="input"
                    type="password" 
                    placeholder= "Password"
                    value={formInput.password}
                    onChange={({ target }) => {
                        handleUserInput(target.name, target.value)
                    }} 
                    />

                <p className="error-message">{formError.password}</p> 
                </div>

                {action==="Back in the Prowl"?<div></div>:<div className="input">
                <img src={confirm_password} alt="dead fish" />
                    <input 
                    name= "confirmPassword"
                    className="input"
                    type="password" 
                    placeholder= "Confirm Password" 
                    value={formInput.confirmPassword}
                    onChange={({ target }) => {
                        handleUserInput(target.name, target.value)
                    }}
                    />

                <p className="error-message">{formError.confirmPassword}</p> 
                <p className="success-message">{formInput.successMsg}</p>
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