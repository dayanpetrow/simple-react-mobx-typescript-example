import * as React from "react";
import { observer } from "mobx-react";
import { TradingPageProps } from "./types";
import { Header, TradeShares, TransactionsTable } from "../components";

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

    return (
      <>
        <Header
          toggleDarkMode={themeStore!.toggleDarkMode}
          isDarkMode={themeStore!.darkMode}
        />

        <TradeShares
          balance={transactionsStore!.balance}
          quantityOwned={transactionsStore!.quantityOwned}
          handleBuyShares={transactionsStore!.handleBuyShares}
          handleSellShares={transactionsStore!.handleSellShares}
          buyPrice={pricesStore!.buyPrice}
          sellPrice={pricesStore!.sellPrice}
          isPriceDown={pricesStore!.isPriceDown}
        />

        <TransactionsTable
          transactions={transactionsStore!.transactions}
          balance={transactionsStore!.balance}
        />
      </>
    );
  }
}

export default TradingPage;
