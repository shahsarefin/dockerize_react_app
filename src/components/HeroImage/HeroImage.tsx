// HeroImage.tsx
import React from "react";
import styled from "styled-components";
import { HeroImageProps } from "./HeroImage.types";

const HeroSection = styled.section`
  display: flex;
  width: 100%;
  position: relative;
`;

const StyledHeroImage = styled.div<HeroImageProps>`
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

const DisabledOverlay = styled.div`
  display: ${(props) => (props.disabled ? "block" : "none")};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2); // Dark overlay for disabled state
  z-index: 2; // Ensure it's above the content
`;

const SocialLink = styled.a`
  margin-right: 10px;

  color: #000;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const HeroImage: React.FC<HeroImageProps & { introduction?: string }> = ({
  src,
  alt,
  disabled = false,
  backgroundColor,
  introduction,
}) => {
  return (
    <HeroSection
      style={{ backgroundColor: backgroundColor, opacity: disabled ? 0.5 : 1 }}
    >
      {disabled && <DisabledOverlay disabled={disabled} />}
      <StyledHeroImage src={src} alt={alt} />
      <ContentSection>
        <IntroductionText>{introduction}</IntroductionText>
        <SocialLinks>
          <SocialLink href="https://github.com/yourusername" target="_blank">
            GitHub
          </SocialLink>
          <SocialLink
            href="https://linkedin.com/in/yourusername"
            target="_blank"
          >
            LinkedIn
          </SocialLink>
          <SocialLink href="https://twitter.com/yourusername" target="_blank">
            Twitter
          </SocialLink>
        </SocialLinks>
      </ContentSection>
    </HeroSection>
  );
};

export default HeroImage;
