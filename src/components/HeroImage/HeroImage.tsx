import React from "react";
import styled from "styled-components";
import { HeroImageProps } from "./HeroImage.types";

const HeroSection = styled.section<HeroImageProps>`
  display: flex;
  width: 100%;
  position: relative;
  background-color: ${({ backgroundColor }) => backgroundColor};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

const StyledHeroImage = styled.div<Pick<HeroImageProps, 'src'>>`
  margin-top: 20px;
  width: 50%;
  height: 400px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
`;

const ContentSection = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  height: 400px;
`;

const IntroductionText = styled.p`
  margin-bottom: 40px;
`;

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
`;

const SocialLink = styled.a`
  margin-right: 10px;
  color: #000;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const DisabledOverlay = styled.div<{ disabled: boolean }>`
  display: ${({ disabled }) => (disabled ? "block" : "none")};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 2;
`;

const HeroImage: React.FC<HeroImageProps> = ({
  src,
  alt,
  disabled = false,
  backgroundColor = "#ffffff",
  introduction,
}) => {
  return (
    <HeroSection backgroundColor={backgroundColor} style={{ opacity: disabled ? 0.5 : 1 }}>
      {disabled && <DisabledOverlay disabled={disabled} data-testid="disabled-overlay" />}
      <StyledHeroImage src={src} alt={alt} />
      <ContentSection>
        <IntroductionText>{introduction}</IntroductionText>
        <SocialLinks>
          <SocialLink href="https://github.com/yourusername" target="_blank">GitHub</SocialLink>
          <SocialLink href="https://linkedin.com/in/yourusername" target="_blank">LinkedIn</SocialLink>
          <SocialLink href="https://twitter.com/yourusername" target="_blank">Twitter</SocialLink>
        </SocialLinks>
      </ContentSection>
    </HeroSection>
  );
};

export default HeroImage;
