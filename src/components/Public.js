import React from 'react';
import { Link, Redirect} from 'react-router-dom';
import Auth from '../Auth';
import { useState, useEffect } from "react";
import './Public.css';

const Public = () => {
    const login = () => {
        Auth.authenticate();
        // console.log(Auth.getAuth());
        // const nav = useNavigate();
        // history.push('/protected'); 
    }

    const initialValues = { username: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [isSubmit, setIsSubmit] = useState(false);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if(validate(formValues)) {
        setIsSubmit(true);
        // console.log("Yup");
        login();
      }
    
    };
  
    const validate = (values) => {
      if (values.username!='XYZ') {
        alert("Wrong Username");
        return false;
      }
      if (values.password!=123) {
        alert("Wrong Password");
        return false;
      }
      return true;
    };

    return (
      <div className='login-main'>
        <h1 className='home-heading'>User Management System</h1>

        <form className='form'>
            <input className='username' type='text' placeholder='Username' name='username' value={formValues.username} onChange={handleChange} />
            <input className='password' type='password' placeholder='Password' name='password' value={formValues.password} onChange={handleChange} />
            <button onClick={handleSubmit} type='submit' className='login-button' ><Link to='protected' className='link'>Login</Link></button>
        </form>
      </div>
    )
}

export default Public;