import React from "react";
import TextInput from "../../components/base-ui/TextInput";
import { useFormState } from "../../hooks/useFormState";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { login, selectUser } from "../../components/auth/authSlice";

export default function Login() {
  const [state, handleChange] = useFormState({
    email: "",
    password: "",
  });
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  const handleSubmit = (e: any) => {
    console.log(state);
    if (state.email === user?.email && state.password === user?.password) {
      console.log("success");
      dispatch(login());
    }
  };

  return (
    <main className="h-screen w-full max-w-screen bg-slate-100 grow p-4 flex flex-col items-center">
      <form className="mx-auto">
        <h1 >Please sign in</h1>

        <TextInput
          name='email'
          label='Email address'
          value={state.email}
          placeholder="name@example.com"
          handleChange={handleChange}
        />

        <TextInput
          name='password'
          label='Password'
          value={state.password}
          placeholder="Password"
          handleChange={handleChange}
        />

        <div >
          <label>
            <input type='checkbox' value='remember-me' /> Remember me
          </label>
        </div>

        <button type="button" onClick={handleSubmit}>
          Sign in
        </button>

        <p >© 2022 deandraper.dev</p>
      </form>
    </main>
  );
}
