import { Dispatch, MouseEvent, SetStateAction } from "react";
import { Product } from "types";

export type Order = "asc" | "desc";

export type HeadCell = {
  id: string;
  label: string;
  numeric: boolean;
  sortEnabled: boolean;
};

export const headCells: readonly HeadCell[] = [
  {
    id: "barcode",
    numeric: true,
    label: "Баркод",
    sortEnabled: false,
  },
  {
    id: "type",
    numeric: false,
    label: "Предмет",
    sortEnabled: false,
  },
  {
    id: "article",
    numeric: false,
    label: "Артикул",
    sortEnabled: true,
  },
  {
    id: "size",
    numeric: false,
    label: "Размер",
    sortEnabled: true,
  },
  {
    id: "quantity",
    numeric: true,
    label: "Доступно к заказу",
    sortEnabled: true,
  },
  {
    id: "productsInTransit",
    numeric: true,
    label: "Товары в пути",
    sortEnabled: true,
  },
  {
    id: "totalCount",
    numeric: true,
    label: "Итого кол-во товара",
    sortEnabled: true,
  },
];

export type EnhancedTableHeadProps = {
  onRequestSort: (event: MouseEvent<unknown>, property: string) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
};

export type EnhancedTableProps = {
  items: Product[];
  selectedItem: Product | null;
  setSelectedItem: Dispatch<SetStateAction<Product | null>>;
  rowsPerPage: number;
  setRowsPerPage: (value: number) => void;
  totalCount: number;
  page: number;
  setPage: (value: number) => void;
  orderBy: string;
  setOrderBy: (value: string) => void;
  order: Order;
  setOrder: (value: Order) => void;
  loading?: boolean;
  summaryRow?: { productsInTransit: number; totalCount: number };
  onChange?: (
    id: number,
    field:
      | "id"
      | "barcode"
      | "type"
      | "article"
      | "size"
      | "quantity"
      | "productsInTransit"
      | "totalCount",
    value: string,
  ) => void;
};
