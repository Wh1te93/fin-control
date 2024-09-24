import { useMemo, useState } from "react";
import { Box, Container, Stack } from "@mui/material";
import { Product, ProductFields } from "types";

import { Contacts } from "components/Contacts";
import { ContactUsButton } from "components/ContactUsButton";
import { DashboardHeader } from "components/DashboardHeader";
import { DashboardSubHeader } from "components/DashboardSubHeader";
import { Filter } from "components/Filter";
import { FilterButtonsPanel } from "components/FilterButtonsPanel";
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

  const onChangeItem = (id: number, field: ProductFields, value: string) => {
    const newProducts = [...products];
    const index = newProducts.findIndex((el) => el.id === id);

    if (newProducts[index]) {
      if (
        field === "productsInTransit" ||
        field === "quantity" ||
        field === "totalCount"
      ) {
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
              <ContactUsButton />
            </Box>
          </div>
          <Box sx={{ flexGrow: 1, overflowX: "hidden" }}>
            <DashboardHeader />
            <DashboardSubHeader />
            <Filter />
            <FilterButtonsPanel
              exportToFileLink={`data:text/json;charset=utf-8,${encodeURIComponent(
                JSON.stringify(products),
              )}`}
            />
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
