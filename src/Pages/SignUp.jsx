import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Signuppage.css";
import { Link } from "react-router-dom";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  name: Yup.string().required("Name is required"),
  username: Yup.string().required("Username is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .max(16, "Password must not exceed 16 characters")
    .matches(
      /^(?=.*?[A-Za-z])(?=.*?[0-9])(?=.*?[!@#$%^&*()_+])[A-Za-z0-9!@#$%^&*()_+]+$/,
      "Password must include at least one letter, one number, and one special character"
    )
    .required("Password is required"),
});

function Signup() {
  const initialValues = {
    email: "",
    name: "",
    username: "",
    password: "",
  };

  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission here (e.g., API call, data processing, etc.)
    console.log(values);
    setSubmitting(false);
  };

  return (
    <>
      <div>
        <body className="body">
          <div>
            <img
              src="public\Illustration - Scene Wireframe.png"
              className="image_signup"
            />
          </div>
          <div className="top_bar">
            <h2 className="sigup_heading">Create Your Account</h2>
          </div>
          <div className="sign_up_form">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="name_email">
                    <Field
                      type="text"
                      name="name"
                      placeholder="Name"
                      className="name input_button"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="error_message"
                    />

                    <Field
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="email input_button"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="error_message"
                    />
                  </div>
                  <div className="user_pass">
                    <Field
                      type="text"
                      name="username"
                      placeholder="Username"
                      className="user_name input_button"
                    />
                    <ErrorMessage
                      name="username"
                      component="div"
                      className="error_message"
                    />

                    <Field
                      type="password"
                      name="password"
                      placeholder="Password"
                      maxLength={16}
                      className="password input_button"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="error_message"
                    />
                  </div>
                  <button
                    type="submit"
                    onChange={isSubmitting}
                    className="sign_up_btn"
                  >
                    Sign up
                  </button>
                  <div className="other_signUp">
                    <button
                      type="submit"
                      className="google_sign_up_btn input_button"
                    >
                      Sign up with Google
                      <img src="google.png" className="google_image" />
                    </button>

                    <button
                      type="submit"
                      className="facebook_sign_up_btn input_button"
                    >
                      Sign up with Facebook
                      <img
                        src="Vector.png"
                        className="google_image facebook_icon"
                      />
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
            <p className="sign_up">
              By signing up, you are indicating you have read and agreed to
              <br /> our
              <Link className="link">Terms of Service</Link> and
              <Link className="link">Privacy Policy</Link>
            </p>
          </div>
          <div className="go_to_signIn">
            <p>
              Already have an account?
              <Link to={"/sign in"} className="link">
                Sign in
              </Link>
            </p>
          </div>
        </body>
      </div>
    </>
  );
}

export default Signup;
