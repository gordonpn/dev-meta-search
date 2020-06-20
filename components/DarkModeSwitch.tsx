import { useColorMode, Switch } from "@chakra-ui/core";
import React, { ReactElement } from "react";

export const DarkModeSwitch = (): ReactElement => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <Switch
      position="fixed"
      top="1rem"
      right="1rem"
      color="blue"
      isChecked={isDark}
      onChange={toggleColorMode}
    />
  );
};