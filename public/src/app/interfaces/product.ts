export interface IProduct {
  sku: number;
  title: string;
  description: string;
  availableSizes: object;
  style: string;
  price: number;
  installments: number;
  currencyId: number;
  currencyFormat: string;
  isFreeShipping: boolean;
  pathImage: string;
  pathImageThumb: string;
  subtotal: number;
}
