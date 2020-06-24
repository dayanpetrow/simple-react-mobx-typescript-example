import { observable } from "mobx";

class TransactionsStore {
  @observable transactions = [];
  @observable quantityOwned = 0;
  @observable balance = 1000;

  constructor() {}
}

export default TransactionsStore;
