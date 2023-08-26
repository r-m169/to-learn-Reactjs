import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';

const LoginComponent = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().required('Email is required').email('Invalid email address'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: (values) => {
      // Retrieve registration data from local storage
      const registrationData = JSON.parse(localStorage.getItem('registrationData'));

      if (
        registrationData &&
        registrationData.email === values.email &&
        registrationData.password === values.password
      ) {
        // Successful login
        formik.resetForm();
        alert('Login successful!');
        navigate('/products');
      } else {
        // Failed login
        alert('Invalid email or password');
      }
    },
  });

  return (
    <div className="container1">
      
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label></label>
          <input type="email" {...formik.getFieldProps('email')} placeholder='Email' required/>
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
        </div>
        <br />
        {/* <br /> */}
        <div>
          <label></label>
          <input type="password" {...formik.getFieldProps('password')} placeholder='Passward' required/>
          {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null}
        </div>
        <br />
        
        <button type="submit">Sign in</button>
       
      </form>
      <Link to='/register'><a >New User? Create an account </a></Link>
    </div>
  );
};

export default LoginComponent;
