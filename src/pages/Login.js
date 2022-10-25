// import { Button, Container } from '@material-ui/core';
import * as React from "react";
import "../styles/global.css";
import { Link, navigate } from "gatsby";

const LoginPage = (props) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const onHandleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const onHandlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
    console.log("input submitted");

    //Post data...
    let response = await fetch("http://localhost:3000/Login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    let { msg, success } = await response.json();
    console.log({
      msg,
      success,
    });

    if (success) {
      // navigate to home page
      navigate('/')
     
    } else {
      window.alert(msg);
    }

    console.log(email, password);
  };

  return (
    <>
      <form
        onSubmit={onHandleSubmit}
        container
        maxWidth="xl"
        className="bg-blue-50 w-screen h-screen grid grid-cols-1  place-content-center space-y-6 md:space-y-10"
      >
        <p className="mx-auto text-black text-2xl md:text-3xl font-sans">
          LOGIN{" "}
        </p>
        <input
          className="py-4 px-8 w-1/2 md:w-1/4 mx-auto rounded-sm focus:outline-none "
          labelText="Email"
          // id="email"
          formControlProps={{
            fullWidth: true,
          }}
          type="text"
          name="email"
          // id ="email"
          value={email}
          onChange={onHandleEmailChange}
        />

        <input
          className="py-4 px-8 w-1/2 md:w-1/4 mx-auto rounded-sm focus:outline-none "
          labelText="Password"
          // id="password"
          formControlProps={{
            fullWidth: true,
          }}
          type="password"
          // id='password'
          name="password"
          value={password}
          onChange={onHandlePasswordChange}
        />

        <input
          type="submit"
          value="Login"
          class="
        py-2 px-8
        bg-blue-500
        hover:bg-primary-darker
        rounded
        text-white 
        w-24
        md:w-36
        mx-auto
        whitespace-nowrap
        "
        />
        <label className="mx-auto text-slate-600 ">
          <input
            type="checkbox"
            // checked={checked}
            // onChange={handleChange}
            className="mx-4"
          />
          Remember me
        </label>

        <p className="mx-auto text-slate-600 text-base">
          No Account? <Link to="/Signup">Create account</Link>
        </p>
      </form>
    </>
  );
};

export const Head = () => <title>Login Page</title>;

export default LoginPage;
