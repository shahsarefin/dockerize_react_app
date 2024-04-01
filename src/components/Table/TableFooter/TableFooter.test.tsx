import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TableFooter from './TableFooter';

describe('TableFooter Component', () => {
  it('renders footer content', () => {
    const footerContent = "Table Footer";
    render(<TableFooter footer={footerContent} />);
    expect(screen.getByText(footerContent)).toBeInTheDocument();
  });
});
