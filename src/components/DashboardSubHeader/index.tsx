import { Feed } from "@mui/icons-material";
import { Button, Stack, Typography } from "@mui/material";

export const DashboardSubHeader = () => {
  return (
    <Stack
      spacing={2}
      direction="row"
      sx={{
        alignItems: "center",
        marginBottom: "20px",
      }}
    >
      <Typography sx={{ fontSize: "24px" }}>
        Остаки сформированы на 01.04.2023 г.
      </Typography>
      <Button
        variant="contained"
        startIcon={<Feed />}
        sx={{
          textTransform: "none",
          backgroundColor: "#111621",
          borderRadius: "20px/50%",
        }}
      >
        Инструкции
      </Button>
    </Stack>
  );
};
