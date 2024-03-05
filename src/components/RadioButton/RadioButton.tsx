import React from "react";
import styled from "styled-components";
import { RadioButtonProps } from "./RadioButton.types";

const Container = styled.label<{
  disabled?: boolean;
  backgroundColor?: string;
}>`
  display: inline-block;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  padding: 5px;
  border-radius: 5px;
  background-color: ${(props) =>
    props.disabled ? "#f0f0f0" : props.backgroundColor};
  margin-right: 10px;

  &:hover {
    background-color: ${(props) => !props.disabled && "#e7e7e7"};
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    padding: 3px;
  }
`;

const Input = styled.input`
  margin-right: 5px;
`;

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  name,
  value,
  checked,
  disabled,
  onChange,
  backgroundColor = "#ffffff",
}) => {
  return (
    <Container
      disabled={disabled}
      backgroundColor={checked ? backgroundColor : "transparent"}
    >
      <Input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
      />
      {label}
    </Container>
  );
};

export default RadioButton;
