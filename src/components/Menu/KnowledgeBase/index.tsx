import { useState } from "react";
import { ArrowDropDown, ArrowDropUp, Source } from "@mui/icons-material";
import { Box, Button, Collapse, MenuItem } from "@mui/material";

const MENU_ITEMS = [
  { name: "пункт 1", path: "#" },
  { name: "пункт 2", path: "#" },
  { name: "пункт 3", path: "#" },
  { name: "пункт 4", path: "#" },
];

export default function CustomizedMenus() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ marginBottom: "2px" }}>
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={open ? <ArrowDropUp /> : <ArrowDropDown />}
        sx={{
          height: "46px",
          width: "100%",
          justifyContent: "space-between",
          backgroundColor: "#1d2438",
          borderRadius: "10px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Source sx={{ marginRight: "6px" }} />
          База знаний
        </Box>
      </Button>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {MENU_ITEMS.map((el, index) => (
          <MenuItem key={index} component="a" href={el.path} disableRipple>
            {el.name}
          </MenuItem>
        ))}
      </Collapse>
    </Box>
  );
}
