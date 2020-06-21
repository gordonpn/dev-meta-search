import { Input, Flex } from "@chakra-ui/core";
import React, { ReactElement } from "react";

export default function SearchBox(): ReactElement {
  return (
    <>
      <Flex width="50vw">
        <Input placeholder="Input some keywords" size="lg" />
      </Flex>
    </>
  );
}
