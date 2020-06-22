import { Button, Flex, Input } from "@chakra-ui/core";
import React, { ReactElement, useEffect, useState } from "react";
import styled from "@emotion/styled";
import sites from "src/sites";

const ButtonStyled = styled(Button)`
  margin: 2rem;
`;

export default function Search(): ReactElement {
  const [userInput, setUserInput] = useState("");
  const [searchString, setSearchString] = useState("");

  const doSearch = () => {
    const searchURL = `https://google.com/search?q=${userInput}${searchString}`;
    window.open(searchURL, "_blank");
  };

  const handleKeyPress = (event: { which: number }) => {
    if (event.which === 13) {
      doSearch();
    }
  };

  useEffect(() => {
    let partialURL = "";
    sites.forEach((site, key, arr) => {
      let searchBit = `site:${site}`;
      if (!Object.is(arr.length - 1, key)) {
        searchBit = searchBit.concat(" OR ");
      }
      partialURL = partialURL.concat(searchBit);
    });
    partialURL = ` (${partialURL})`;
    setSearchString(partialURL);
  }, []);

  return (
    <>
      <Flex width="80vw" flexDirection={"row"}>
        <Input
          size="lg"
          onKeyPress={handleKeyPress}
          onChange={(event: any) => setUserInput(event.target.value)}
        />
      </Flex>
      <Flex flexDirection="row">
        <ButtonStyled variantColor="blue" size="lg" onClick={doSearch}>
          Search
        </ButtonStyled>
      </Flex>
    </>
  );
}
