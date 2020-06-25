export interface TradeSharesProps {
  balance: number;
  buyPrice: number;
  sellPrice: number;
  isPriceDown: boolean;
  quantityOwned: number;
  handleBuyShares: (quantity: number, price: number) => void;
  handleSellShares: (quantity: number, price: number) => void;
}
