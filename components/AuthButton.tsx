import React from "react";

const AuthButton = ({ text, onClick }: any) => {
  return (
    <button className="auth_button" onClick={onClick}>
      {text}
    </button>
  );
};

export default AuthButton;
