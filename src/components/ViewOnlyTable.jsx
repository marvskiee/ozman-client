import { useTable } from "react-table";
import { useNavigate } from "react-router-dom";

const ViewOnlyTable = ({ columns, data, reference }) => {
  const navigate = useNavigate();

  const tableInstance = useTable({
    columns: columns,
    data: data,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <div ref={reference} className="p-5" >
      <h2 className="pt-5 mb-3 font-semibold">Payment History</h2>
      <table {...getTableProps()} className="text-md w-full text-left text-sm">
        <thead className="bg-gray-50 text-xs uppercase">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  scope="col"
                  className="py-3 px-6"
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className="dataTable">
          {rows.map((row, idx) => {
            prepareRow(row);

            return (
              <tr
                {...row.getRowProps()}
                className="border-white-400 bg-white-500 border-b"
              >
                {row.cells.map((cell, idx) => (
                  <td
                    {...cell.getCellProps()}
                    scope="row"
                    className="dark:text-white-100 whitespace-nowrap py-4 px-6 font-medium"
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ViewOnlyTable;
