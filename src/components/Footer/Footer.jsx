import {
  Avatar,
  Box,
  Flex,
  Heading,
  Icon,
  // Spacer,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import portfolio from "../../img/portfolio.png";
import { BsGithub, BsLinkedin } from "react-icons/bs";
// import { GiCondorEmblem } from "react-icons/gi";
import { Link } from "react-router-dom";
const Footer = () => {
  const [isLargerThan] = useMediaQuery("(min-width: 768px)");
  const [isSmallerThan] = useMediaQuery("(min-width: 468px)");

  return (
    <div className="Footer">
      <Box
        bg="gray"
        color="whitesmoke"
        height={isSmallerThan ? "50vh" : "50vh"}
        pt="3rem"
        lineHeight="2rem"
      >
        <Flex
          justify={"space-evenly"}
          width={["100%", "100%", "100%", "100%"]}
          textAlign={isSmallerThan ? "left" : "center"}
          fontSize={["sm", "md", "md", "md"]}
          flexDirection={isSmallerThan ? "row" : "column"}
        >
          <Box as={Flex} flexDirection="column">
            <Heading>Product</Heading>
            <Text as={Link} to="/allproducts?gender=MEN">Men's Collection</Text>
            <Text as={Link} to="/allproducts?gender=WOMEN">Women's Collection</Text>
            <Text as={Link} to="/allproducts?category=shoes" >Shoe's Collection</Text>
            <Text as={Link} to="/allproducts?category=clothes">Clothes's Collection</Text>
          </Box>

          {isSmallerThan ? (
            <Box>
              <Heading>Support</Heading>
              <Text>Help</Text>
              <Text>Shipping</Text> 
              <Text>Order Tracking</Text>
              <Text>Customer Service</Text>
              <Text>Return & Exchange</Text>
            </Box>
          ) : null}

          {isLargerThan ? (
            <Box>
              <Heading>Company Info</Heading>
              <Text>Careers</Text>
              <Text>About Us</Text>
            </Box>
          ) : null}
          <Box mt="1rem" display={"flex"} gap="1rem" justifyContent={"center"}>
            {/* <a
              href="https://www.linkedin.com/in/naresh-rajput/"
              target={"_blank"}
              rel="noreferrer"
            >
              <Icon w={9} h={9} my="1rem" as={BsLinkedin} />
            </a> */}
            <a
              href="https://github.com/B-HemanthKumar"
              target={"_blank"}
              rel="noreferrer"
            >
              <Icon w={9} h={9} my="1rem" as={BsGithub} />
            </a>
            {/* <a
              href="https://nmewada01.github.io/portfolio/"
              target={"_blank"}
              rel="noreferrer"
            >
              <Avatar w={10} h={10} my="1rem" bg="white" src={portfolio} />
            </a> */}
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default Footer;
