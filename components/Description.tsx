import React, { ReactElement } from "react";
import { Flex, Text } from "@chakra-ui/core";

export default function Description(): ReactElement {
  return (
    <>
      <Flex width="80vh">
        <Text>
          As developers, we tend to have certain site we like for documentation,
          resources and tutorials. This project is quite straightforward: you
          input some keywords and it searches using the powerful Google Search
          Engine on a curated subset of the internet.
        </Text>
      </Flex>
    </>
  );
}
