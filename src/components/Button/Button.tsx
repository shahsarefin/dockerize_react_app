import React from "react";
import styled from "styled-components";
import { ButtonProps } from "./Button.types";

// StyledButton - A styled component for the button, utilizing props for dynamic styling.
const StyledButton = styled.button<
  Pick<ButtonProps, "disabled" | "backgroundColor">
>`
  background-color: ${({ disabled, backgroundColor }) =>
    disabled ? "grey" : backgroundColor || "black"};
  color: ${({ disabled }) => (disabled ? "black" : "white")};
  padding: 10px 20px;
  border: none;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: background-color 0.3s ease;

  // media queries for responsive design adjustments based on screen width.
  @media (max-width: 768px) {
    padding: 8px 16px;
  }

  &:hover {
    background-color: ${({ disabled, backgroundColor }) =>
      !disabled &&
      (backgroundColor ? `darken(${backgroundColor}, 20%)` : "darkblue")};
  }
`;

const Button: React.FC<ButtonProps> = ({
  text,
  disabled = false,
  backgroundColor,
}) => {
  return (
    <StyledButton disabled={disabled} backgroundColor={backgroundColor}>
      {text}
    </StyledButton>
  );
};

export default Button;
