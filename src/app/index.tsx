import React from "react";
import {Container, Stack, Box} from "@chakra-ui/react";

import Routes from "./routes";
import Footer from "./screens/Footer";
/* About Careers Events Products Support Immersive experiences that deliver The leader in interactive VR Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand. Our creations See all Deep earth Night arcade Soccer team VR The grid From up above VR Pocket borealis The curiosity Make it fisheye About Careers Events Products Support © 2021 Loopstudios. All rights reserved. */
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
      <Footer />
    </>
  );
};

export default App;
