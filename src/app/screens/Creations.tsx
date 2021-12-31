import React from "react";
import {Image, Text, Stack, Container, Heading, Button, SimpleGrid} from "@chakra-ui/react";

interface IGalItems {
  id: number;
  img: string;
  label: string;
  widthM: string;
  widthD: string;
}
const galleryItems = [
  {id: 0, img: "deep-earth", label: "Deep earth", widthM: "50%", widthD: "50%"},
  {id: 1, img: "night-arcade", label: "Night arcade", widthM: "60%", widthD: "60%"},
  {id: 2, img: "soccer-team", label: " Soccer team VR", widthM: "65%", widthD: "65%"},
  {id: 3, img: "grid", label: "The grid", widthM: "40%", widthD: "40%"},
  {id: 4, img: "from-above", label: "From up above VR", widthM: "75%", widthD: "75%"},
  {id: 5, img: "pocket-borealis", label: "Pocket borealis", widthM: "80%", widthD: "80%"},
  {id: 6, img: "curiosity", label: "The curiosity", widthM: "60%", widthD: "75%"},
  {id: 7, img: "fisheye", label: "Make it fisheye", widthM: "60%", widthD: "60%"},
];

const GalleryItem = (props: IGalItems) => {
  const [isHover, setIsHover] = React.useState<boolean>(false);
  const mobileImgSrc = `url(/assets/mobile/image-${props.img}.jpg)`;
  const desktopImgSrc = `url(/assets/desktop/image-${props.img}.jpg)`;

  return (
    <Stack
      _hover={{
        cursor: "pointer",
      }}
      backgroundImage={[mobileImgSrc, desktopImgSrc]}
      backgroundPosition={["50%  50%", "50%  50%"]}
      backgroundRepeat={["no-repeat", "no-repeat"]}
      backgroundSize={["100% 100%", isHover ? "110% auto" : "100% auto"]}
      height={[32, 96]}
      position="relative"
      spacing={0}
      transition="all .3s linear"
      onMouseEnter={() => setIsHover(!isHover)}
      onMouseLeave={() => setIsHover(!isHover)}
    >
      {isHover && (
        <Stack
          backgroundColor="rgba(255,255,255,.6)"
          height="100%"
          position="absolute"
          width="100%"
        />
      )}
      <Stack height="100%" paddingTop={[16, 72]} pl={[6, 8]} position="absolute" width="100%">
        <Text
          color={isHover ? "black" : "white"}
          fontSize={["2xl", "3xl"]}
          lineHeight={["1.1", "1.1"]}
          textShadow={
            isHover
              ? ""
              : "1px 1px 2px rgba(0, 0, 0, 1), -1px -1px 2px rgba(0, 0, 0, 1), 1px -1px 2px rgba(0, 0, 0, 1), -1px 1px 2px rgba(0, 0, 0, 1)"
          }
          textTransform="uppercase"
          width={[props.widthM, props.widthD]}
        >
          {props.label}
        </Text>
      </Stack>
    </Stack>
  );
};

const Gallery = () => {
  return (
    <SimpleGrid columns={[1, 4]} gap={[6, 8]}>
      {galleryItems.map((mi) => (
        <GalleryItem key={mi.id} {...mi} />
      ))}
    </SimpleGrid>
  );
};

const Creations: React.FC = () => {
  return (
    <>
      <Stack alignItems={["center", "flex-start"]} role="contentinfo">
        <Container maxWidth="container.xl">
          <Stack direction={["column", "row"]} spacing={0} wrap="wrap">
            <Heading
              as="h2"
              fontSize={["2xl", "5xl"]}
              fontWeight="300"
              textAlign={["center", "left"]}
              width={["100%", "50%"]}
            >
              Our creations
            </Heading>

            <Stack
              alignItems={["center", "flex-end"]}
              justifyContent="center"
              order={[1, 0]}
              paddingTop={[6, 0]}
              width={["100%", "50%"]}
            >
              <Button justifyContent="center" variant="outline">
                See all
              </Button>
            </Stack>

            <Stack paddingTop={[6, 16]} width="100%">
              <Gallery />
            </Stack>
          </Stack>
        </Container>
      </Stack>
      <Stack h={[16, 32]} />
    </>
  );
};

export default Creations;
