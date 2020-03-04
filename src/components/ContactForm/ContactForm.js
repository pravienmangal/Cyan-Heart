import React from 'react'
import TextInput from '../TextInput/TextInput'
import TexArea from '../TextArea/TextArea'
import { Formik } from 'formik'
import { validationSchema } from '../../utils/formValidation'

const ContactForm = () => {

  return (
    <div className="form-container">
      <Formik
        initialValues={{
          name: '',
          email: '',
          phone: '',
          message: ''
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          setTimeout(() => {
            resetForm();
            setSubmitting(false);
          }, 1000);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
        }) => (
            <form onSubmit={handleSubmit}>
              <TextInput
                name="name"
                label="Name *"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                errorMessage={touched.name && errors.name}
              />
              <TextInput
                name="email"
                label="Email *"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                errorMessage={touched.email && errors.email}
              />
              <TextInput
                name="phone"
                label="Telephone"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
              />
              <TexArea
                name="message"
                label="Message *"
                rows="8"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.message}
                errorMessage={touched.message && errors.message}
              />
              <button
                type="submit"
                className="btn"
                disabled={isSubmitting}
              >
                Submit your message
            </button>
            </form>
          )}
      </Formik>
    </div>
  );
};

export default ContactForm;