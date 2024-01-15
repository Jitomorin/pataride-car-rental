import React from "react";
import styled from "styled-components";

const Wrapper = styled.button`
  background-color: #f8d521;
  color: white;
  font-weight: 700;
  font-size: 20px;
  border-radius: 15px;
  padding: 20px;
  width: 100%;
  &:hover {
    scale: 1.02;
  }
`;

const AuthButton = ({ text, onClick }: any) => {
  return <Wrapper onClick={onClick}>{text}</Wrapper>;
};

export default AuthButton;
