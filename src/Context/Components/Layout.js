import React from "react";
import ReactDOM from "react-dom";
import HeaderComponent from "./HeaderComponent";
import ListComponent from "./ListComponent";
import CurrencyContextProvider from "../CurrencyContext";

const ContextLayoutComponent = () => {
    return (
      <CurrencyContextProvider className="row">
        <div className="container center-content">
          <h1 className="content-header">
            React Context API - Currency Converter{" "}
          </h1>
          <h3 className="content-sub-header">
            Select Curreny from the dropdown to see the price changes
          </h3>
          <HeaderComponent />
          <ListComponent />
        </div>
      </CurrencyContextProvider>
    );
}

export default ContextLayoutComponent;