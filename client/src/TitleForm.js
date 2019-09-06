import React from "react";
import { useInput } from "./hooks/useInput";

const TitleForm = () => {
  const [name, setName, handleName] = useInput("");
  const [email, setEmail, handleEmail] = useInput("");


  const resetValues = e => {
    e.preventDefault();
    setName("");
    setEmail("");
  };

  return (
    <form onSubmit={resetValues}>
      <input
        className="name"
        id="name"
        name="name"
        onChange={e => handleName(e.target.value)}
        placeholder="Name"
        type="text"
        value={name}
      />
      <input
        className="email"
        id="email"
        name="email"
        onChange={e => handleEmail(e.target.value)}
        placeholder="Email"
        type="text"
        value={email}
      />
      <button type="submit">Submit</button>
      <p>{name}</p>
      <p>{email}</p>
    </form>
  );
};

export default TitleForm;