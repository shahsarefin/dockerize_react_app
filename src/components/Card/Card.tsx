import React from "react";
import styled from "styled-components";
import { CardProps } from "./Card.types";

const StyledCard = styled.div<{ disabled?: boolean; backgroundColor?: string }>`
  width: 30%;
  padding: 20px;
  margin: 10px auto;
  border-radius: 8px;
  background-color: ${(props) => props.backgroundColor || "#fff"};
  color: #000;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  display: block;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Card: React.FC<CardProps> = ({
  text,
  disabled = false,
  backgroundColor,
}) => {
  // Click handler that only triggers when the card is not disabled
  const handleClick = () => {
    if (!disabled) {
      // Display an alert with the card's text as an example of click handling logic
      alert(`Card clicked: ${text}`);
    }
  };

  return (
    <StyledCard
      disabled={disabled}
      backgroundColor={backgroundColor}
      onClick={handleClick}
    >
      {text}
    </StyledCard>
  );
};

export default Card;
