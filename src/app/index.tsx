import React from "react";
import {Container, Stack, Box} from "@chakra-ui/react";

import Routes from "./routes";
import Footer from "./screens/Footer";
import Creations from "./screens/Creations";
import Main from "./screens/Main";
/* About Careers Events Products Support Immersive experiences that deliver   */
const App: React.FC = () => {
  return (
    <>
      <Container alignSelf="center" maxWidth="container.xl" paddingX={0}>
        <Stack>
          <Box>{`< Navbar />`}</Box>
          <Box>
            <Routes />
          </Box>
        </Stack>
      </Container>
      <Main />
      <Creations />
      <Footer />
    </>
  );
};

export default App;
