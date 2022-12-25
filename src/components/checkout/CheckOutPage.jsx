import React from "react";
import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
const CheckOutPage = ({
  cart,
  show_price,
  discount_price,
  link,
  title,
  coupon,
  total_discount,
  discount,
  quantity,
}) => {
  const navigate = useNavigate();
  return (
    <Box w="100%" m="auto">
      <Stack>
        <Button
        borderRadius={"40px"}
          border={"3px solid beige"}
          bg={"black"}
          color={"white"}
          fontWeight={"bold"}
          colorScheme={"none"}
          p="1.5rem"
          _hover={{ bg: "none", color: "black" }}
          onClick={() => navigate(link)}
        >
          {title}
        </Button>
      </Stack>

      <Stack spacing={5} my={"7"} border="3px solid beige">
        <Heading size={"md"} align={"left"} mx={"2"} mt={"2"}>
          ORDER SUMMARY :
        </Heading>
        <Flex lineHeight={"10"}>
          <Box align={"left"} mx={"2"} my={"4"}>
            <Text>Original Price</Text>
            <Text>{cart.length} Items</Text>
            <Text>Qunatity</Text>
            <Text>Discount</Text>
            <Text>Delivery Charges </Text>
            <Text> Grand Total</Text>
            <Badge colorScheme="cyan">( incl.of.tax )</Badge>
          </Box>
          <Box mx={"2"} my={"4"}>
            <Text as="s" color="grey" ml={"8"}>
             : ₹ {show_price}.00
            </Text>
            <Text ml={"8"}>: ₹{discount_price}.00</Text>
            <Text ml={"-6"}>: {quantity}</Text>
            <Text>: ₹{discount}.00</Text>
            <Text>: Free</Text>
            <Text>: ₹{total_discount}.00</Text>
          </Box>
        </Flex>
      </Stack>
      <Stack my={"2"}>{coupon}</Stack>
    </Box>
  );
};

export default CheckOutPage;
