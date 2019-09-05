import React from "react";
import { myCurrencyContext } from "../CurrencyContext";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
const HeaderComponent = props => {
  return (
    <myCurrencyContext.Consumer className="container">
      {context => {
        return (
          <React.Fragment>
            Select Currency:
            <DropdownButton
              id="dropdown-basic-button"
              title={context.currencyName}
            >
              <Dropdown.Item onClick={() => context.setCurrentCurrency("USD")}>
                USD
              </Dropdown.Item>
              <Dropdown.Item onClick={() => context.setCurrentCurrency("INR")}>
                INR
              </Dropdown.Item>
              <Dropdown.Item onClick={() => context.setCurrentCurrency("EUR")}>
                EUR
              </Dropdown.Item>
            </DropdownButton>
          </React.Fragment>
        );
      }}
    </myCurrencyContext.Consumer>
  );
};

export default HeaderComponent;
