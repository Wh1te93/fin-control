import { AccountCircle, CalendarMonth, East } from "@mui/icons-material";
import { Button, Stack, Typography } from "@mui/material";

export const DashboardHeader = () => {
  return (
    <Stack
      direction="row"
      sx={{
        width: "100%",
        maxWidth: "670px",
        height: "60px",
        backgroundColor: "#fff",
        borderRadius: "18px",
        padding: "6px 12px 6px 20px",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "50px",
      }}
    >
      <Stack direction="row" spacing={3} sx={{ height: "100%" }}>
        <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
          <AccountCircle />
          <Typography>Иванов И.И.</Typography>
        </Stack>
        <Stack
          direction="row"
          spacing={1}
          sx={{
            alignItems: "center",
            height: "100%",
            padding: "0 12px",
            backgroundColor: "#ebf4ff",
            borderRadius: "18px",
          }}
        >
          <CalendarMonth color="info" />
          <Typography color="#0288d1">Тариф до 15.04.2024</Typography>
        </Stack>
      </Stack>
      <Stack direction="row" spacing={1}>
        <Button
          variant="outlined"
          sx={{
            borderRadius: "20px/50%",
            color: "#000",
            borderColor: "#000",
            textTransform: "none",
          }}
        >
          Выйти
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#fc5614",
            borderRadius: "20px/50%",
            textTransform: "none",
          }}
          endIcon={<East />}
        >
          О нас
        </Button>
      </Stack>
    </Stack>
  );
};
