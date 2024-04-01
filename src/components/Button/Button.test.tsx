import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';

describe('Button Component', () => {
  // Render test
  it('renders the button with the correct text', () => {
    render(<Button text="Click me" />);
    const buttonElement = screen.getByText("Click me");
    expect(buttonElement).toBeInTheDocument();
  });

  // Disabled state test
  it('is disabled when the disabled prop is true', () => {
    render(<Button text="Disabled Button" disabled={true} />);
    const buttonElement = screen.getByRole('button', { name: "Disabled Button" });
    expect(buttonElement).toBeDisabled();
  });

  // Background color test
  it('has the correct background color when specified', () => {
    const backgroundColor = '#123456';
    render(<Button text="Colored Button" backgroundColor={backgroundColor} />);
    const buttonElement = screen.getByText("Colored Button");
    
    expect(buttonElement).toHaveStyle(`background-color: ${backgroundColor}`);
  });
});
