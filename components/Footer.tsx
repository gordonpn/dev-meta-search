import { Flex, Link, Text, Icon } from "@chakra-ui/core";
import React, { ReactElement } from "react";

export default function Footer(): ReactElement {
  return (
    <>
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        marginTop="10rem"
        marginBottom="2rem"
      >
        <Text fontSize="xs">
          &copy;
          {` ${new Date().getFullYear()}`}
          {", "}
          Gordon Pham-Nguyen
        </Text>
        <Text fontSize="xs">
          {"Source code on "}
          <Link
            color="blue"
            href="https://github.com/gordonpn/internet-speedtests-visualized"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub <Icon name="external-link" mx="2px" />
          </Link>
        </Text>
        <Text fontSize="xs">
          {"More about me on my "}
          <Link
            color="blue"
            href="https://gordon-pn.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Website <Icon name="external-link" mx="2px" />
          </Link>
        </Text>
        <Text fontSize="xs">
          <Link
            color="blue"
            href="https://www.buymeacoffee.com/gordonpn"
            target="_blank"
            rel="noopener noreferrer"
          >
            You can buy me coffee, for support!
            <Icon name="external-link" mx="2px" />
          </Link>
        </Text>
      </Flex>
    </>
  );
}
