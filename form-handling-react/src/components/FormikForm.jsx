import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormikForm = () => {
  const initialValues = {
    username: "",
    email: "",
    password: ""
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required")
  });

  const handleSubmit = (values, { setSubmitting, resetForm, setStatus }) => {
    setStatus("Submitting...");

    // Simulate API call
    setTimeout(() => {
      setStatus("Registration successful!");
      resetForm();
      setSubmitting(false);
    }, 1500);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
      <h2>Register (Formik + Yup)</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ status, isSubmitting }) => (
          <Form>
            <label>Username:</label>
            <Field type="text" name="username" />
            <ErrorMessage name="username" component="div" style={{ color: "red" }} />

            <label>Email:</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" style={{ color: "red" }} />

            <label>Password:</label>
            <Field type="password" name="password" />
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
