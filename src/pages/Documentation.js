import React from "react";
import { Container, Typography } from "@mui/material";

const Documentation = () => {
  return (
    <Container>
      <Typography variant="h3" sx={{ mt: 5 }}>Documentation</Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        This page will contain details on how to use the SDK, setup guides, API references, and sample code.
      </Typography>
    </Container>
  );
};

export default Documentation;
