import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Username required"),
  email: Yup.string().email("Invalid email").required("Email required"),
  password: Yup.string()
    .min(6, "Password must be 6+ chars")
    .required("Password required")
});

const FormikForm = () => {
  return (
    <div>
      <h2>Registration Form (Formik + Yup)</h2>

      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm, setStatus }) => {
          setStatus("Submitting...");

          setTimeout(() => {
            setStatus("Registration successful!");
            resetForm();
            setSubmitting(false);
          }, 1500);
        }}
      >
        {({ status, isSubmitting }) => (
          <Form>
            <label>Username</label>
            <Field name="username" />
            <ErrorMessage name="username" component="div" style={{ color: "red" }} />

            <label>Email</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" component="div" style={{ color: "red" }} />

            <label>Password</label>
            <Field name="password" type="password" />
            <ErrorMessage name="password" component="div" style={{ color: "red" }} />

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Register"}
            </button>

            {status && <p>{status}</p>}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;
