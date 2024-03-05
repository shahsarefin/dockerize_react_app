export interface DropdownOption {
  label: string;
  value: string;
}

export interface DropdownProps {
  options: DropdownOption[];
  defaultText: string;
  backgroundColor?: string;
  disabled?: boolean;
}
