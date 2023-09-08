import React from "react";

function Error({ errors }) {
  return (
    <div>
      {errors.map((error) => (
        <p className="text-danger" key={error}>
          {error}
        </p>
      ))}
    </div>
  );
}

export default Error;
