import React from "react";
import styled from "styled-components";


const StyledHeader = styled.thead<{ disabled?: boolean }>`
  background-color: ${({ disabled }) => (disabled ? "#f1f1f1" : "#fff")};
  color: ${({ disabled }) => (disabled ? "#666" : "#000")};
  font-weight: bold;

  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  border: 3px solid black;

  & th:nth-child(1) {
    width: 30%;
  }

  & th:nth-child(2) {
    width: 20%;
  }

  & th:nth-child(3) {
    width: 15%;
  }

  & th:nth-child(4) {
    width: 35%;
  }

  & th,
  & td {
    padding: 20px;
  }
`;

const TableHeader: React.FC<{ headers: string[]; disabled?: boolean }> = ({
  headers,
  disabled,
}) => {
  return (
    <StyledHeader disabled={disabled}>
      <tr>
        {headers.map((header, index) => (
          <th key={index}>{header}</th>
        ))}
      </tr>
    </StyledHeader>
  );
};

export default TableHeader;
