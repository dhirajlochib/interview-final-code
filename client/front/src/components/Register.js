//register Compo.

import React from 'react'

const Register = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit");
    }
    return (
        <>

            <form className="container mt-5" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Enter Your Name</label>
                    <input type="text" className="form-control" id="name" />
                </div>
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

export default Register