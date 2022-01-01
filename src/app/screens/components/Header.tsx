import React, {useEffect, useState} from "react";
import {
  Button,
  Container,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Icon,
  Image,
  Link,
  Stack,
  useDisclosure,
  DrawerCloseButton,
} from "@chakra-ui/react";
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";

const Header = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const btnRef = React.useRef(null);
  const menuItems = [
    {id: 0, label: "About "},
    {id: 1, label: "Careers "},
    {id: 2, label: "Events"},
    {id: 3, label: "Products"},
    {id: 4, label: "Support"},
  ];

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;

    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, {passive: true});

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const menu = menuItems.map((mi) => (
    <Button
      key={mi.id}
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
      variant="header-link"
    >
      {mi.label}
    </Button>
  ));

  return (
    <>
      <Container
        backgroundColor={scrollPosition > 64 ? "black" : "transparent"}
        maxWidth={["container.sm", "container.xl"]}
        paddingBottom={[scrollPosition > 64 ? 2 : 0, 0]}
        paddingTop={[scrollPosition > 64 ? 2 : 6, 0]}
        position={["fixed", "relative"]}
        zIndex="100"
      >
        <Stack
          alignItems="center"
          as="header"
          className="Header"
          direction="row"
          justifyContent="space-between"
          role="navigation"
        >
          <Link>
            <Image alt="logo" height={[6, 8]} src="/assets/logo.svg" width={[32, 40]} />
          </Link>
          <Stack direction="row" display={["none", "flex"]} spacing={[2, 2]}>
            {menu}
          </Stack>
          <Button
            ref={btnRef}
            display={["flex", "none"]}
            variant="header-menu-button"
            zIndex="1000"
            onClick={isOpen ? onClose : onOpen}
          >
            <Icon as={AiOutlineMenu} color="white" h={6} w={6} />
          </Button>
          <Drawer
            finalFocusRef={btnRef}
            isOpen={isOpen}
            placement="left"
            size="full"
            onClose={onClose}
          >
            <DrawerOverlay />
            <DrawerContent bgColor="black">
              <DrawerBody px={0} py={0}>
                <Container
                  height="100%"
                  maxWidth="container.sm"
                  paddingBottom={scrollPosition > 64 ? 2 : 0}
                  paddingTop={scrollPosition > 64 ? 2 : 6}
                >
                  <Stack alignItems="flex-start" height="100%" justifyContent="space-between">
                    <Stack
                      alignItems="center"
                      direction="row"
                      justifyContent="space-between"
                      width="100%"
                    >
                      <Link>
                        <Image alt="logo" height={[6, 8]} src="/assets/logo.svg" width={[32, 40]} />
                      </Link>
                      <Button
                        ref={btnRef}
                        display={["flex", "none"]}
                        variant="header-menu-button"
                        zIndex="1000"
                        onClick={isOpen ? onClose : onOpen}
                      >
                        <Icon as={AiOutlineClose} color="white" h={6} w={6} />
                      </Button>
                    </Stack>
                    <Stack
                      alignItems="flex-start"
                      flex={1}
                      justifyContent="center"
                      spacing={0}
                      width="100%"
                    >
                      {menuItems.map((mi) => (
                        <Button key={mi.id} variant="mobile-menu-link">
                          {mi.label}
                        </Button>
                      ))}
                    </Stack>
                  </Stack>
                </Container>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Stack>
      </Container>
    </>
  );
};

export default Header;
