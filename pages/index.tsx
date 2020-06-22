import { Hero } from "@/components/Hero";
import { Container } from "@/components/Container";
import { DarkModeSwitch } from "@/components/DarkModeSwitch";
import Footer from "@/components/Footer";
import React, { ReactElement } from "react";
import Description from "@/components/Description";
import Search from "@/components/Search";

const Index = (): ReactElement => (
  <Container>
    <Hero title={"Meta Search Engine"} subtitle={"for Developers"} />
    <Search />
    <Description />
    <DarkModeSwitch />
    <Footer />
  </Container>
);

export default Index;
