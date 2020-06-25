import { observable, action } from "mobx";
import PricesService from "../services/PricesService";

class PricesStore {
  intervalId: any;
  pricesService: PricesService;
  @observable buyPrice = 0;
  @observable sellPrice = 0;
  @observable isPriceDown = false;

  constructor() {
    this.pricesService = new PricesService();
    this.fetchPrices();
  }

  startPolling = () => {
    this.intervalId = setInterval(this.fetchPrices, 3000);
  };

  stopPolling = () => {
    clearInterval(this.intervalId);
  };

  @action
  fetchPrices = async () => {
    const data = await this.pricesService.fetchPrices();
    const { buyPrice, sellPrice, isPriceDown } = data;

    this.buyPrice = buyPrice;
    this.sellPrice = sellPrice;
    this.isPriceDown = isPriceDown;
  };
}

export default PricesStore;
