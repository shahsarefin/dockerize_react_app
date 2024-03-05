import React from "react";
import styled from "styled-components";
import { LabelProps } from "./Label.types";

// Styled component for the label. It uses props to dynamically style the label
const StyledLabel = styled.span<
  Pick<LabelProps, "disabled" | "backgroundColor">
>`
  display: inline-block;
  padding: 8px 16px;
  background-color: ${({ backgroundColor }) =>
    backgroundColor || "transparent"};
  color: ${({ disabled }) => (disabled ? "grey" : "black")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  user-select: none;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Label: React.FC<LabelProps> = ({
  text,
  disabled = false,
  backgroundColor,
  visible = true,
}) => {
  if (!visible) return null;

  return (
    <StyledLabel disabled={disabled} backgroundColor={backgroundColor}>
      {text}
    </StyledLabel>
  );
};

export default Label;
