import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HeroImage from './HeroImage';

describe('HeroImage Component', () => {
  const defaultProps = {
    src: "https://via.placeholder.com/600x400",
    alt: "Hero Image",
    introduction: "Introduction Text",
    disabled: false,
    backgroundColor: "#ffffff",
  };

  it('renders the hero image and introduction text', () => {
    render(<HeroImage {...defaultProps} />);
    expect(screen.getByText(defaultProps.introduction)).toBeInTheDocument();
  });

  it('displays a dark overlay when disabled', () => {
    render(<HeroImage {...defaultProps} disabled={true} />);
    const overlay = screen.getByTestId('disabled-overlay');
    expect(overlay).toBeVisible();
  });
});
