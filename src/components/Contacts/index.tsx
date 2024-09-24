import { Fragment } from "react";
import { Box, Divider, Stack, Typography } from "@mui/material";

import {
  contactsLegalLink,
  contactsSection,
  contactsSubTitle,
  contactsText,
} from "./styles";

const CONTACTS_SECTION_LINKS = [
  {
    name: "Пользовательское соглашение",
    path: "#",
  },
  {
    name: "Политика конфеденциальности",
    path: "#",
  },
  {
    name: "Юридическая информация",
    path: "#",
  },
  {
    name: "Публичная оферта",
    path: "#",
  },
];

export const Contacts = () => {
  return (
    <Box sx={contactsSection}>
      <Typography marginBottom="30px">Техническая поддержка</Typography>
      <Stack
        direction="row"
        sx={{ justifyContent: "space-between", marginBottom: "20px" }}
      >
        <div>
          <Typography sx={contactsSubTitle}>Номер поддержки:</Typography>
          <Typography component="a" href="tel:89999999999" sx={contactsText}>
            8 (999) 999 99 99
          </Typography>
        </div>
        <div>
          <Typography sx={contactsSubTitle}>Почта поддержки:</Typography>
          <Typography
            component="a"
            href="mailto:pf1@werthesest.ru"
            sx={contactsText}
          >
            pf1@werthesest.ru
          </Typography>
        </div>
      </Stack>
      <Box sx={{ marginBottom: "30px" }}>
        <Typography sx={{ fontSize: "12px", color: "#4c5879" }}>
          Часы работы:
        </Typography>
        <Typography sx={contactsText}>Пн - Пт с 9:00 до 19:00 мск</Typography>
      </Box>
      {CONTACTS_SECTION_LINKS.map((el, index) => (
        <Fragment key={index}>
          <Typography component="a" href={el.path} sx={contactsLegalLink}>
            {el.name}
          </Typography>
          {index !== CONTACTS_SECTION_LINKS.length - 1 && (
            <Divider sx={{ borderColor: "#4c5879", margin: "4px 0" }} />
          )}
        </Fragment>
      ))}
    </Box>
  );
};
