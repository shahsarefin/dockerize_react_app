import React from "react";
import styled from "styled-components";
import { CardProps } from "./Card.types";

const StyledCard = styled.div<{ disabled?: boolean; backgroundColor?: string }>`
  width: 300px;
  border-radius: 8px;
  background-color: ${(props) => props.backgroundColor || "#fff"};
  color: #000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  overflow: hidden;
  display: flex;
  flex-direction: column;

  .card-image-container {
    height: 200px;
    background-color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card-image-placeholder {
    font-size: 1em;
    color: white;
    text-align: center;
  }

  .card-body {
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
  }

  .card-title {
    font-size: 1.2em;
    margin: 10px 0;
  }

  .tech-stack {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    margin: 10px 0;
  }

  .tech-stack-item {
    background-color: #e4e4e4;
    padding: 5px 15px;
    border-radius: 12px;
    font-size: 0.85em;
  }
`;

const Card: React.FC<CardProps> = ({
  imageSrc,
  title,
  techStack,
  disabled = false,
  backgroundColor,
}) => {
  return (
    <StyledCard data-testid="card" disabled={disabled} style={{ backgroundColor }}>
      <div className="card-image-container">
        {imageSrc ? (
          <img className="card-image" src={imageSrc} alt={title} />
        ) : (
          <div className="card-image-placeholder">Project Image</div>
        )}
      </div>
      <div className="card-body">
        <div className="card-title">{title}</div>
        <div className="tech-stack">
          {techStack?.map((tech, index) => (
            <div key={index} className="tech-stack-item">
              {tech}
            </div>
          ))}
        </div>
      </div>
    </StyledCard>
  );
};

export default Card;
