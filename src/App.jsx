import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "./components/input";
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required("Required").min(3, "Name is too short"),
  student: yup.boolean().notRequired(),
  university: yup.string().when("student", {
    is: true,
    then: (schema) =>
      schema
        .required("Required")
        .test("uni-name", "Name should not contain numbers", (value) => {
          return !/\d+/.test(value);
        }),
    otherwise: (schema) => schema.notRequired(),
  }),
});

export const App = () => {
  const form = useForm({
    // mode: "onSubmit",
    // reValidateMode: "onBlur",
    // shouldFocusError: false,
    resolver: yupResolver(schema),
    defaultValues: {
      name: "Taras",
      student: false,
      university: "",
    },
  });
  console.log("formState===>>>", form.formState.errors);
  const onSubmit = (data) => {
    form.reset();
    console.log("🚀 ~ file: App.jsx:6 ~ onSubmit ~ data==>>", data);
  };

  // const nameWatch = form.watch("name");
  // const watch = form.watch();

  // const nameValue = form.getValues("name");
  // const values = form.getValues();
  // console.log("🚀 ~ file: App.jsx:25 ~ App ~ nameValue==>>", nameValue);
  // console.log("🚀 ~ file: App.jsx:18 ~ App ~ watch==>>", watch);
  // console.log("🚀 ~ file: App.jsx:17 ~ App ~ nameWatch==>>", nameWatch);

  return (
    <main>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <label>
          Name:
          <input
            {...form.register("name", {
              // required: true,
              // minLength: 3,
              onBlur: () => {
                console.log("blur");
              },
            })}
          />
        </label>
        {form.formState.errors.name && (
          <div>{form.formState.errors.name.message}</div>
        )}
        <br />
        <label>
          Student:
          <Controller
            control={form.control}
            name="student"
            render={(props) => {
              const { field } = props;
              // console.log("🚀 ~ file: App.jsx:51 ~ App ~ props==>>", props);
              return <input {...field} type="checkbox" />;
            }}
          />
          {/* <input {...form.register("student")} type="checkbox" /> */}
        </label>
        <br />
        <label>
          University:
          <Input {...form.register("university")} />
          {/* <input {...form.register("university")} /> */}
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default App;
