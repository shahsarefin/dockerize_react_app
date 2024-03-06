import React from "react";
import styled from "styled-components";

const StyledCell = styled.td<{ disabled?: boolean }>`
  padding: 20px;
  background-color: ${({ disabled }) => (disabled ? "#f1f1f1" : "#fff")};
  color: ${({ disabled }) => (disabled ? "#666" : "#000")};
  font-weight: bold;
  border: 3px solid black;
  width: 50%;
  margin-right: 15px;
`;

const TableCell: React.FC<{ cell: any; disabled?: boolean }> = ({
  cell,
  disabled,
}) => {
  return <StyledCell disabled={disabled}>{cell}</StyledCell>;
};

export default TableCell;
