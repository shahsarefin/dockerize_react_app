import React, { useState } from "react";
import styled from "styled-components";
import { DropdownProps } from "./Dropdown.types";

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  background-color: ${({ backgroundColor }) => backgroundColor || 'black'};
  color: white;
  padding: 10px;
  border: none;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;


const DropdownContent = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
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

  return (
    <DropdownContainer>
      <DropdownButton
        disabled={disabled}
        backgroundColor={backgroundColor}
        onClick={() => !disabled && setIsOpen(!isOpen)}
      >
        {defaultText}
        <span>▼</span>
      </DropdownButton>
      <DropdownContent isOpen={isOpen}>
        {options.map((option, index) => (
          <Option
            key={index}
            onClick={(e) => {
              e.preventDefault();
              alert(`You selected "${option.label}"`);
              setIsOpen(false);
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
