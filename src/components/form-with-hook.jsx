import { useFormik } from "formik";

export const FormWithHook = () => {
  const formik = useFormik({
    initialValues: { lastName: "" },
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  console.log(
    "🚀 ~ file: form-with-hook.jsx:11 ~ CheckoutForm ~ formik==>>",
    formik,
  );

  return (
    <form onSubmit={formik.handleSubmit}>
      <label>
        Last Name:
        <input
          name="lastName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};
