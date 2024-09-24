import { useState } from "react";
import {
  ArrowDropDown,
  ArrowDropUp,
  SvgIconComponent,
} from "@mui/icons-material";
import { Box, Button, Collapse, MenuItem as MuiMenuItem } from "@mui/material";

import { menuButton } from "./styles";

export const MenuItem = ({
  name,
  subMenuItems,
  Icon,
}: {
  name: string;
  subMenuItems: { path: string; name: string }[];
  Icon: SvgIconComponent;
}) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(!open);

  return (
    <Box sx={{ marginBottom: "2px" }}>
      <Button
        variant="contained"
        onClick={handleClick}
        endIcon={open ? <ArrowDropUp /> : <ArrowDropDown />}
        sx={menuButton}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Icon sx={{ marginRight: "6px" }} />
          {name}
        </Box>
      </Button>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {subMenuItems.map((el, index) => (
          <MuiMenuItem key={index} component="a" href={el.path} disableRipple>
            {el.name}
          </MuiMenuItem>
        ))}
      </Collapse>
    </Box>
  );
};
