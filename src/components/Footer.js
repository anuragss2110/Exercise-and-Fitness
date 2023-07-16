import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo-1.png";

const Footer = () => {
  return (
    <Box mt="10px" bgcolor="#FFF3F4">
      <Stack gap="40px" alignItems="center" px="30px" pt="15px">
        <img src={Logo} alt="logo" style={{ width: "200px", height: "41px" }} />
        <Typography variant="h5" pb="20px" mt="20px">
          Train Hard or Go Home
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
