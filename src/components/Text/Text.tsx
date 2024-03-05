import React from "react";
import styled from "styled-components";
import { TextProps } from "./Text.types";

const StyledText = styled.span<{ disabled: boolean; backgroundColor: string }>`
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => (props.disabled ? "gray" : "black")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};

  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (min-width: 769px) {
    font-size: 16px;
  }
`;

const Text: React.FC<TextProps> = ({
  text,
  disabled = false,
  backgroundColor = "transparent",
}) => {
  return (
    <StyledText disabled={disabled} backgroundColor={backgroundColor}>
      {text}
    </StyledText>
  );
};

export default Text;
