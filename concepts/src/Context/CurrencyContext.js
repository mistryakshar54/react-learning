import React, { Component } from "react";

export const myCurrencyContext = React.createContext({
  currencyName: "USD",
  getCurrencyRate: currencyName => {},
  setCurrentCurrency: currencyName => {}
});

class CurrencyContextProvider extends Component {
  state = {
    currencyName: "USD",
    getCurrencyRate: currency => this.getCurrencyRate(currency),
    setCurrentCurrency: currencyName => this.setCurrentCurrency(currencyName)
  };
  setCurrentCurrency = currencyName => {
    this.setState({ currencyName: currencyName });
  };
  getCurrencyRate = (currencyName = "USD") => {
    switch (currencyName) {
      case "USD":
        return 70;
      case "INR":
        return 1;
      case "EUR":
        return 78;
      default:
        return 1;
    }
  };
  render() {
    return (
      <myCurrencyContext.Provider value={this.state}>
        {this.props.children}
      </myCurrencyContext.Provider>
    );
  }
}
export default CurrencyContextProvider;
