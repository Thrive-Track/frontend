import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./login.css";
import { Link } from "react-router-dom";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

function Loginpage() {
  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission here (e.g., API call, data processing, etc.)
    console.log(values);
    setSubmitting(false);
  };

  return (
    <>
      <body className="body">
        <div>
          <img src="public\Resume-rafiki 1.png" className="login_image"></img>
        </div>
        <div className="title1">
          <h2>Welcome Back</h2>
        </div>
        <div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="sign_in_form">
                <div className="pass_email">
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

                  <Field
                    type="password"
                    name="password"
                    placeholder="Password"
                    maxLength={16}
                    className="password"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="error_message"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="sign_in_btn"
                >
                  Sign in
                </button>
                <div className="other_signIn">
                  <button type="submit" className="google_sign_in_btn">
                    Sign in with Google
                  </button>
                  <button type="submit" className="facebook_sign_in_btn">
                    Sign in with Facebook
                  </button>
                </div>
                <div className="forgot">
                  <Link to={"/forgot password"} className="forgot">
                    Forgot password?
                  </Link>
                </div>
              </Form>
            )}
          </Formik>
        </div>
        <div className="go_to_sign_up">
          <p className="paragraph">
            Don't have an account? <Link to={"/sign up"}>Sign up</Link>
          </p>
        </div>
      </body>
    </>
  );
}

export default Loginpage;
