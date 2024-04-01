import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from './Card';
import 'jest-styled-components';


describe('Card Component', () => {
  // Render Test
  it('renders correctly with given props', () => {
    render(<Card 
      imageSrc="/path/to/image.jpg" 
      title="Project Title" 
      techStack={["JavaScript", "React", "Next.js"]} 
      disabled={false} 
      backgroundColor="#ffffff" 
    />);
    expect(screen.getByText("Project Title")).toBeInTheDocument();
    expect(screen.getByAltText("Project Title")).toHaveAttribute('src', '/path/to/image.jpg');
    expect(screen.getByText("JavaScript")).toBeInTheDocument();
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("Next.js")).toBeInTheDocument();
  });

// Disabled State Test
it('has reduced opacity and not-allowed cursor when disabled', () => {
    const { getByTestId } = render(<Card disabled={true} />);
    const card = getByTestId("card");
    expect(card).toHaveStyle('opacity: 0.5');
    expect(card).toHaveStyle('cursor: not-allowed');
  });
  
  // Background Color Test
  it('applies given background color', () => {
    const backgroundColor = "#abcabc";
    const { getByTestId } = render(
      <Card 
        imageSrc="/path/to/image.jpg" 
        title="Colored Card" 
        techStack={["Vue.js"]} 
        backgroundColor={backgroundColor} 
      />
    );
    const card = getByTestId("card");
    expect(card).toHaveStyle(`background-color: ${backgroundColor}`);
  });

  // Image Source Test
  it('displays the correct image', () => {
    const testImageSrc = "/path/to/test/image.jpg";
    render(<Card 
      imageSrc={testImageSrc} 
      title="Image Test Card" 
      techStack={[]} 
    />);
    const image = screen.getByAltText("Image Test Card");
    expect(image).toHaveAttribute('src', testImageSrc);
  });

  // Tech Stack Items Test
  it('renders all tech stack items provided', () => {
    const techStack = ["GraphQL", "Apollo", "TypeScript"];
    render(<Card 
      imageSrc="/path/to/image.jpg" 
      title="Tech Stack Test Card" 
      techStack={techStack} 
    />);
    techStack.forEach(tech => {
      expect(screen.getByText(tech)).toBeInTheDocument();
    });
  });
});
