import { forwardRef, MouseEvent, useState } from "react";
import { CircularProgress, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import MuiTable from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import { Product } from "types";

import { EnhancedTableHeadProps, EnhancedTableProps, headCells } from "./types";

function EnhancedTableHead({
  order,
  orderBy,
  onRequestSort,
}: EnhancedTableHeadProps) {
  const createSortHandler =
    (property: string) => (event: MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead sx={{ position: "sticky", top: 0, backgroundColor: "#fff" }}>
      <TableRow>
        {headCells.map((headCell, index) => (
          <TableCell
            key={headCell.id}
            sortDirection={orderBy === headCell.id ? order : false}
            align={headCell.sortEnabled ? "right" : "left"}
            sx={{
              paddingLeft: index === 0 ? 0 : undefined,
              whiteSpace: "nowrap",
            }}
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
    </TableHead>
  );
}

export const Table = forwardRef(
  (
    {
      items,
      selectedItem,
      setSelectedItem,
      rowsPerPage,
      setRowsPerPage,
      totalCount,
      page,
      setPage,
      orderBy,
      setOrderBy,
      order,
      setOrder,
      loading,
      summaryRow,
      onChange,
    }: EnhancedTableProps,
    ref,
  ) => {
    const [editCell, setEditCell] = useState<{
      id: number;
      field: string;
    } | null>(null);

    const handleRequestSort = (
      event: MouseEvent<unknown>,
      property: string,
    ) => {
      const isAsc = orderBy === property && order === "asc";
      setOrder(isAsc ? "desc" : "asc");
      setOrderBy(property);
    };

    const handleClick = (event: MouseEvent<unknown>, item: Product) => {
      setSelectedItem(item);
    };

    const isSelected = (id: number) => selectedItem?.id === id;

    return (
      <Box
        sx={{
          width: "100%",
          maxHeight: "440px",
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          overflow: "auto",
          backgroundColor: "#fff",
          borderRadius: "18px",
          padding: "10px 10px 10px 18px",
        }}
      >
        <TableContainer
          sx={{
            position: "relative",
            scrollbarColor: "#1976d2  #ebeeef",
          }}
          component={Box}
          ref={ref}
        >
          {loading && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                width: "100%",
                height: "100%",
              }}
            >
              <CircularProgress size={140} />
            </Box>
          )}
          <MuiTable
            sx={{
              minWidth: 750,
              minHeight: "400px",
            }}
            aria-labelledby="tableTitle"
            size="medium"
          >
            <colgroup>
              <col width="26%" />
              <col width="20%" />
              <col width="18%" />
              <col width="16%" />
              <col width="20%" />
            </colgroup>
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={items.length}
            />
            <TableBody>
              {items.map((row: Product, index: number) => {
                const isItemSelected = isSelected(row.id);

                return (
                  <TableRow
                    onClick={(event) => handleClick(event, row)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    sx={{
                      cursor: "pointer",
                      "&:nth-of-type(odd)": {
                        backgroundColor: "#ebeeef",
                      },
                    }}
                  >
                    <TableCell component="th" scope="row">
                      {row.barcode}
                    </TableCell>
                    <TableCell>{row.type}</TableCell>
                    <TableCell sx={{ paddingLeft: "42px" }}>
                      {row.article}
                    </TableCell>
                    <TableCell sx={{ paddingLeft: "42px" }}>
                      {row.size}
                    </TableCell>
                    <TableCell sx={{ paddingLeft: "42px" }}>
                      {row.quantity}
                    </TableCell>
                    <TableCell
                      sx={{ paddingLeft: "42px" }}
                      onDoubleClick={() =>
                        setEditCell({ id: row.id, field: "productsInTransit" })
                      }
                    >
                      {editCell &&
                      row.id === editCell?.id &&
                      editCell.field === "productsInTransit" ? (
                        <TextField
                          variant="standard"
                          autoFocus
                          value={row.productsInTransit}
                          onChange={(e) =>
                            onChange
                              ? onChange(
                                  row.id,
                                  "productsInTransit",
                                  e.target.value,
                                )
                              : undefined
                          }
                          onBlur={() => setEditCell(null)}
                        />
                      ) : (
                        row.productsInTransit
                      )}
                    </TableCell>
                    <TableCell sx={{ paddingLeft: "42px" }}>
                      {row.totalCount}
                    </TableCell>
                  </TableRow>
                );
              })}
              <TableRow
                role="checkbox"
                tabIndex={-1}
                sx={{
                  cursor: "pointer",
                  "&:nth-of-type(odd)": {
                    backgroundColor: "#ebeeef",
                    position: "sticky",
                    bottom: 0,
                  },
                }}
              >
                <TableCell colSpan={5}>Итого:</TableCell>
                <TableCell sx={{ paddingLeft: "42px" }}>
                  {summaryRow?.productsInTransit}
                </TableCell>
                <TableCell sx={{ paddingLeft: "42px" }}>
                  {summaryRow?.totalCount}
                </TableCell>
              </TableRow>
            </TableBody>
          </MuiTable>
        </TableContainer>
      </Box>
    );
  },
);
