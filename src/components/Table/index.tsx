import { forwardRef, MouseEvent, useState } from "react";
import { CircularProgress, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import MuiTable from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import { Product } from "types";

import { TableHead } from "./TableHead";
import { EnhancedTableProps } from "./types";

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
            <TableHead
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
                    <TableCell>{row.article}</TableCell>
                    <TableCell>{row.size}</TableCell>
                    <TableCell
                      onDoubleClick={() =>
                        setEditCell({ id: row.id, field: "quantity" })
                      }
                    >
                      {editCell &&
                      row.id === editCell?.id &&
                      editCell.field === "quantity" ? (
                        <TextField
                          variant="standard"
                          autoFocus
                          value={row.quantity}
                          type="number"
                          onChange={(e) =>
                            onChange
                              ? onChange(row.id, "quantity", e.target.value)
                              : undefined
                          }
                          onBlur={() => setEditCell(null)}
                        />
                      ) : (
                        row.quantity
                      )}
                    </TableCell>
                    <TableCell
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
                          type="number"
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
                    <TableCell
                      onDoubleClick={() =>
                        setEditCell({ id: row.id, field: "totalCount" })
                      }
                    >
                      {editCell &&
                      row.id === editCell?.id &&
                      editCell.field === "totalCount" ? (
                        <TextField
                          variant="standard"
                          autoFocus
                          value={row.totalCount}
                          type="number"
                          onChange={(e) =>
                            onChange
                              ? onChange(row.id, "totalCount", e.target.value)
                              : undefined
                          }
                          onBlur={() => setEditCell(null)}
                        />
                      ) : (
                        row.totalCount
                      )}
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
                <TableCell>{summaryRow?.productsInTransit}</TableCell>
                <TableCell>{summaryRow?.totalCount}</TableCell>
              </TableRow>
            </TableBody>
          </MuiTable>
        </TableContainer>
      </Box>
    );
  },
);
