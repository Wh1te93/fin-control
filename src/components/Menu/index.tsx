import { useState } from "react";
import {
  ArrowDropDown,
  Clear,
  PostAdd,
  Settings,
  Source,
  Summarize,
} from "@mui/icons-material";
import { Box, Button, Collapse, Stack } from "@mui/material";

import { MenuItem } from "./MenuItem";
import {
  menuButton,
  menuHeader,
  menuHeaderTitleWrapper,
  menuWrapper,
} from "./styles";

const SUB_MENU_ITEMS = [
  { name: "пункт 1", path: "#" },
  { name: "пункт 2", path: "#" },
  { name: "пункт 3", path: "#" },
  { name: "пункт 4", path: "#" },
];

const MENU_ITEMS = [
  { name: "Настройки", subMenuItems: SUB_MENU_ITEMS, Icon: Settings },
  { name: "Внесение данных", subMenuItems: SUB_MENU_ITEMS, Icon: PostAdd },
  { name: "Отчеты", subMenuItems: SUB_MENU_ITEMS, Icon: Summarize },
  { name: "База знаний", subMenuItems: SUB_MENU_ITEMS, Icon: Source },
];

export const Menu = () => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Box sx={menuWrapper}>
      <Stack direction="row" sx={menuHeader}>
        <Stack direction="row" sx={{ alignItems: "center" }}>
          <Box component="span" sx={menuHeaderTitleWrapper}>
            ФИН
          </Box>{" "}
          Контроль
        </Stack>
        <Button
          variant="contained"
          onClick={handleClick}
          endIcon={open ? <Clear /> : <ArrowDropDown />}
          sx={menuButton}
        >
          Меню
        </Button>
      </Stack>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {MENU_ITEMS.map((el, index) => (
          <MenuItem
            key={index}
            name={el.name}
            subMenuItems={el.subMenuItems}
            Icon={el.Icon}
          />
        ))}
      </Collapse>
    </Box>
  );
};
