import { MouseEvent } from "react";
import TableCell from "@mui/material/TableCell";
import MuiTableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";

import { headCells, tableHeadProps } from "../types";

export const TableHead = ({
  order,
  orderBy,
  onRequestSort,
}: tableHeadProps) => {
  const createSortHandler =
    (property: string) => (event: MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <MuiTableHead sx={{ position: "sticky", top: 0, backgroundColor: "#fff" }}>
      <TableRow>
        {headCells.map((headCell, index) => (
          <TableCell
            key={headCell.id}
            sortDirection={orderBy === headCell.id ? order : false}
            align={headCell.sortEnabled ? "right" : "left"}
            sx={{ whiteSpace: "nowrap" }}
          >
            {headCell.sortEnabled ? (
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : "asc"}
                onClick={createSortHandler(headCell.id)}
                sx={{ width: "100%", justifyContent: "flex-end" }}
              >
                {headCell.label}
              </TableSortLabel>
            ) : (
              headCell.label
            )}
          </TableCell>
        ))}
      </TableRow>
    </MuiTableHead>
  );
};
