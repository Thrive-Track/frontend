import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Password Recovery.css';

const validationSchema = Yup.object().shape({
  verificationCode: Yup.number().required('Verification Code is required'),
});

function Passrecover() {
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
      <body>
        <div>
          <div className='title1'>
            <h>Password Recovery</h>
          </div>
        </div>

        <div className="verificationCode_form">
          <p>Enter Verification Code</p>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <Field type="number" name="verificationCode" placeholder="Verification Code" className="verify_code" />
                <ErrorMessage name="verificationCode" component="div" className="error_message" />

                <button type="submit" disabled={isSubmitting} className="next_btn">Next</button>
              </Form>
            )}
          </Formik>
        </div>
      </body>
    </>
  );
}

export default Passrecover;
