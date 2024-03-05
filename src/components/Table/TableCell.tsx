import React from "react";

const TableCell: React.FC<{ cell: any }> = ({ cell }) => {
  return <td>{cell}</td>;
};

export default TableCell;
