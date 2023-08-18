import React from 'react';
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import '../Login/login.css'
import { login } from '../../../services/auth.service';

const Register = () => {
    const [userData, setUserData] = useState(null);

    const loginForm = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: "",
        },
        onSubmit: async (formValues) => {
            const data = await login(formValues);
            setUserData(data);
        },
        validationSchema: Yup.object().shape({
            username: Yup.string().required("Username is required"),
            email: Yup.string().required("Email is required").email("Invalid email address"),
            password: Yup.string().required("Password is required").min(10, "Minimum 10 characters"),
        }),
    });

    return (
        <div className="login-container">
            <form onSubmit={loginForm.handleSubmit} className="login-form">
                <div className="form-group">
                    <label htmlFor="username"></label>
                    <input
                        value={loginForm.values.username}
                        onChange={loginForm.handleChange}
                        onBlur={loginForm.handleBlur}
                        name="username"
                        type="text"
                        id="username"
                        className="input-field"
                        placeholder='Username'
                    />
                    {loginForm.touched.username && loginForm.errors.username && (
                        <div className="alert alert-danger my-1" role="alert">
                            {loginForm.errors.username}
                        </div>
                    )}
                </div>
                <div className="form-group">
                    <label htmlFor="email"></label>
                    <input
                        value={loginForm.values.email}
                        onChange={loginForm.handleChange}
                        onBlur={loginForm.handleBlur}
                        name="email"
                        type="email"
                        id="email"
                        className="input-field"
                        placeholder='Email'
                    />
                    {loginForm.touched.email && loginForm.errors.email && (
                        <div className="alert alert-danger my-1" role="alert">
                            {loginForm.errors.email}
                        </div>
                    )}
                </div>
                <div className="form-group">
                    <label htmlFor="password"></label>
                    <input
                        value={loginForm.values.password}
                        onChange={loginForm.handleChange}
                        onBlur={loginForm.handleBlur}
                        name="password"
                        type="password"
                        id="password"
                        className='input-field'
                        placeholder='Password'
                    />
                    {loginForm.touched.password && loginForm.errors.password && (
                        <div className="alert alert-danger my-1" role="alert">
                            {loginForm.errors.password}
                        </div>
                    )}
                </div>
                <div className="saver">
                    <button
                        disabled={!loginForm.isValid}
                        className="btn btn-primary"
                    >
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Register;
