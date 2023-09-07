import React from "react";

function Input({ type, name, value, setter }) {
  return (
    <label>
      {name}
      <input
        className="form-control my-2"
        type={type}
        name={name}
        value={value}
        onChange={(e) => setter(e.target.value)}
      />
    </label>
  );
}

export default Input;
