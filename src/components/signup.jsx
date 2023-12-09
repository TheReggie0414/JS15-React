import { Formik, Form, Field, useFormik, ErrorMessage } from "formik";
import * as Yup from "yup";

const signUpSchema = Yup.object({
  email: Yup.string().email("Enter correct email").required("Required"),
  password: Yup.string().required("Required"),
});

export const SignUp = () => {
  return (
    <Formik
      initialValues={{ email: "taras@gmail.com", password: "" }}
      validationSchema={signUpSchema}
      onSubmit={(values, formikBag) => {
        formikBag.resetForm();

        console.log("🚀 SignUp ~ values==>>", values);
      }}
    >
      {({ touched, errors }) => {
        console.log("🚀 ~ file: signup.jsx:21 ~ SignUp ~ error==>>", errors);
        return (
          <Form>
            <label htmlFor="email">Email:</label>
            <br />
            <Field
              name="email"
              type="email"
              id="email"
              style={{
                border: "2px solid",
                borderColor: touched.email ? "violet" : "black",
                borderRadius: "4px",
              }}
            />
            <ErrorMessage name="email" />
            <br />
            <label htmlFor="password">Password:</label>
            <br />
            <Field
              name="password"
              type="password"
              id="password"
              style={{
                border: "2px solid",
                borderColor: touched.password ? "violet" : "black",
                borderRadius: "4px",
              }}
            />
            <ErrorMessage name="password" />
            <br />
            <button type="submit">Submit</button>
          </Form>
        );
      }}
    </Formik>
  );
};

export const SignUpHook = () => {
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    onSubmit: (values, { resetForm }) => {
      resetForm();

      console.log("🚀 SignUp ~ values==>>", values);
    },
  });
  console.log("🚀 ~ file: signup.jsx:59 ~ SignUpHook ~ formik==>>", formik);

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email-hook">Email:</label>
      <br />
      <input
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        id="email-hook"
        style={{
          border: "2px solid",
          borderColor: formik.touched.email ? "violet" : "black",
          borderRadius: "4px",
        }}
      />
      <br />
      <label htmlFor="password-hook">Password:</label>
      <br />
      <input
        name="password"
        type="password"
        onChange={formik.handleChange}
        onBlur={(e) => {
          const value = e.target.value;
          if (value.length < 8) {
            formik.setFieldError("password", "Password is too short");
          }

          formik.handleBlur(e);
        }}
        value={formik.values.password}
        id="password-hook"
        style={{
          border: "2px solid",
          borderColor: formik.touched.password ? "violet" : "black",
          borderRadius: "4px",
        }}
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};
