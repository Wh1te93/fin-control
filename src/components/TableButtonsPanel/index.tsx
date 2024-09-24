import { Clear, EditNote, UploadFile } from "@mui/icons-material";
import { Box, Button, Divider, Input, Stack } from "@mui/material";
import { Product } from "types";

import { button } from "./styles";

export const TableButtonsPanel = ({
  setProducts,
}: {
  setProducts: (products: Product[]) => void;
}) => {
  const onChange = (event: any) => {
    const reader = new FileReader();
    reader.onload = onReaderLoad;
    reader.readAsText(event.target.files[0]);
  };

  const onReaderLoad = (event: any) => {
    const obj = JSON.parse(event.target.result);
    setProducts(obj);
  };

  return (
    <Box sx={{ maxWidth: "640px", marginBottom: "20px" }}>
      <Divider />
      <Stack
        direction="row"
        sx={{ justifyContent: "space-between", padding: "12px 0" }}
      >
        <Stack direction="row" spacing={1}>
          <Button component="label" startIcon={<UploadFile />} sx={button}>
            Загрузить данные из csv
            <Input type="file" onChange={onChange} sx={{ display: "none" }} />
          </Button>
          <Button startIcon={<EditNote />} sx={button}>
            Изменить данные
          </Button>
        </Stack>
        <Stack direction="row">
          <Divider orientation="vertical" />
          <Button endIcon={<Clear />} sx={{ ...button, marginLeft: "30px" }}>
            Очистить
          </Button>
        </Stack>
      </Stack>
      <Divider />
    </Box>
  );
};
