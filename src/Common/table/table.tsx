import React, { ReactNode } from "react";
import "./Table.scss";

interface TableProps {
  data: any[];
  columnNames: {
    [key: string]: { label: string; render?: (label: string) => ReactNode };
  };
}

const Table: React.FC<TableProps> = ({ data, columnNames }) => {
  if (data.length === 0) return <p>No data available</p>;

  const headers = Object.keys(columnNames);

  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>Số TT</th>
            {headers.map((header, index) => (
              <th key={index}>{columnNames[header].label || ""}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              {headers.map((key) => (
                <td key={key}>
                  {columnNames[key].render
                    ? columnNames[key].render(item[key])
                    : item[key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
