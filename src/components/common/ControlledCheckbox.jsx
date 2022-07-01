import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";

export default function ControlledCheckbox({ checked, handleCheck }) {
  return (
    <Checkbox
      checked={checked}
      onChange={handleCheck}
      inputProps={{ "aria-label": "controlled" }}
    />
  );
}
