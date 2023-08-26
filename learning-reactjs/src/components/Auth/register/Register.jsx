import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Register = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const formik = useFormik({
    initialValues: {
      email: '',
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Username is required'),
      email: Yup.string().required('Email is required').email('Invalid email address'),
      password: Yup.string().required('Password is required').min(10, 'Minimum 10 characters'),
    }),
    onSubmit: (values) => {
      // Store the registration data in local storage
      localStorage.setItem('registrationData', JSON.stringify(values));

      // Clear the form
      formik.resetForm();

      alert('Registration successful!');

      // Navigate to the login component
      navigate('/');
    },
  });

    return (
        <div>
        <h2>Register</h2>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <label>Email:</label>
            <input type="email" {...formik.getFieldProps('email')} />
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
          </div>
          <div>
            <label>Username:</label>
            <input type="text" {...formik.getFieldProps('username')} />
            {formik.touched.username && formik.errors.username ? (
              <div>{formik.errors.username}</div>
            ) : null}
          </div>
          <div>
            <label>Password:</label>
            <input type="password" {...formik.getFieldProps('password')} />
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    );
};

export default Register;
