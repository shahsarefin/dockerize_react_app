import React from "react";
import styled from "styled-components";
import { TableProps } from "./Table.types";
import TableFooter from "./TableFooter";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

const StyledTable = styled.table<{
  disabled?: boolean;
  backgroundColor?: string;
}>`
  width: 100%;
  border-collapse: collapse; /* Ensure table borders collapse */
  background-color: ${({ backgroundColor }) =>
    backgroundColor || "transparent"};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "default")};
`;

const Table: React.FC<TableProps> = ({
  data,
  headers,
  footer,
  disabled,
  backgroundColor,
}) => {
  return (
    <StyledTable disabled={disabled} backgroundColor={backgroundColor}>
      <TableHeader headers={headers} />
      <tbody>
        {data.map((row, index) => (
          <TableRow key={index} row={row} />
        ))}
      </tbody>
      {footer && <TableFooter footer={footer} />}
    </StyledTable>
  );
};

export default Table;
