
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TableHeader from './TableHeader';

describe('TableHeader Component', () => {
  it('renders header items', () => {
    const headers = ["Name", "Age"];
    render(<TableHeader headers={headers} />);
    headers.forEach(header => {
      expect(screen.getByText(header)).toBeInTheDocument();
    });
  });
});
