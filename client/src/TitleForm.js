import React, { useState } from "react";
import { useInput } from "./hooks/useInput";

const TitleForm = () => {
  const [title, setTitle, handleTitle] = useInput("");


  const resetValues = e => {
    e.preventDefault();
    setTitle("");
  };

  return (
    <form onSubmit={resetValues}>
      <input
        className="title"
        id="title"
        name="title"
        onChange={e => handleTitle(e.target.value)}
        placeholder="Give Some Feedback!"
        type="text"
        value={title}
      />
      <button type="submit">Submit</button>
      <p>{title}</p>
    </form>
  );
};

export default TitleForm;