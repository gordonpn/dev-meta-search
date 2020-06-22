import React, { ReactElement } from "react";
import { Flex, Text } from "@chakra-ui/core";

export default function Description(): ReactElement {
  return (
    <>
      <Flex width="60vw">
        <Text>
          As developers, we tend to have certain sites we like, as references
          for documentation, resources, tutorials, etc. This project is quite
          straightforward: you input some keywords and it searches using the
          powerful Google Search Engine on a curated subset of the internet.
        </Text>
      </Flex>
    </>
  );
}
