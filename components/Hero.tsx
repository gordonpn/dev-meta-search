import { Flex, Heading } from "@chakra-ui/core";
import React, { ReactElement } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

interface Props {
  title: string;
  subtitle: string;
}

const HeadingStyled = styled(Heading)`
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
    <HeadingStyled fontSize="5vw" mb={4}>
      {title}
    </HeadingStyled>
    <HeadingStyled fontSize="3vw" mb={4}>
      {subtitle}
    </HeadingStyled>
  </Flex>
);

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};
