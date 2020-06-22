import { Flex, Text } from "@chakra-ui/core";
import React, { ReactElement } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

interface Props {
  title: string;
  subtitle: string;
}

const TextStyled = styled(Text)`
  font-family: "Solway", serif;
  font-weight: 800;
`;

export const Hero = ({ title, subtitle }: Props): ReactElement => (
  <Flex
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    height="30vh"
  >
    <TextStyled fontSize={["3xl", "6xl"]}>{title}</TextStyled>
    <TextStyled fontSize="2xl">{subtitle}</TextStyled>
  </Flex>
);

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};
