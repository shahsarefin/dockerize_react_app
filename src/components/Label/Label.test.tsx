import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Label from './Label';

describe('Label Component', () => {
  const defaultProps = {
    text: "Sample Label Text",
    visible: true,
    disabled: false,
    backgroundColor: "transparent",
  };

  it('renders correctly when visible', () => {
    render(<Label {...defaultProps} />);
    expect(screen.getByText(defaultProps.text)).toBeInTheDocument();
  });

  it('does not render when not visible', () => {
    const props = { ...defaultProps, visible: false };
    render(<Label {...props} />);
    expect(screen.queryByText(defaultProps.text)).not.toBeInTheDocument();
  });

  it('applies disabled styling correctly', () => {
    const props = { ...defaultProps, disabled: true };
    render(<Label {...props} />);
    const label = screen.getByText(defaultProps.text);
    expect(label).toHaveStyle('color: grey');
    expect(label).toHaveStyle('cursor: not-allowed');
  });

  it('changes background color according to prop', () => {
    const backgroundColor = "#cccccc";
    const props = { ...defaultProps, backgroundColor };
    render(<Label {...props} />);
    const label = screen.getByText(defaultProps.text);
    expect(label).toHaveStyle(`background-color: ${backgroundColor}`);
  });

  it('displays the text provided via props', () => {
    render(<Label {...defaultProps} />);
    expect(screen.getByText(defaultProps.text)).toHaveTextContent(defaultProps.text);
  });
});
