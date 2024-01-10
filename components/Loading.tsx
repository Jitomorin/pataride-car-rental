import React from "react";
import styled from "styled-components";

const Loader = () => {
  return (
    <Wrapper>
      <div className="centered">
        <div className="blob-1"></div>
        <div className="blob-2"></div>
      </div>
    </Wrapper>
  );
};

export default Loader;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: black;
`;
