import React from "react";
import styled from "styled-components";
import { TableProps } from "./Table.types";
import TableFooter from "./TableFooter/TableFooter";
import TableHeader from "./TableHeader/TableHeader";
import TableRow from "./TableRow/TableRow";

const StyledTable = styled.table<{
  disabled?: boolean;
  backgroundColor?: string;
}>`
  width: 25%;
  border-collapse: collapse;
  background-color: ${({ backgroundColor }) =>
    backgroundColor || "transparent"};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "default")};
  border: 3px solid black;
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
      <TableHeader headers={headers} disabled={disabled} />
      <tbody>
        {data.map((row, index) => (
          <TableRow key={index} row={row} disabled={disabled} />
        ))}
      </tbody>
      {footer && <TableFooter footer={footer} />}
    </StyledTable>
  );
};

export default Table;
