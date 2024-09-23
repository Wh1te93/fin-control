import { MenuItem, Select, Stack, Typography } from "@mui/material";

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

export const Filter = () => {
  return (
    <Stack direction="row" spacing={1} sx={{ marginBottom: "10px" }}>
      {FILTERS.map((el, index) => (
        <Stack
          key={index}
          direction="row"
          spacing={1}
          sx={{
            display: "inline-flex",
            alignItems: "center",
            minHeight: "50px",
            padding: "6px 8px",
            border: "solid 1px #e4e6e7",
            borderRadius: "18px",
            backgroundColor: "#fff",
          }}
        >
          <Typography sx={{ fontSize: "14px" }}>{el.name}</Typography>
          <Typography
            sx={{
              fontSize: "14px",
              lineHeight: "12px",
              color: "#bbbdc1",
              padding: "14px 12px",
              borderRadius: "12px",
              backgroundColor: "#f5f6f6",
            }}
          >
            {el.value}
          </Typography>
        </Stack>
      ))}
      <Stack
        sx={{
          minHeight: "50px",
          padding: "6px 8px",
          border: "solid 1px #e4e6e7",
          borderRadius: "18px",
          backgroundColor: "#fff",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{ fontSize: "14px", lineHeight: "12px", color: "#bbbdc1" }}
        >
          Категория
        </Typography>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={1}
          onChange={() => {}}
          label="Age"
          variant="standard"
          disableUnderline={true}
          sx={{
            fontSize: "14px",
            ".MuiInputBase-input": {
              padding: "0 24px 0 0",
            },
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </Stack>
    </Stack>
  );
};
