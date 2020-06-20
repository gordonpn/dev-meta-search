import { Text } from "@chakra-ui/core";
import { Hero } from "@/components/Hero";
import { Container } from "@/components/Container";
import { Main } from "@/components/Main";
import { DarkModeSwitch } from "@/components/DarkModeSwitch";
import { Footer } from "@/components/Footer";
import React, { ReactElement } from "react";

const Index = (): ReactElement => (
  <Container>
    <Hero title={"Meta Search Engine"} subtitle={"for Developers"} />
    {/*<Main>*/}
    <Text>Search box and button</Text>
    {/*</Main>*/}
    <DarkModeSwitch />
    <Footer>
      <Text>A Footer</Text>
    </Footer>
  </Container>
);

export default Index;
