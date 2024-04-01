import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Text from './Text';

describe('Text Component', () => {
  it('renders Text correctly with default props', () => {
    const testMessage = 'Test Text';
    render(<Text text={testMessage} />);
    expect(screen.getByText(testMessage)).toBeInTheDocument();
  });

  it('applies the title size style', () => {
    render(<Text text="Title Text" size="title" />);
    expect(screen.getByText('Title Text')).toHaveStyle('font-size: 24px');
  });

  it('applies the description size style', () => {
    render(<Text text="Description Text" size="description" />);
    expect(screen.getByText('Description Text')).toHaveStyle('font-size: 16px');
  });

  it('applies the footer size style', () => {
    render(<Text text="Footer Text" size="footer" />);
    expect(screen.getByText('Footer Text')).toHaveStyle('font-size: 12px');
  });

  it('is disabled', () => {
    render(<Text text="Disabled Text" disabled />);
    expect(screen.getByText('Disabled Text')).toHaveStyle('color: gray');
    expect(screen.getByText('Disabled Text')).toHaveStyle('cursor: not-allowed');
    expect(screen.getByText('Disabled Text')).toHaveStyle('opacity: 0.5');
  });

  it('has a custom background color', () => {
    const backgroundColor = '#ff0000';
    render(<Text text="Colored Background" backgroundColor={backgroundColor} />);
    expect(screen.getByText('Colored Background')).toHaveStyle(`background-color: ${backgroundColor}`);
  });
});
