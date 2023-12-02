import { Formik } from "formik";
import { Button } from "./components/button";
import { Counter } from "./components/counter";
import { Input } from "./components/input";
import { InputWrapper } from "./components/input-wrapper";
import { CheckoutForm } from "./components/form";
import { FormWithHook } from "./components/form-with-hook";
import { SignUp, SignUpHook } from "./components/signup";

export const App = () => {
  return (
    <main>
      <Counter>
        {(count, onClick) => {
          return <Button text={count} onClick={onClick} />;
        }}
      </Counter>
      <InputWrapper>
        {(value, onChange) => <Input value={value} onChange={onChange} />}
      </InputWrapper>
      <p>Formik</p>
      <Formik
        enableReinitialize
        initialValues={{ firstName: "" }}
        onSubmit={(values, formikBag) => {
          console.log("values", values);
          console.log("formikBag", formikBag);
        }}
      >
        {(props) => {
          console.log("props", props);

          return <CheckoutForm />;
        }}
      </Formik>
      <FormWithHook />
      <br />
      <SignUp />
      <br />
      <SignUpHook />
    </main>
  );
};

export default App;
