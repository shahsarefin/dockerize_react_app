// Img.tsx
import React from "react";
import styled from "styled-components";
import { ImgProps } from "./Img.types";

const ImgWrapper = styled.div<{ disabled?: boolean; backgroundColor?: string }>`
  width: 33.33%;
  background-color: ${(props) => props.backgroundColor || "transparent"};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    height: auto;
    opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  }
`;

const Img: React.FC<ImgProps> = ({
  src,
  alt,
  disabled = false,
  backgroundColor,
}) => {
  return (
    <ImgWrapper disabled={disabled} backgroundColor={backgroundColor} data-testid="img-wrapper">
      <img src={src} alt={alt} style={{ opacity: disabled ? 0.5 : 1 }} />
    </ImgWrapper>
  );
};

export default Img;
