import * as React from "react";
import { observer } from "mobx-react";
import { TradingPageProps } from "./types";
import { AccountBalance, TradeShares } from "../components";

@observer
class TradingPage extends React.Component<TradingPageProps> {
  componentDidMount() {
    this.props.pricesStore?.startPolling();
  }

  componentWillUnmount() {
    this.props.pricesStore?.stopPolling();
  }

  render() {
    const { pricesStore, transactionsStore, themeStore } = this.props;

    console.log(this.props);

    return (
      <>
        <AccountBalance
          balance={transactionsStore!.balance}
          toggleDarkMode={themeStore!.toggleDarkMode}
          isDarkMode={themeStore!.darkMode}
        />

        <TradeShares
          buyPrice={pricesStore?.buyPrice}
          sellPrice={pricesStore?.sellPrice}
          isPriceDown={pricesStore?.isPriceDown}
        />
      </>
    );
  }
}

export default TradingPage;
