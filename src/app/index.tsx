import React from "react";
import {Container, Stack, Box} from "@chakra-ui/react";

import Routes from "./routes";
import Footer from "./screens/Footer";
import Creations from "./screens/Creations";
import Main from "./screens/Main";
import Hero from "./screens/Hero";
/*     */
const App: React.FC = () => {
  return (
    <>
      <Hero />
      <Main />
      <Creations />
      <Footer />
    </>
  );
};

export default App;
