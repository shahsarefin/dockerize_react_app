import React, { useState } from "react";
import styled from "styled-components";

export interface RadioButtonProps {
  label: string;
  name: string;
  value: string;
  // Removed the checked prop to manage it internally for the demo
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  backgroundColor?: string;
}

const Container = styled.label<{
  disabled?: boolean;
  backgroundColor?: string;
}>`
  display: inline-flex;
  align-items: center;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  padding: 5px;
  border-radius: 5px;
  background-color: ${(props) =>
    props.disabled ? "#f0f0f0" : props.backgroundColor || "transparent"};
  margin-right: 10px;
`;

const Input = styled.input`
  margin-right: 5px;
`;

const FeedbackMessage = styled.div`
  display: none; /* Initially hidden */
  /* Styling for the feedback message */
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
  const [showFeedback, setShowFeedback] = useState(false);

  const handleClick = () => {
    if (!disabled) {
      setChecked(!checked); // Toggle checked state
      setShowFeedback(true);
      setTimeout(() => setShowFeedback(false), 2000); // Hide feedback after 2 seconds
    }
  };

  return (
    <Container
      disabled={disabled}
      backgroundColor={backgroundColor}
      onClick={handleClick} // Handle click to toggle checked state and show feedback
    >
      <Input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={onChange ? (e) => onChange(e) : undefined}
      />
      {label}
      {showFeedback && <FeedbackMessage>Selected!</FeedbackMessage>}
    </Container>
  );
};

export default RadioButton;
