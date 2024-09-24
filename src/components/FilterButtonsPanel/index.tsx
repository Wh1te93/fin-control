import { FileDownload } from "@mui/icons-material";
import { Button, Stack } from "@mui/material";

export const FilterButtonsPanel = ({
  exportToFileLink,
}: {
  exportToFileLink: string;
}) => {
  return (
    <Stack direction="row" spacing={1} sx={{ marginBottom: "20px" }}>
      <Button
        variant="contained"
        sx={{
          textTransform: "none",
          borderRadius: "20px/50%",
        }}
      >
        Сформировать
      </Button>
      <Button
        variant="contained"
        startIcon={<FileDownload />}
        href={exportToFileLink}
        download="filename.json"
        sx={{
          textTransform: "none",
          backgroundColor: "#111621",
          borderRadius: "20px/50%",
        }}
      >
        Экспорт
      </Button>
    </Stack>
  );
};
