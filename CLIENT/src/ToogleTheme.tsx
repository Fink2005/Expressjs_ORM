import { IconButton, useColorScheme } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import { DarkMode } from "@mui/icons-material";
import { useState } from "react";
export default function ToogleTheme() {
  const { mode, setMode } = useColorScheme();
  const [activeTheme, setactiveTheme] = useState<boolean>(false);
  const handleTheme = () => {
    setactiveTheme((a) => !a);
    if (activeTheme) {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  if (!mode) {
    return null;
  }
  return (
    <IconButton className="border-2 border-black" onClick={handleTheme}>
      {!activeTheme ? <DarkMode /> : <LightModeIcon />}
    </IconButton>
  );
}
