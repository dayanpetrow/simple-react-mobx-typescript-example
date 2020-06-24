import PricesStore from "../stores/PricesStore";
import TransactionsStore from "../stores/TransactionStore";
import ThemeStore from "../stores/ThemeStore";

export interface TradingPageProps {
  pricesStore?: PricesStore;
  transactionsStore?: TransactionsStore;
  themeStore?: ThemeStore;
}
