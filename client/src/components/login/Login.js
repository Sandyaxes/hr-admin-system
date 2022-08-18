import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useHistory } from "react-router-dom";
import "./login.css";
// import { response } from 'express';

const validate = (values) => {
  const errors = {};

  if (!values.username) {
    errors.username = "Email Address is Required";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.username)
  ) {
    errors.username = "Invalid Email Address";
  }

  if (!values.password) {
    errors.password = "Password is Required";
  }
  // else if (!/^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$/.test(values.password)) {
  //     errors.password = 'Password Must Contain 8 Characters, One Uppercase, One Lowercase and one special case Character'
  // }

  return errors;
};

const apiFetch = async (pageDirect, inputData) => {
  const rawResponse = await fetch("/api/auth/login", {
    method: "POST",
    body: JSON.stringify(inputData),
    headers: { "Content-Type": "application/json" },
  });

  const data = await rawResponse.json();
  console.log(data);

  if (rawResponse.status === 400 || rawResponse.status === 401) {
    console.log(`${data.message}. ${data.error ? data.error : ""}`);
  } else {
    console.log(data.role);
    data.role === "admin"
      ? pageDirect.push("/Admin")
      : data.role === "basic"
      ? pageDirect.push("/Employee")
      : pageDirect.push("/Manager");
  }
};

export const Login = () => {
  const history = useHistory();

  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
      }}
      validate={validate}
      onSubmit={(values, { setSubmitting }) => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
        try {
          apiFetch(history, values);
        } catch (err) {
          console.log(err.message);
        }
      }}
    >
      {(formik) => (
        <Form id="signin-form" onSubmit={formik.handleSubmit}>
          <h1>Login</h1>
          <Field
            id="username"
            name="username"
            type="email"
            placeholder="username"
          />
          <ErrorMessage className="jj" name="username" />
          <Field
            id="password"
            name="password"
            type="password"
            placeholder="Password"
          />
          <ErrorMessage name="password" />

          <button className="signin-btn" type="submit">
            Login
          </button>
        </Form>
      )}
    </Formik>
  );
};
