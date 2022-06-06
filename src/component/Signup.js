import React, { useState,useContext } from 'react'
import { useHistory } from 'react-router-dom';
import AlertContext from '../context/alert/alertContext'

const Signup = () => {
  let history= useHistory();
  const context = useContext(AlertContext);
    const { showAlert } = context;

    const [creds, setCreds] = useState({ name:"",email: "", password: "" })
    const handleClick = async (e) => {
        
        e.preventDefault();
        //API call
        const {name,email,password}=creds;

        const response = await fetch("http://localhost:5000/api/auth/createuser",
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name,email,password })
            });
        const json = await response.json();
        console.log(json);
        if(json.success) {
            showAlert("Signup suceesfully","danger");
            localStorage.setItem('token',json.authtoken);
            history.push("/");
            
        }
        // redirect
        else{
            showAlert("Invalid Credentials","danger");
        }
    };


    const onChange = (e) => {
        setCreds({ ...creds, [e.target.name]: e.target.value });
    }
  return (
    <div>
        <div>
            <h2> Signup</h2>
            <form onSubmit={handleClick}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name="name" autoComplete="on" value={creds.name} onChange={onChange} />

                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" autoComplete="on" value={creds.email} onChange={onChange} required />

                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" name="password" id="password" autoComplete="on" value={creds.password} onChange={onChange} minLength={5} required />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Signup;