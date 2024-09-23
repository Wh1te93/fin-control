import { useMemo, useState } from "react";
import { Feed, FileDownload, QuestionAnswer } from "@mui/icons-material";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { Product } from "types";

import { Contacts } from "components/Contacts";
import { DashboardHeader } from "components/DashboardHeader";
import { Filter } from "components/Filter";
import { Menu } from "components/Menu";
import { Table } from "components/Table";
import { TableButtonsPanel } from "components/TableButtonsPanel";

export const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const summary = useMemo(
    () =>
      products.reduce(
        (acc, el) => {
          acc.productsInTransit += el.productsInTransit;
          acc.totalCount += el.totalCount;
          return acc;
        },
        { productsInTransit: 0, totalCount: 0 },
      ),
    [products],
  );

  const onChangeItem = (
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
  ) => {
    const newProducts = [...products];

    const index = newProducts.findIndex((el) => el.id === id);

    if (newProducts[index]) {
      if (field === "productsInTransit") {
        newProducts[index][field] = Number(value);
        setProducts(newProducts);
      }
    }
  };

  return (
    <Box component="main" sx={{ backgroundColor: "#ebeeef", height: "100vh" }}>
      <Container sx={{ padding: "20px 16px" }}>
        <Stack direction="row" spacing={5}>
          <div>
            <Box sx={{ width: "270px" }}>
              <Menu />
              <Contacts />
              <Button
                variant="contained"
                sx={{
                  textTransform: "none",
                  width: "100%",
                  height: "60px",
                  marginTop: "6px",
                  borderRadius: "18px",
                }}
              >
                <QuestionAnswer sx={{ marginRight: "8px" }} />
                Связаться с нами
              </Button>
            </Box>
          </div>
          <Box sx={{ flexGrow: 1, overflowX: "hidden" }}>
            <DashboardHeader />
            <Stack
              spacing={2}
              direction="row"
              sx={{
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <Typography sx={{ fontSize: "24px" }}>
                Остаки сформированы на 01.04.2023 г.
              </Typography>
              <Button
                variant="contained"
                startIcon={<Feed />}
                sx={{
                  textTransform: "none",
                  backgroundColor: "#111621",
                  borderRadius: "20px/50%",
                }}
              >
                Инструкции
              </Button>
            </Stack>
            <Filter />
            <Stack direction="row" spacing={1} sx={{ marginBottom: "20px" }}>
              <Button
                variant="contained"
                sx={{
                  textTransform: "none",
                  borderRadius: "20px/50%",
                }}
              >
                Сформировать
              </Button>
              <Button
                variant="contained"
                startIcon={<FileDownload />}
                href={`data:text/json;charset=utf-8,${encodeURIComponent(
                  JSON.stringify(products),
                )}`}
                download="filename.json"
                sx={{
                  textTransform: "none",
                  backgroundColor: "#111621",
                  borderRadius: "20px/50%",
                }}
              >
                Экспорт
              </Button>
            </Stack>
            <TableButtonsPanel setProducts={setProducts} />
            <Table
              selectedItem={null}
              items={products}
              rowsPerPage={10}
              totalCount={10}
              page={0}
              orderBy="name"
              order="asc"
              setSelectedItem={() => {}}
              setRowsPerPage={() => {}}
              setPage={() => {}}
              setOrderBy={() => {}}
              setOrder={() => {}}
              summaryRow={summary}
              onChange={onChangeItem}
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};
