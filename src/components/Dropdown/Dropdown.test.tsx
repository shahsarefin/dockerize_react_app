import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Dropdown from './Dropdown';

describe('Dropdown Component', () => {
  it('renders with default text', () => {
    render(<Dropdown options={[{ label: "Option 1", value: "1" }]} defaultText="Select Option" />);
    expect(screen.getByText("Select Option")).toBeInTheDocument();
  });

  it('opens and shows options when clicked', () => {
    render(<Dropdown options={[{ label: "Option 1", value: "1" }, { label: "Option 2", value: "2" }]} defaultText="Select Option" />);
    fireEvent.click(screen.getByText("Select Option"));
    expect(screen.getByText("Option 1")).toBeVisible();
    expect(screen.getByText("Option 2")).toBeVisible();
  });

  it('does not open when disabled', () => {
    render(<Dropdown options={[{ label: "Option 1", value: "1" }]} defaultText="Select Option" disabled={true} />);
    fireEvent.click(screen.getByText("Select Option"));
    // Since the dropdown shouldn't open, we check if "Option 1" is not visible.
    expect(screen.queryByText("Option 1")).not.toBeVisible();
  });

  it('calls alert when an option is clicked', () => {
    window.alert = jest.fn();
    render(<Dropdown options={[{ label: "Option 1", value: "1" }]} defaultText="Select Option" />);
    fireEvent.click(screen.getByText("Select Option"));
    fireEvent.click(screen.getByText("Option 1"));
    expect(window.alert).toHaveBeenCalledWith('You selected "Option 1"');
  });
});
