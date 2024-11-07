import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import { format } from "date-fns";
import { Telegram, Instagram, LinkedIn } from "@mui/icons-material";
import theme from "@/src/helpers/theme";
const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        padding: "20px",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: theme.palette.grey[800],
        color: "white",
      }}
    >
      <Typography>
        © {format(new Date(), "yyyy")} All Right Reserved.
      </Typography>
      <ButtonGroup
        variant="contained"
        aria-label="Basic button group"
        disableElevation
        sx={{ gap: "5px" }}
      >
        <Button>
          <Telegram />
        </Button>
        <Button>
          <Instagram />
        </Button>
        <Button>
          <LinkedIn />
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default Footer;
