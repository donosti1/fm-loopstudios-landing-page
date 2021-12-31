import React from "react";
import {Container, Heading, SimpleGrid, Stack, Text} from "@chakra-ui/react";

import Header from "./components/Header";

const Hero: React.FC = () => {
  return (
    <Stack
      alignContent="flex-end"
      alignItems="center"
      backgroundImage={[
        "url('/assets/mobile/image-hero.jpg')",
        "url('/assets/desktop/image-hero.jpg')",
      ]}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      height="100vh"
      justifyContent="space-between"
      paddingBottom={[0, 32]}
      paddingTop={[0, 16]}
    >
      <Header />
      <Stack paddingTop={[40, 0]}>
        <Container maxWidth={["container.sm", "container.xl"]}>
          <Stack borderColor="white" borderWidth={2} padding={[4, 8]} width={["100%", "54%"]}>
            <Heading as="h1" fontSize={["4xl", "6xl"]} fontWeight="300" lineHeight={["1.0", "1"]}>
              Immersive experiences that deliver
            </Heading>
          </Stack>
        </Container>
      </Stack>
    </Stack>
  );
};

export default Hero;
