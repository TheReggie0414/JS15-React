import { Form, Field, useFormikContext } from "formik";

export const CheckoutForm = () => {
  const { values } = useFormikContext();
  console.log("🚀 ~ file: form.jsx:5 ~ CheckoutForm ~ values==>>", values);
  return (
    <Form>
      <label>
        First Name:
        <Field name="firstName" />
      </label>
      <button type="submit">Submit</button>
    </Form>
  );
};
