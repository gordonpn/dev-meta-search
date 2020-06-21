import { Hero } from "@/components/Hero";
import { Container } from "@/components/Container";
import { DarkModeSwitch } from "@/components/DarkModeSwitch";
import Footer from "@/components/Footer";
import React, { ReactElement } from "react";
import SearchButton from "@/components/SearchButton";
import SearchBox from "@/components/SearchBox";
import Description from "@/components/Description";

const Index = (): ReactElement => (
  <Container>
    <Hero title={"Meta Search Engine"} subtitle={"for Developers"} />
    <SearchBox />
    <SearchButton />
    <Description />
    <DarkModeSwitch />
    <Footer />
  </Container>
);

export default Index;
