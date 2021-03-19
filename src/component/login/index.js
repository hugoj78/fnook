import React, { useState } from "react";
import DisplayForm from "./displayForm";

const Login = () => {
  const [formState, setFormState] = useState();
  return (
    <>
      <DisplayForm formState={formState} setFormState={setFormState} />
    </>
  );
};

export default Login;
