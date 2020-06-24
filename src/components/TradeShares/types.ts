export interface TradeSharesProps {
  buyPrice?: number;
  sellPrice?: number;
  isPriceDown?: boolean;
  quantityOwned?: number;
  handleBuy?: (quantity: number, price: number) => void;
  handleSell?: (quantity: number, price: number) => void;
}
