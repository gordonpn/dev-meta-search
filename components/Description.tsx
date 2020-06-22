import React, { ReactElement } from "react";
import { Flex, Text } from "@chakra-ui/core";

export default function Description(): ReactElement {
  return (
    <>
      <Flex flexDirection="column" width="60vw">
        <Text>
          As developers, we tend to have certain sites we like, as references
          for documentation, resources, tutorials, etc. This project is quite
          straightforward: you input some keywords and it searches using the
          powerful Google Search Engine on a curated subset of the internet.
        </Text>
        <Text>
          In all honesty, I don&apos;t think this project is as useful as I
          imagined it to be. Mostly because Google actually puts a limit on
          search queries. Due to that limitation, I can&apos;t search a bigger
          list of sites as I would have liked.
        </Text>
      </Flex>
    </>
  );
}
