import * as React from "react";
import { observer } from "mobx-react";
import PricesStore from "./stores/PricesStore";
import TransactionsStore from "./stores/TransactionStore";
import ThemeStore from "./stores/ThemeStore";
import TradingPage from "./pages/TradingPage";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./theme/globalStyles";
import { DARK_THEME, LIGHT_THEME } from "./theme/themes";

const pricesStore = new PricesStore();
const transactionsStore = new TransactionsStore();
const themeStore = new ThemeStore();

@observer
class App extends React.Component<{}, {}> {
  render() {
    return (
      <ThemeProvider theme={themeStore.darkMode ? DARK_THEME : LIGHT_THEME}>
        <GlobalStyle />
        <TradingPage
          pricesStore={pricesStore}
          transactionsStore={transactionsStore}
          themeStore={themeStore}
        />
      </ThemeProvider>
    );
  }
}

export default App;
