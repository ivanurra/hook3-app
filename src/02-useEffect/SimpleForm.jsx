export const SimpleForm = () => {
  return (
    <>
      <h1>Simple Form</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
      />
      <input
        type="email"
        className="form-control mt-3"
        placeholder="Email"
        name="email"
      />
    </>
  );
};
