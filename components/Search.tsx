import { Input, Flex, Button } from "@chakra-ui/core";
import React, { ReactElement, useEffect, useState } from "react";
import styled from "@emotion/styled";

const ButtonStyled = styled(Button)`
  margin: 2rem;
`;

export default function Search(): ReactElement {
  const [userInput, setUserInput] = useState("");
  const [sites, setSites] = useState();

  const doSearch = () => {
    const searchURL = `https://google.com/search?q=${userInput}`;
    window.open(searchURL, "_blank");
  };

  const handleKeyPress = (event: { which: number }) => {
    if (event.which === 13) {
      doSearch();
    }
  };

  const clearInput = () => {
    setUserInput("");
  };

  useEffect(() => {
    console.log("TODO");
  }, []);

  return (
    <>
      <Flex width="80vw" flexDirection={"row"}>
        <Input
          size="lg"
          onKeyPress={handleKeyPress}
          onChange={(event) => setUserInput(event.target.value)}
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
