import React from "react";
import TableCell from "./TableCell";

const TableRow: React.FC<{ row: any }> = ({ row }) => {
  return (
    <tr>
      {Object.values(row).map((cell, index) => (
        <TableCell key={index} cell={cell} />
      ))}
    </tr>
  );
};

export default TableRow;
