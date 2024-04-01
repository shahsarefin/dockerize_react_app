import React from "react";
import styled from "styled-components";
import { ButtonProps } from "./Button.types";

const StyledButton = styled.button<{ backgroundColor?: string; disabled?: boolean }>`
  background-color: ${({ backgroundColor, disabled }) => disabled ? "grey" : backgroundColor || "black"};
  color: ${({ disabled }) => (disabled ? "black" : "white")};
  padding: 10px 20px;
  border: none;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ backgroundColor, disabled }) =>
      !disabled && (backgroundColor ? `darken(${backgroundColor}, 20%)` : "darkblue")};
  }

  // Responsive adjustments
  @media (max-width: 768px) {
    padding: 8px 16px;
  }
`;

// The Button component uses the StyledButton component, passing only the props it needs
export const Button: React.FC<ButtonProps> = ({ text, disabled, backgroundColor }) => {
  return (
    <StyledButton disabled={disabled} style={{ backgroundColor }}>
      {text}
    </StyledButton>
  );
};

export default Button;
