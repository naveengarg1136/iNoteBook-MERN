import React,{useEffect,useContext} from 'react'
import { useHistory } from 'react-router-dom';
import {Link,useLocation} from "react-router-dom";
import AlertContext from '../context/alert/alertContext'

const Navbar = () => {
    let history=useHistory();
    const context = useContext(AlertContext);
    const { showAlert } = context;

    const handleLogout=()=>{
        localStorage.removeItem('token');
        showAlert("Logout scuucssfully","success");
        history.push("/login");
    }
    let location=useLocation();
    useEffect(()=>{

    },[location]);

    return (
        <>
            <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">iNoteBook</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname==="/" ? "active":""}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname==="/about" ? "active":""}`} to="/about">About</Link>
                            </li>
                            
                        </ul>
                        
                        {!localStorage.getItem('token') ?
                        <div className='d-flex'>
                        <Link className="btn btn-outline-light btn-sm mx-2" to="/login" role="button">Login</Link>
                        <Link className="btn btn-outline-light btn-sm mx-2" to="/signup" role="button">Sign up</Link>
                        </div>
                        :
                        <button className="btn btn-outline-light btn-sm mx-2" onClick={handleLogout}>Logout</button>
                        }
                        

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar