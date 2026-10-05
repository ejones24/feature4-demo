import React from "react";

function SignDetail({ letter, description }) {
  return (
    <div>
      <h2>Letter: {letter}</h2>
      <p>{description}</p>
    </div>
  );
}

export default SignDetail;
