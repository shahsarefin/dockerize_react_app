import React from "react";
import styled, { css } from "styled-components";
import { TextProps } from "./Text.types";

const sizeStyles = css<{ size?: string }>`
  ${({ size }) => {
    switch (size) {
      case "title":
        return css`
          font-size: 24px;
        `;
      case "description":
        return css`
          font-size: 16px;
        `;
      case "footer":
        return css`
          font-size: 12px;
        `;
      default:
        return css`
          font-size: 16px;
        `;
    }
  }}
`;

const StyledText = styled.span<{
  disabled: boolean;
  backgroundColor: string;
  size?: string;
}>`
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => (props.disabled ? "gray" : "black")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  ${sizeStyles}

  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (min-width: 769px) {
    ${({ size }) =>
      !size &&
      css`
        font-size: 16px;
      `}
  }
`;

const Text: React.FC<TextProps> = ({
  text,
  disabled = false,
  backgroundColor = "transparent",
  size,
}) => {
  return (
    <StyledText
      disabled={disabled}
      backgroundColor={backgroundColor}
      size={size}
    >
      {text}
    </StyledText>
  );
};

export default Text;
