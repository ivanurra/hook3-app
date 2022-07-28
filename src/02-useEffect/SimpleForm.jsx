import { useEffect, useState } from "react";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "john",
    email: "john.doe@gmail.com",
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {
    console.log("useEffect here!");
  }, []);

  useEffect(() => {
    console.log("formState updated!");
  }, [formState]);

  useEffect(() => {
    console.log("email changed!");
  }, [email]);

  return (
    <>
      <h1>Form</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        className="form-control mt-3"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onInputChange}
      />
    </>
  );
};
