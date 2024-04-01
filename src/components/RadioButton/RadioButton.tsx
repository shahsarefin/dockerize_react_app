import React, { useState } from "react";
import styled from "styled-components";

export interface RadioButtonProps {
  label: string;
  name: string;
  value: string;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  backgroundColor?: string;
}

const Container = styled.label<{ disabled?: boolean; backgroundColor?: string }>`
  display: inline-flex;
  align-items: center;
  cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${props => (props.disabled ? 0.5 : 1)};
  padding: 5px;
  border-radius: 5px;
  background-color: ${props => props.disabled ? "#f0f0f0" : props.backgroundColor || "transparent"};
  margin-right: 10px;
`;

const Input = styled.input`
  margin-right: 5px;
`;

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  name,
  value,
  disabled,
  onChange,
  backgroundColor = "#ffffff",
}) => {
  const [checked, setChecked] = useState(false);

  // Mimic a controlled component with internal state
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(onChange) {
      onChange(event);
    }
    setChecked(event.target.checked);
  };

  return (
    <Container disabled={disabled} backgroundColor={backgroundColor}>
      <Input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={handleInputChange}
      />
      {label}
    </Container>
  );
};

export default RadioButton;
