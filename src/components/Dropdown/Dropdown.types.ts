// Dropdown.types.ts
export interface DropdownProps {
  options: { label: string; value: string }[];
  defaultText: string;
  backgroundColor?: string;
  disabled?: boolean;
}
