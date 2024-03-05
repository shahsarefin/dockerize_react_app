import React from "react";
import styled from "styled-components";
import { ImgProps } from "./Img.types";

const ImgWrapper = styled.div<{ disabled?: boolean; backgroundColor?: string }>`
  width: 33.33%; // One-third of the parent container's width
  background-color: ${(props) => props.backgroundColor || "transparent"};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  display: flex;
  justify-content: center; // Centers the img within the wrapper

  img {
    width: 100%; // Make the img fill the wrapper
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
    <ImgWrapper disabled={disabled} backgroundColor={backgroundColor}>
      <img src={src} alt={alt} style={{ opacity: disabled ? 0.5 : 1 }} />
    </ImgWrapper>
  );
};

export default Img;
