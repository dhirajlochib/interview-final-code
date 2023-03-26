//Login Compo.

import React from 'react'
import axios from 'axios'
const baseURL = 'http://localhost:3000/api'
const Login = () => {

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const email = document.getElementById('email').value
            const password = document.getElementById('password').value
            const response = await axios.post(`${baseURL}/login`, { email, password })
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <>

            <form className="container mt-5" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>


        </>

    )
}

export default Login