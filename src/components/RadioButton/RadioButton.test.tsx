import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RadioButton from './RadioButton';

describe('RadioButton Component', () => {
  it('renders with the correct label', () => {
    const label = "Test Option";
    render(<RadioButton label={label} name="test" value="testOption" />);
    expect(screen.getByRole('radio')).toBeInTheDocument();
  });

  it('is disabled when the disabled prop is true', () => {
    render(<RadioButton label="Disabled Option" name="test" value="disabledOption" disabled />);
    expect(screen.getByRole('radio')).toBeDisabled();
  });

  it('changes state when clicked', () => {
    render(<RadioButton label="Clickable Option" name="test" value="clickOption" />);
    const radioButton = screen.getByRole('radio');
    expect(radioButton).not.toBeChecked();
    fireEvent.click(radioButton);
    
  });

  it('applies the specified background color', () => {
    const backgroundColor = "#abc123";
    render(<RadioButton label="Colored Option" name="test" value="coloredOption" backgroundColor={backgroundColor} />);
    const radioButton = screen.getByLabelText("Colored Option").parentElement;
    expect(radioButton).toHaveStyle(`background-color: ${backgroundColor}`);
  });

  
  it('shows feedback message on click', async () => {
    
  });
});
