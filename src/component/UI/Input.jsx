import React from "react";

export const Input = ({ onChange, placeholder, type, id, label }) => {
  return (
    <div>
      <label htmlFor={id}> {label} </label>
      <input
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        id={id}
      />
    </div>
  );
};
