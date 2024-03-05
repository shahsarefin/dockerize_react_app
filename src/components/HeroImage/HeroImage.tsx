import React from "react";
import styled from "styled-components";
import { HeroImageProps } from "./HeroImage.types";

const StyledHeroImage = styled.div<HeroImageProps>`
  width: 100%;
  height: auto;
  background-color: ${(props) => props.backgroundColor || "transparent"};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "auto")};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  position: relative;

  // Example of responsive design enhancements
  @media (max-width: 768px) {
    height: 200px;
  }

  @media (min-width: 769px) {
    height: 400px;
  }
`;

/**
 * HeroImage Component - Renders a hero image with support for a disabled state
 * and customizable background color. Designed to be responsive and adaptable to various screen sizes.
 */
const HeroImage: React.FC<HeroImageProps> = ({
  src,
  alt,
  disabled = false,
  backgroundColor,
}) => {
  return (
    <StyledHeroImage
      src={src}
      alt={alt}
      disabled={disabled}
      backgroundColor={backgroundColor}
    />
  );
};

export default HeroImage;
