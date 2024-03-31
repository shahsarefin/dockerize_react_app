import React, { useState } from "react";
import styled from "styled-components";
import { DropdownProps } from "./Dropdown.types";

const DropdownIcon = styled.span`
  margin-left: 5px;
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
  color: white;
  padding: 10px;
  border: none;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const DropdownContent = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
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

  const handleOptionClick = (optionLabel: string, optionValue: string) => {
    alert(`You selected "${optionLabel}"`);
    setIsOpen(false);
  };

  return (
    <DropdownContainer disabled={disabled}>
      <DropdownButton
        disabled={disabled}
        backgroundColor={backgroundColor}
        onClick={() => setIsOpen(!isOpen)}
      >
        {defaultText}
        <DropdownIcon />
      </DropdownButton>
      <DropdownContent isOpen={isOpen}>
        {options.map((option, index) => (
          <Option
            key={index}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleOptionClick(option.label, option.value);
            }}
          >
            {option.label}
          </Option>
        ))}
      </DropdownContent>
    </DropdownContainer>
  );
};

export default Dropdown;
