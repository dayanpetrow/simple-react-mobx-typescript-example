class PricesService {
  buyPrice: number;
  sellPrice: number;
  changeFactor: number;

  // mock starting prices
  constructor() {
    this.buyPrice = 20;
    this.sellPrice = 17;
    this.changeFactor = 0.115;
  }

  // mock api call -> fetch new prices
  fetchPrices = () => {
    let nextBuyPrice: number, nextSellPrice: number, isPriceDown: boolean;

    // mock real-time price change
    if (Math.random() < 0.4) {
      nextBuyPrice = this.buyPrice - Math.random() * this.changeFactor;
      nextSellPrice = this.sellPrice - Math.random() * this.changeFactor;
    } else {
      nextBuyPrice = this.buyPrice + Math.random() * this.changeFactor;
      nextSellPrice = this.sellPrice + Math.random() * this.changeFactor;
    }

    // do not allow the sell price to ever be bigger than the current buy price
    if (nextSellPrice >= nextBuyPrice) {
      nextSellPrice = nextBuyPrice - Math.random() * this.changeFactor;
    }

    // normalize prices -> note that .toFixed(n) returns a string
    nextBuyPrice = parseFloat(nextBuyPrice.toFixed(4));
    nextSellPrice = parseFloat(nextSellPrice.toFixed(4));

    // did the price go down?
    isPriceDown = this.buyPrice < nextBuyPrice;

    // remember the new prices "on the backend"
    this.buyPrice = nextBuyPrice;
    this.sellPrice = nextSellPrice;

    return Promise.resolve({
      buyPrice: nextBuyPrice,
      sellPrice: nextSellPrice,
      isPriceDown,
    });
  };
}

export default PricesService;
