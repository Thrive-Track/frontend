import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Create Password.css";

const validationSchema = Yup.object().shape({
  newPassword: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .max(16, "Password must not exceed 16 characters")
    .matches(
      /^(?=.*?[A-Za-z])(?=.*?[0-9])(?=.*?[!@#$%^&*()_+])[A-Za-z0-9!@#$%^&*()_+]+$/,
      "Password must include at least one letter, one number, and one special character"
    )
    .required("New Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
    .required("Confirm New Password is required"),
});

function CreatePassword() {
  const initialValues = {
    newPassword: "",
    confirmPassword: "",
  };

  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission here (e.g., update password, redirect to success page, etc.)
    console.log(values);
    setSubmitting(false);
  };

  return (
    <>
      <body className="password_body">
        <div className="box1">
          <div className="title1">
            <h4 className="password_recovery">Password Recovery</h4>
          </div>
          <div className="change_password_form">
            <p className="new_password">Enter Your New Password</p>
            <p>Choose a password that can't be easily guessed</p>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  <Field
                    type="password"
                    name="newPassword"
                    placeholder="Create New Password"
                    className="password"
                  />
                  <ErrorMessage
                    name="newPassword"
                    component="div"
                    className="error_message"
                  />

                  <Field
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm New Password"
                    className="confirm_password"
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="error_message"
                  />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="change_password"
                  >
                    Change Password
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
        <div className="image_box">
          <img
            src="public\Key-rafiki 1.png"
            className="new_password_image"
          ></img>
        </div>
      </body>
    </>
  );
}

export default CreatePassword;
