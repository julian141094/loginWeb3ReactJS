import React from "react";
import { Table } from "react-bootstrap";
import Header from "./header";

/**
 * @name Table
 * @description Component to render table row by row, with options posibilities
 * @param headers [itemHeader]
 * @param body [itemBody]
 * @param action (item : {} ) => JSX.Element
 * @param options {optionsTable}
 * @returns JSX.Element
 */
const CustomTable = ({ headers, body, action, options, optionsheader }) => {
  return (
    <div>
      <Header {...optionsheader} />
      {body.length > 0 ? (
        <>
          <Table {...options}>
            <thead>
              <tr>
                {headers.map((item, index) => (
                  <th key={`thead-${index}`}>{item.text}</th>
                ))}
                {options?.itemoptionsname !== undefined ? (
                  <th>{options?.itemoptionsname}</th>
                ) : (
                  <th>{"Options"}</th>
                )}
              </tr>
            </thead>
            <tbody>
              {body.map((item, i) => (
                <tr key={`tr-item-${i}`}>
                  {headers.map((row, index) => (
                    <td key={`td-item-${index}`}>{item[row.value] || ""}</td>
                  ))}
                  {action !== undefined ? (
                    <td key={`td-option-${i}`}>{action(item)}</td>
                  ) : null}
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      ) : (
        "We can't found any results"
      )}
    </div>
  );
};

export default CustomTable;
