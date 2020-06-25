import { observable, action } from "mobx";

export interface Transaction {
  date: Date;
  type: string;
  price: number;
}

class TransactionsStore {
  @observable transactions: Transaction[] = [];
  @observable quantityOwned = 0;
  @observable balance = 1000;

  @action
  handleBuyShares = (quantity: number, buyPrice: number) => {
    const cost = quantity * buyPrice;
    this.balance = this.balance - cost;
    this.quantityOwned = this.quantityOwned + quantity;

    const transactionItem = {
      date: Date.now(),
      type: "Purchase",
      price: buyPrice,
    };

    const newTransactions: Transaction[] = Array(quantity).fill({
      ...transactionItem,
    });
    this.transactions = [...this.transactions, ...newTransactions];
  };

  @action
  handleSellShares = (quantity: number, sellPrice: number) => {
    const revenue = quantity * sellPrice;
    this.balance = this.balance + revenue;
    this.quantityOwned = this.quantityOwned - quantity;

    this.transactions = [...this.transactions.slice(quantity)];
  };
}

export default TransactionsStore;
