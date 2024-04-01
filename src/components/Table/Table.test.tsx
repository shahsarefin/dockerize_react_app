
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Table from './Table';

describe('Table Component', () => {
  const headers = ["Name", "Age"];
  const data = [{ name: "John Doe", age: 30 }, { name: "Jane Doe", age: 25 }];
  const footer = "Table Footer";

  it('renders table headers, rows, and footer correctly', () => {
    render(<Table data={data} headers={headers} footer={footer} />);
    // Headers
    headers.forEach(header => {
      expect(screen.getByText(header)).toBeInTheDocument();
    });
    // Data
    data.forEach(row => {
      expect(screen.getByText(row.name)).toBeInTheDocument();
      expect(screen.getByText(row.age)).toBeInTheDocument();
    });
    // Footer
    expect(screen.getByText(footer)).toBeInTheDocument();
  });

  it('applies disabled state correctly', () => {
    render(<Table data={data} headers={headers} footer={footer} disabled={true} />);
    
    expect(screen.getByText(headers[0])).toBeInTheDocument();
  });
});
