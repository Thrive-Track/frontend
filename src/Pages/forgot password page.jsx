import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './forgot password.css';
import { Link } from "react-router-dom";

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
});

function ForgotPassword() {
  const initialValues = {
    email: '',
  };

  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission here (e.g., API call to send verification code, etc.)
    console.log(values);
    setSubmitting(false);
  };

  return (
    <>
      <body className="forgot_body">

        <div className="box1">
          <div className='title1'>
            <h>Forgot Password?</h>
          </div>
          <div className="forgot_pass">
            <p className="mailer">Enter Your Email Address and you will be sent a verification code to recover your password</p>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  <ErrorMessage name="email" component="div" className="error_message" />
                  <Field type="email" name="email" placeholder="Email" className="email2" />

                  <Link to={"/password recovery"}>
                    <button type="submit" disabled={isSubmitting} className="sendCode_Btn">Send Code</button>
                  </Link>
                </Form>
              )}
            </Formik>
          </div>
        </div>
        <div className="forgot_image">
          <img src="\Reset password-pana 1 1.png" className="image3"></img>
        </div>
      </body>
    </>
  );
}

export default ForgotPassword;
