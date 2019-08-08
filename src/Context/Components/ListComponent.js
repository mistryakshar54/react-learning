import React from "react";
import { myCurrencyContext } from "../CurrencyContext";
import Table from "react-bootstrap/Table";

const ListComponent = props => {
  let chocolates = [
    {
      name: "Bounty",
      price: "140"
    },
    {
      name: "Toblerone",
      price: "110"
    },
    {
      name: "Snickers",
      price: "50"
    },
    {
      name: "Tim Tam",
      price: "300"
    }
  ];

  return (
    <myCurrencyContext.Consumer>
      {context => {
        return (
          <Table className="container" size="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Item</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {chocolates.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>
                      {parseFloat(
                        item.price /
                          context.getCurrencyRate(context.currencyName)
                      ).toFixed(2)}{" "}
                      {context.currencyName}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        );
      }}
    </myCurrencyContext.Consumer>
  );
};

export default ListComponent;
