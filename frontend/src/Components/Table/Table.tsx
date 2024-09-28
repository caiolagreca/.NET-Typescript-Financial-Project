import React from "react";
import { testIncomeStatementData } from "../../Components/Table/testData";

const data = testIncomeStatementData;

type Props = {
  config: any;
  data: any;
};

const Table = ({ config, data }: Props) => {
  const renderedRows = data.map((company: any) => {
    return (
      <tr
        key={company.cik}
        className="border-b border-gray-700 last:border-none"
      >
        {config.map((val: any) => {
          return (
            <td className="p-4 text-sm text-gray-200">{val.render(company)}</td>
          );
        })}
      </tr>
    );
  });
  const renderedHeaders = config.map((config: any) => {
    return (
      <th
        className="p-4 text-left text-sm font-semibold text-gray-300 uppercase tracking-wider"
        key={config.label}
      >
        {config.label}
      </th>
    );
  });
  return (
    <div className="bg-gray-800 shadow-lg rounded-lg p-6">
      <table className="min-w-full">
        <thead className="border-b border-gray-700">
          <tr>{renderedHeaders}</tr>
        </thead>
        <tbody>{renderedRows}</tbody>
      </table>
    </div>
  );
};

export default Table;

/* TABLE STRUCTURE:
  <table>
    <thead>
      <tr>
        <th>Title</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Value</td>
      </tr>
    </tbody>
  </table>
*/
