// Img.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Img from './Img'; // Ensure this path is correct

describe('Img Component', () => {
  const defaultProps = {
    src: "https://via.placeholder.com/150",
    alt: "Placeholder Image",
    disabled: false,
    backgroundColor: "transparent",
  };

  it('renders the image with provided src and alt', () => {
    render(<Img {...defaultProps} />);
    const image = screen.getByRole('img', { name: /placeholder image/i });
    expect(image).toHaveAttribute('src', defaultProps.src);
    expect(image).toHaveAttribute('alt', defaultProps.alt);
  });

  it('applies disabled styling when disabled is true', () => {
    render(<Img {...defaultProps} disabled={true} />);
    const wrapper = screen.getByTestId('img-wrapper');
    expect(wrapper).toHaveStyle('cursor: not-allowed');
    expect(wrapper.firstChild).toHaveStyle('opacity: 0.5');
  });

  it('applies the specified background color', () => {
    const backgroundColor = "lightgray";
    render(<Img {...defaultProps} backgroundColor={backgroundColor} />);
    const wrapper = screen.getByTestId('img-wrapper');
    expect(wrapper).toHaveStyle(`background-color: ${backgroundColor}`);
  });
});
