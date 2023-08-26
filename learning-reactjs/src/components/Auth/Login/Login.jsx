import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';

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
    <div>
      <h2>Login</h2>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" {...formik.getFieldProps('email')} />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
        </div>
        <div>
          <label>Password:</label>
          <input type="password" {...formik.getFieldProps('password')} />
          {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null}
        </div>
        <button type="submit">Login</button>
        <Link to='/register'>register</Link>
      </form>
    </div>
  );
};

export default LoginComponent;
