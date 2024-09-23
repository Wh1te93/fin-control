import { useState } from "react";
import { ArrowDropDown, Clear } from "@mui/icons-material";
import { Box, Button, Collapse, Stack } from "@mui/material";

import AddData from "./AddData";
import KnowledgeBase from "./KnowledgeBase";
import Reports from "./Reports";
import Settings from "./Settings";

export const Menu = () => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#111621",
        color: "#fff",
        padding: "8px",
        borderRadius: "18px",
      }}
    >
      <Stack
        direction="row"
        sx={{
          alignItems: "center",
          marginBottom: "12px",
          justifyContent: "space-between",
          padding: "6px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            component="span"
            sx={{
              backgroundColor: "#287eff",
              padding: "2px",
              marginRight: "4px",
              borderRadius: "4px",
            }}
          >
            ФИН
          </Box>{" "}
          Контроль
        </Box>
        <Button
          variant="contained"
          onClick={handleClick}
          endIcon={open ? <Clear /> : <ArrowDropDown />}
          sx={{
            color: "#58658a",
            backgroundColor: "#1d2438",
            borderRadius: "20px/50%",
            textTransform: "none",
          }}
        >
          Меню
        </Button>
      </Stack>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Settings />
        <AddData />
        <Reports />
        <KnowledgeBase />
      </Collapse>
    </Box>
  );
};
