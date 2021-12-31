import React from "react";
import {Container, Heading, SimpleGrid, Stack, Text} from "@chakra-ui/react";

const Main: React.FC = () => {
  return (
    <>
      <Stack h={[16, 32]} />
      <Stack>
        <Container maxWidth="container.xl">
          <Stack
            alignContent="flex-end"
            backgroundImage={[
              "url('/assets/mobile/image-interactive.jpg')",
              "url('/assets/desktop/image-interactive.jpg')",
            ]}
            backgroundRepeat="no-repeat"
            backgroundSize={["contain", "contain"]}
            height={["lg", "lg"]}
            justifyContent="flex-end"
          >
            <SimpleGrid columns={[1, 4]} gap={[6, 8]}>
              <Stack
                alignItems={["center"]}
                backgroundColor="white"
                gridColumn={[null, "3/-1"]}
                justifyContent="flex-end"
                pb={[2, 0]}
                pl={[0, 16]}
                pt={[0, 16]}
                spacing={[4, 8]}
              >
                <Heading
                  as="h2"
                  fontSize={["2xl", "5xl"]}
                  fontWeight="300"
                  textAlign={["center", "left"]}
                >
                  The leader in interactive VR
                </Heading>
                <Text
                  color="primary.500"
                  fontFamily="Alata"
                  fontSize={["sm", "md"]}
                  letterSpacing={["-.6px", "-.2px"]}
                  lineHeight={["1.8", "1.6"]}
                  textAlign={["center", "left"]}
                  width={["80%", "100%"]}
                >
                  Founded in 2011, Loopstudios has been producing world-class virtual reality
                  projects for some of the best companies around the globe. Our award-winning
                  creations have transformed businesses through digital experiences that bind to
                  their brand.
                </Text>
              </Stack>
            </SimpleGrid>
          </Stack>
        </Container>
      </Stack>
      <Stack h={[16, 32]} />
    </>
  );
};

export default Main;
