import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./CurrentTime.scss";

const StyledDiv = styled.div`
  background-color: #aaa;
`;

export default function CurrentTime() {
  const [now, setNow] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setNow(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <StyledDiv>
      <h1>{now}</h1>
    </StyledDiv>
  );
}
