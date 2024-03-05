import React, { useState } from "react";
import styled from "styled-components";
import { DropdownProps } from "./Dropdown.types";

// Adding styles for the dropdown icon
const DropdownIcon = styled.span`
  margin-left: 5px;
  margin-bottom: 10px;
  display: inline-block;
  transform: translateY(5px);
  &:after {
    content: "⇓";
  }
`;

const DropdownContainer = styled.div<{ disabled: boolean }>`
  position: relative;
  display: inline-block;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

const DropdownButton = styled.button<{
  disabled: boolean;
  backgroundColor: string;
}>`
  background-color: ${(props) => props.backgroundColor};
  color: white; /* Set text color to white */
  padding: 10px;
  border: none;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    background-color: ${(props) =>
      !props.disabled && "#333"}; /* Darker shade on hover */
  }
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;

  ${DropdownContainer}:hover & {
    display: block;
  }
`;

const Option = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;

  &:hover {
    background-color: #ddd;
  }
`;

const Dropdown: React.FC<DropdownProps> = ({
  options,
  defaultText,
  backgroundColor = "black",
  disabled = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const toggleDropdown = () => !disabled && setIsOpen(!isOpen);

  const handleOptionClick = (label: string, event: React.MouseEvent) => {
    event.preventDefault(); // Prevent redirection or any default action
    setSelectedOption(label);
    alert(`You selected: ${label}`); // Show an alert instead of redirecting
    setIsOpen(false); // Close the dropdown after selection
  };

  return (
    <DropdownContainer disabled={disabled} onClick={toggleDropdown}>
      <DropdownButton disabled={disabled} backgroundColor={backgroundColor}>
        {selectedOption || defaultText}
        <DropdownIcon />
      </DropdownButton>
      {isOpen && (
        <DropdownContent>
          {options.map((option, index) => (
            <Option
              key={index}
              href={option.value}
              onClick={(e) => handleOptionClick(option.label, e)}
            >
              {option.label}
            </Option>
          ))}
        </DropdownContent>
      )}
    </DropdownContainer>
  );
};

export default Dropdown;
