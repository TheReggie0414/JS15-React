import { useState, useRef } from "react";
import { eng } from "./translations/eng";
import { ukr } from "./translations/ukr";

const REGEX = {
  // eslint-disable-next-line no-useless-escape
  email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
};

export const App = () => {
  const [lang, setLang] = useState(eng);
  const [controlledInput, setControlledInput] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState({});
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  return (
    <main>
      {/* lang change */}
      <button
        onClick={() => {
          setLang(ukr);
        }}
      >
        UA
      </button>
      <button
        onClick={() => {
          setLang(eng);
        }}
      >
        ENG
      </button>
      {/* sign up */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const emailValue = emailRef.current.value;
          const passwordValue = passwordRef.current.value;
          if (REGEX.email.test(emailValue)) {
            setError((preState) => ({ ...preState, email: "" }));
          } else {
            setError((preState) => ({
              ...preState,
              email: lang.signUpForm.emailError,
            }));
          }

          if (passwordValue.length >= 8) {
            setError((preState) => ({ ...preState, password: "" }));
          } else {
            setError((preState) => ({
              ...preState,
              password: lang.signUpForm.passwordError,
            }));
          }

          // sendData({ email: emailValue, password: passwordValue });
        }}
      >
        <input ref={emailRef} name="email" />
        {error.email && <p>{error.email}</p>}
        <input ref={passwordRef} name="password" />
        {error.password && <p>{error.password}</p>}
        <button type="submit">{lang.signUpForm.submit}</button>
      </form>
      <br />
      {/* min age 18 */}
      <input
        type="number"
        onChange={(e) => {
          const num = +e.target.value;
          setDisabled(num < 18);
        }}
      />
      <button
        disabled={disabled}
        onClick={() => {
          console.log("Clicked");
        }}
      >
        {lang.enter}
      </button>
      <br />
      {/* max input 15 */}
      <input
        value={controlledInput}
        onChange={(e) => {
          if (e.target.value.length <= 15) {
            setControlledInput(e.target.value);
          }
        }}
      />
      <br />
      {/* count value */}
      <input
        onChange={(e) => {
          console.log("onChange", e.target.value.length);
        }}
        onBlur={(e) => {
          console.log("onBlur", e.target.value.length);
        }}
      />
      <br />
      {/* double click */}
      <button
        onClick={(e) => {
          if (e.detail === 4) {
            console.log("quadruple click");
          }
        }}
        onDoubleClick={() => {
          console.log("double click");
        }}
      >
        {lang.doubleClick}
      </button>
    </main>
  );
};

export default App;
