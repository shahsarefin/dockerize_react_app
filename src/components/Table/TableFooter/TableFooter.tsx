import React from "react";
import styled from "styled-components";

const StyledFooter = styled.tfoot<{ disabled?: boolean }>`
  background-color: ${({ disabled }) => (disabled ? "#f1f1f1" : "#fff")};
  color: ${({ disabled }) => (disabled ? "#666" : "#000")};
  font-weight: bold;

  td {
    vertical-align: middle;
    text-align: center;
    width: 25%;
  }
`;

const TableFooter: React.FC<{ footer: string; disabled?: boolean }> = ({
  footer,
  disabled,
}) => {
  return (
    <StyledFooter disabled={disabled}>
      <tr>
        <td colSpan={100}>{footer}</td>
      </tr>
    </StyledFooter>
  );
};

export default TableFooter;
