import { Box, Divider, Stack, Typography } from "@mui/material";

export const Contacts = () => {
  return (
    <Box
      sx={{
        width: "270px",
        backgroundColor: "#111621",
        color: "#fff",
        marginTop: "6px",
        padding: "16px 22px",
        borderRadius: "18px",
      }}
    >
      <Typography marginBottom="30px">Техническая поддержка</Typography>
      <Stack
        direction="row"
        sx={{ justifyContent: "space-between", marginBottom: "20px" }}
      >
        <div>
          <Typography sx={{ fontSize: "12px", color: "#4c5879" }}>
            Номер поддержки:
          </Typography>
          <Typography
            component="a"
            href="tel:89999999999"
            sx={{ fontSize: "13px", textDecoration: "none", color: "#fff" }}
          >
            8 (999) 999 99 99
          </Typography>
        </div>
        <div>
          <Typography sx={{ fontSize: "12px", color: "#4c5879" }}>
            Почта поддержки:
          </Typography>
          <Typography
            component="a"
            href="mailto:pf1@werthesest.ru"
            sx={{ fontSize: "13px", textDecoration: "none", color: "#fff" }}
          >
            pf1@werthesest.ru
          </Typography>
        </div>
      </Stack>
      <Box sx={{ marginBottom: "30px" }}>
        <Typography sx={{ fontSize: "12px", color: "#4c5879" }}>
          Часы работы:
        </Typography>
        <Typography
          sx={{ fontSize: "13px", textDecoration: "none", color: "#fff" }}
        >
          Пн - Пт с 9:00 до 19:00 мск
        </Typography>
      </Box>
      <Typography
        component="a"
        href="#"
        sx={{ fontSize: "13px", textDecoration: "none", color: "#4c5879" }}
      >
        Пользовательское соглашение
      </Typography>
      <Divider sx={{ borderColor: "#4c5879", margin: "4px 0" }} />
      <Typography
        component="a"
        href="#"
        sx={{ fontSize: "13px", textDecoration: "none", color: "#4c5879" }}
      >
        Политика конфеденциальности
      </Typography>
      <Divider sx={{ borderColor: "#4c5879", margin: "4px 0" }} />
      <Typography
        component="a"
        href="#"
        sx={{ fontSize: "13px", textDecoration: "none", color: "#4c5879" }}
      >
        Юридическая информация
      </Typography>
      <Divider sx={{ borderColor: "#4c5879", margin: "4px 0" }} />
      <Typography
        component="a"
        href="#"
        sx={{ fontSize: "13px", textDecoration: "none", color: "#4c5879" }}
      >
        Публичная оферта
      </Typography>
    </Box>
  );
};
