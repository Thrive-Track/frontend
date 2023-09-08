import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./ForgotPassword.css";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
});

function ForgotPassword() {
  const initialValues = {
    email: "",
  };

  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission here (e.g., API call to send verification code, etc.)
    console.log(values);
    setSubmitting(false);
  };

  return (
    <>
      <body className="body">
        <div className="box1">
          <div className="title1">
            <h4>Forgot Password?</h4>
          </div>
          <div className="forgot_pass">
            <p className="password_recovery">
              Enter Your Email Address and you will be sent a verification code
              to recover your password
            </p>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="email"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error_message"
                  />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="sendCode_Btn"
                  >
                    Send Code
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
        <div className="image_box">
          <img
            src="public\Reset password-pana 1 1.png"
            className="password_recovery_image"
          ></img>
        </div>
      </body>
    </>
  );
}

export default ForgotPassword;
