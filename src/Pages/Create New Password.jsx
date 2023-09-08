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
      <body>
        <div className="body">
          <div className="box2">
            <div className='title2'>
              <h className='heading1'>Password Recovery</h>
            </div>
            <div className="change_password_form">
              <p className="enter">Enter Your New Password</p>
              <p className="enter">Choose a password that can't be easily guessed</p>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <ErrorMessage name="newPassword" component="div" className="error_message0" />
                    <Field type="password" name="newPassword" placeholder="Create New Password" className="new_password" />

                    <ErrorMessage name="confirmPassword" component="div" className="error_message" />
                    <Field type="password" name="confirmPassword" placeholder="Confirm New Password" className="confirm_password" />

                    <button type="submit" disabled={isSubmitting} className="change_password">Change Password</button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
          <div className="createkey_img">
            <img src="\Key-rafiki 1.png" className="createpassimg"></img>
          </div>
        </div>


      </body>
    </>
  );
}

export default CreatePassword;
