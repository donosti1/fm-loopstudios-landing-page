import React from "react";
import {Button, Container, Grid, Icon, Image, Stack, Text} from "@chakra-ui/react";
import {FaFacebookSquare, FaInstagram, FaPinterest, FaTwitter} from "react-icons/fa";

const menuItems = ["About", "Careers", "Events", "Products", "Support"];

const CustomMenuItem = () => {
  const productMenuList = menuItems.map((mi) => (
    <Button
      key={mi}
      fontSize="sm"
      sx={{
        ":hover::before": {
          content: "''",
          display: "block",
          position: "absolute",
          bottom: "0",
          width: "50%",
          left: "25%",
          borderBottom: "2px solid white",
        },
        "::before": {
          content: "''",
          display: "block",
          position: "absolute",
          bottom: "0",
          width: "0%",
          left: "50%",
          borderBottom: "2px solid white",
          transition: "all .2s cubic-bezier(0.68, -0.55, 0.27, 1.55)",
        },
      }}
      variant="footer-link"
    >
      {mi}
    </Button>
  ));

  return (
    <Stack direction={["column", "row"]} spacing={[2, 8]}>
      {productMenuList}
    </Stack>
  );
};
const SocialNetworks = () => {
  const item = [
    {id: 0, icon: FaFacebookSquare},
    {id: 1, icon: FaTwitter},
    {id: 2, icon: FaPinterest},
    {id: 3, icon: FaInstagram},
  ];
  const icons = item.map((it) => (
    <Button
      key={it.id}
      sx={{
        ":hover::before": {
          content: "''",
          display: "block",
          position: "absolute",
          bottom: "0",
          width: "80%",
          left: "10%",
          borderBottom: "2px solid white",
        },
        "::before": {
          content: "''",
          display: "block",
          position: "absolute",
          bottom: "0",
          width: "0%",
          left: "50%",
          borderBottom: "2px solid white",
          transition: "all .25s cubic-bezier(0.68, -0.55, 0.27, 1.55)",
        },
      }}
      variant="unstyled"
    >
      <Icon
        as={it.icon}
        borderBottomWidth={2}
        borderColor="black"
        color="white"
        height={8}
        width={8}
      />
    </Button>
  ));

  return (
    <Stack direction="row" justifyContent={["center", "flex-end"]} order={[1, 0]}>
      {icons}
    </Stack>
  );
};

const Footer = () => {
  return (
    <Stack
      alignItems={["center", "flex-start"]}
      backgroundColor="black"
      paddingBottom={[16, 16]}
      paddingTop={[16, 8]}
      role="contentinfo"
    >
      <Container maxWidth="container.xl">
        <Grid rowGap={[4, 8]} templateColumns={["repeat(1,1fr)", "repeat(2,1fr)"]} width="100%">
          <Stack alignItems={["center", "flex-start"]}>
            <Image alt="logo" height={[6, 8]} src="/assets/logo.svg" width={[32, 40]} />
          </Stack>
          <SocialNetworks />
          <CustomMenuItem />
          <Text
            color="primary.500"
            fontFamily="Alata"
            order={[1, 0]}
            textAlign={["center", "right"]}
          >
            © 2021 Loopstudios. All rights reserved.
          </Text>
        </Grid>
      </Container>
    </Stack>
  );
};

export default Footer;
