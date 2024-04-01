import React from "react";
import styled, { css } from "styled-components";
import TableCell from "../TableCell/TableCell";

const StyledRow = styled.tr<{ disabled?: boolean }>`
  ${({ disabled }) =>
    disabled
      ? css`
          background-color: #f1f1f1; 
          color: #666; 
        `
      : css`
          background-color: #fff; 
          color: #000; 
        `}

  font-weight: bold; 
  table-layout: fixed; 
  width: 100%; 
  border-collapse: collapse; 
  border: 3px solid purple; 
`;

const TableRow: React.FC<{ row: any; disabled?: boolean }> = ({
  row,
  disabled,
}) => {
  return (
    <StyledRow disabled={disabled}>
      {Object.values(row).map((cell, index) => (
        <TableCell key={index} cell={cell} disabled={disabled} />
      ))}
    </StyledRow>
  );
};

export default TableRow;
