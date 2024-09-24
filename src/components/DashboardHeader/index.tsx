import { AccountCircle, CalendarMonth, East } from "@mui/icons-material";
import { Button, Stack, Typography } from "@mui/material";

import {
  dashboardHeader,
  dashboardHeaderButton,
  planSectionWrapper,
} from "./styles";

export const DashboardHeader = () => {
  return (
    <Stack direction="row" sx={dashboardHeader}>
      <Stack direction="row" spacing={3} sx={{ height: "100%" }}>
        <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
          <AccountCircle />
          <Typography>Иванов И.И.</Typography>
        </Stack>
        <Stack direction="row" spacing={1} sx={planSectionWrapper}>
          <CalendarMonth color="info" />
          <Typography color="#0288d1">Тариф до 15.04.2024</Typography>
        </Stack>
      </Stack>
      <Stack direction="row" spacing={1}>
        <Button
          variant="outlined"
          sx={{
            ...dashboardHeaderButton,
            color: "#000",
            borderColor: "#000",
          }}
        >
          Выйти
        </Button>
        <Button
          variant="contained"
          sx={{
            ...dashboardHeaderButton,
            backgroundColor: "#fc5614",
          }}
          endIcon={<East />}
        >
          О нас
        </Button>
      </Stack>
    </Stack>
  );
};
