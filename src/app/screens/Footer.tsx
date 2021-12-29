import React from "react";
import {Button, Container, Icon, Image, Stack, Text} from "@chakra-ui/react";
import {FaFacebookSquare, FaInstagram, FaPinterest, FaTwitter} from "react-icons/fa";

interface menuComponents {
  menuLabel: string;
  menuItems: {id: number; label: string}[];
}
const menuItems = ["About", "Careers", "Events", "Products", "Support"];
const companyMenuItems = [
  {id: 0, label: "Contact Us"},
  {id: 1, label: "Terms"},
  {id: 2, label: "Privacy"},
];

const CustomMenuItem = (props: menuComponents) => {
  const productMenuList = props.menuItems.map((mi) => (
    <Button key={mi.id} fontSize="sm" variant="footer-link">
      {mi.label}
    </Button>
  ));

  return (
    <Stack alignItems={["center", "flex-start"]} spacing={[0, 4]} width={24}>
      <Button display={["none", "inline-flex"]} fontSize="sm" variant="footer-link">
        {props.menuLabel}
      </Button>
      <Stack alignItems={["flex-start", "flex-start"]} spacing={0}>
        {productMenuList}
      </Stack>
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
    <Icon
      key={it.id}
      _hover={{
        cursor: "pointer",
        borderColor: "white",
        borderBottomWidth: 2,
      }}
      as={it.icon}
      borderBottomWidth={2}
      borderColor="black"
      color="white"
      height={8}
      paddingBottom={2}
      width={8}
    />
  ));

  return <Stack direction="row">{icons}</Stack>;
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
        <Stack direction="row" justifyContent="space-between" paddingBottom={8}>
          <Image alt="logo" height={[20, 8]} src="/logo.svg" width={[40, 32]} />
          <SocialNetworks />
        </Stack>
        <Stack direction="row" justifyContent="space-between">
          <Text color="white" />
          <Text color="primary.700">© 2021 Loopstudios. All rights reserved.</Text>
        </Stack>
      </Container>
    </Stack>
  );
};

export default Footer;
