export type Product = {
  id: number;
  barcode: number;
  type: string;
  article: string;
  size: string;
  quantity: number;
  productsInTransit: number;
  totalCount: number;
};

export type ProductFields = keyof Product;
