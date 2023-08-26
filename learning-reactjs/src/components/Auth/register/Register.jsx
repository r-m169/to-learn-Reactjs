import {React} from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate ,Link} from 'react-router-dom';
import './register.css'

const Register = () => {
  const navigate = useNavigate(); 

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
        <div className='container1'>
  
        <form onSubmit={formik.handleSubmit}>
          <div>
            <label></label>
            <input type="email" {...formik.getFieldProps('email')} placeholder='email'required/>
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
          </div>
          <br />
          <div>
            <label></label>
            <input type="text" {...formik.getFieldProps('username')} placeholder='username' required/>
            {formik.touched.username && formik.errors.username ? (
              <div>{formik.errors.username}</div>
            ) : null}
          </div>
          <br />
          <div>
            <label></label>
            <input type="password" {...formik.getFieldProps('password')} placeholder='passward' required/>
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
          </div>
          <br />
          <button type="submit">Register</button>
        </form>
        <Link to='/'><a >Already have an account? </a></Link>
      </div>
    );
};

export default Register;
