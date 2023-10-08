import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const sound = require('../audio/beep-6-96243.mp3')


export default function Login() {
    const [credentials, setCredentials] = useState({ email: "", password: "" })
    let navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/loginuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })

        });
        const json = await response.json()
        console.log(json);
        if (json.success) {
            localStorage.setItem("userEmail", credentials.email)
            localStorage.setItem("authToken", json.Token);
            navigate("/");
        }
        else {
            if (credentials.email.length === 0) {
                if (credentials.password.length === 0) {
                    new Audio(sound).play();
                    toast.warning('Please enter email and password', {
                        position: toast.POSITION.BOTTOM_RIGHT
                    });
                } else {
                    new Audio(sound).play();
                    toast.warning('Email cant be left empty', {
                        position: toast.POSITION.BOTTOM_RIGHT
                    });
                }
            } else if (credentials.password.length === 0) {
                new Audio(sound).play();
                toast.warning('Please enter password', {
                    position: toast.POSITION.BOTTOM_RIGHT
                });
            }else {
                new Audio(sound).play();
                toast.warning('Please enter correct credentials', {
                    position: toast.POSITION.BOTTOM_RIGHT
                });
            }

        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <div style={{
            backgroundImage: 'url("https://i.pinimg.com/originals/7d/c2/05/7dc2059d41b19f2caa2b1c97fd955f3c.jpg")', backgroundSize: 'cover', height: '100vh',
            opacity: 10
        }}>
            <ToastContainer />
            <div>
                <Navbar />
            </div>

            <div className='container text-white w-50  form-div  '
                style={{ backgroundColor: 'transparent' }}>

                <form className='m-auto mt-5 border border-dark rounded form-box' onSubmit={handleSubmit}>

                    <div className="m-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} aria-describedby="emailHelp" />
                    </div>
                    <div className="m-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" value={credentials.password} onChange={onChange} name='password' />
                    </div>
                    <button type="submit" className="m-3 btn btn-success">Submit</button>
                    <Link to="/createUser" className="m-3 mx-1 btn btn-danger">Register</Link>
                </form>

            </div>

        </div>
    )
}
