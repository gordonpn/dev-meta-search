import React, { ReactElement } from "react";
import { Button, Flex } from "@chakra-ui/core";
import styled from "@emotion/styled";

const handleOnClick = () => {
  window.open("https://google.com", "_blank");
};

const ButtonStyled = styled(Button)`
  margin: 2rem;
`;

export default function SearchButton(): ReactElement {
  return (
    <>
      <Flex>
        <ButtonStyled variantColor="blue" size="lg" onClick={handleOnClick}>
          Search
        </ButtonStyled>
      </Flex>
    </>
  );
}
