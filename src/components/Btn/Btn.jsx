import { Button } from "@mui/material";
import React from "react";

const Btn = ({ children, color = "secondary", sx = {}, ...props }) => {
  return (
    <Button
      variant="contained"
      sx={{
        ...sx,
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default Btn;
