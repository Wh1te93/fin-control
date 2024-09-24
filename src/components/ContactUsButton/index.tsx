import { QuestionAnswer } from "@mui/icons-material";
import { Button } from "@mui/material";

export const ContactUsButton = () => {
  return (
    <Button
      variant="contained"
      sx={{
        textTransform: "none",
        width: "100%",
        height: "60px",
        marginTop: "6px",
        borderRadius: "18px",
      }}
    >
      <QuestionAnswer sx={{ marginRight: "8px" }} />
      Связаться с нами
    </Button>
  );
};
