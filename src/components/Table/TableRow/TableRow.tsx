import React from "react";
import styled, { css } from "styled-components";
import TableCell from "../TableCell/TableCell";

const StyledRow = styled.tr<{ disabled?: boolean }>`
  ${({ disabled }) =>
    disabled
      ? css`
          background-color: #f1f1f1; /* Gray background for disabled */
          color: #666; /* Dark text for disabled */
        `
      : css`
          background-color: #fff; /* White background for enabled */
          color: #000; /* Black text for enabled */
        `}

  font-weight: bold; /* Bold font weight */
  table-layout: fixed; /* Ensure fixed table layout */
  width: 100%; /* Set width to 100% */
  border-collapse: collapse; /* Collapse table borders */
  border: 3px solid purple; /* Border style */
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
