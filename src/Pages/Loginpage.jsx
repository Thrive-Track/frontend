import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './login.css';

const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
});

function Loginpage() {
    const initialValues = {
        email: '',
        password: '',
    };

    const handleSubmit = (values, { setSubmitting }) => {
        // Handle form submission here (e.g., API call, data processing, etc.)
        console.log(values);
        setSubmitting(false);
    };

    return (
        <>
            <body>
                <div className='image_box'>
                    <img src='\Resume-rafiki 1.png'></img>
                </div>
                <div className='title1'>
                    <h>Welcome Back</h>
                </div>
                <div>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ isSubmitting }) => (
                            <Form className='sign_in_form'>
                                <div className='pass_email'>
                                    <ErrorMessage name='email' component='div' className='error_message' />
                                    <Field type='email' name='email' placeholder='Email' className='email' />

                                    <ErrorMessage name='password' component='div' className='error_message' />
                                    <Field type='password' name='password' placeholder='Password' maxLength={16} className='password' />
                                </div>

                                <button type='submit' disabled={isSubmitting} className='sign_in_btn'>
                                    Sign in
                                </button>
                                <div className='other_signIn'>
                                    <button type='submit' className='google_sign_in_btn'>
                                        Sign in with Google
                                        <img src='\google.png' className='google_icon'></img>
                                    </button>
                                    <button type='submit' className='facebook_sign_in_btn'>
                                        Sign in with Facebook
                                        <img src='\Vector.png' className='facebook_icon'></img>
                                    </button>
                                </div>
                                <div className='forgot'>
                                    <a className='forgot' href=''>Forgot password?</a>
                                </div>

                            </Form>
                        )}
                    </Formik>
                </div>
                <div className='go_to_sign_up'>
                    <p>
                        Don't have an account? <a href=''>Sign up</a>
                    </p>
                </div>
            </body>
        </>
    );
}

export default Loginpage;
