import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Password Recovery.css';
import { Link } from "react-router-dom";

const validationSchema = Yup.object().shape({
  verificationCode: Yup.number().required('Verification Code is required'),
});

function PassRecover() {
  const initialValues = {
    verificationCode: '',
  };

  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission here (e.g., validate verification code, redirect to next step, etc.)
    console.log(values);
    setSubmitting(false);
  };

  return (
    <>
      <body className="recover">
        <div>
          <div className='title3'>
            <h>Password Recovery</h>
          </div>
        </div>

        <div className="verificationCode_form">
          <p className="verify">Enter Verification Code</p>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <ErrorMessage name="verificationCode" component="div" className="error_message" />
                <Field type="number" name="verificationCode" placeholder="Verification Code" className="verify_code" />

                <Link to={"/create password"}>
                  <button type="submit" disabled={isSubmitting} className="next_btn">Next</button>
                </Link>

              </Form>
            )}
          </Formik>
        </div>
      </body>
    </>
  );
}

export default PassRecover;
