import React from "react";

const TableFooter: React.FC<{ footer: string }> = ({ footer }) => {
  return (
    <tfoot>
      <tr>
        <td colSpan={100}>{footer}</td>
      </tr>
    </tfoot>
  );
};

export default TableFooter;
