import { useState } from "react";
import { MenuItem, Select, Stack, Typography } from "@mui/material";

import {
  categoryFilterTitle,
  categoryFilterWrapper,
  filterItem,
  filterItemValueWrapper,
} from "./styles";

const FILTERS = [
  {
    name: "Баркод",
    value: "5643242134323099",
  },
  {
    name: "Артикул",
    value: "ДжЖСинМом0823",
  },
  {
    name: "Размер",
    value: "44",
  },
];

const CATEGORY_FILTER_OPTIONS = [
  {
    value: 1,
    name: "Все",
  },
  {
    value: 2,
    name: "Джинсы",
  },
  {
    value: 3,
    name: "Брюки",
  },
  {
    value: 4,
    name: "Кардиган",
  },
];

export const Filter = () => {
  const [category, setCategory] = useState(1);

  return (
    <Stack direction="row" spacing={1} sx={{ marginBottom: "10px" }}>
      {FILTERS.map((el, index) => (
        <Stack key={index} direction="row" spacing={1} sx={filterItem}>
          <Typography sx={{ fontSize: "14px" }}>{el.name}</Typography>
          <Typography sx={filterItemValueWrapper}>{el.value}</Typography>
        </Stack>
      ))}
      <Stack sx={categoryFilterWrapper}>
        <Typography sx={categoryFilterTitle}>Категория</Typography>
        <Select
          value={category}
          onChange={(val) => setCategory(Number(val.target.value))}
          variant="standard"
          disableUnderline
          sx={{
            fontSize: "14px",
            ".MuiInputBase-input": {
              padding: "0 24px 0 0",
            },
          }}
        >
          {CATEGORY_FILTER_OPTIONS.map((el, index) => (
            <MenuItem key={index} value={el.value}>
              {el.name}
            </MenuItem>
          ))}
        </Select>
      </Stack>
    </Stack>
  );
};
