import React, { useState ,useContext} from 'react'
import { useHistory } from 'react-router-dom';
import AlertContext from '../context/alert/alertContext'

const Login =() => {
    let history= useHistory();
    const context = useContext(AlertContext);
    const { showAlert } = context;

    const [creds, setCreds] = useState({ email: "", password: "" })
    const handleClick = async (e) => {
        
        e.preventDefault();
        //API call
        const response = await fetch("http://localhost:5000/api/auth/login",
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: creds.email, password: creds.password })
            });
        const json = await response.json();
        console.log(json);
        if(json.success) {
            showAlert("Login suceesfully","success");
            localStorage.setItem('token',json.authtoken);
            history.push("/");
            
        }
        // redirect
        else{
            showAlert("Invalid Credentials","danger");
        }
    };


    const onChange = (e) => {
        setCreds({ ...creds, [e.target.name]: e.target.value }); // 
    }
    return (
        <div>
            
            <h2> Login</h2>
            <form onSubmit={handleClick}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" autoComplete="on" value={creds.email} onChange={onChange} />

                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" name="password" id="password" autoComplete="on" value={creds.password} onChange={onChange} />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            
        </div>
    )
}

export default Login