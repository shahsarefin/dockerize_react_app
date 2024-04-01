import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TableRow from './TableRow';

describe('TableRow Component', () => {
  it('renders row data', () => {
    const rowData = { name: "John Doe", age: 30 };
    render(<TableRow row={rowData} />);
    Object.values(rowData).forEach(value => {
      expect(screen.getByText(value.toString())).toBeInTheDocument();
    });
  });
});
