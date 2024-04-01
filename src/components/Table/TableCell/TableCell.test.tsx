import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TableCell from './TableCell';

describe('TableCell Component', () => {
  it('renders cell content', () => {
    const cellContent = "John Doe";
    render(<TableCell cell={cellContent} />);
    expect(screen.getByText(cellContent)).toBeInTheDocument();
  });

  it('renders with disabled state', () => {
    const cellContent = "Disabled Cell";
    render(<TableCell cell={cellContent} disabled={true} />);
    
    expect(screen.getByText(cellContent)).toBeInTheDocument();
  });
});
