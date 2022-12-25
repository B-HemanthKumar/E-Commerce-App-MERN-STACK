import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  useColorModeValue,
  Link,
  Spinner,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
//import swal from "sweetalert";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { login } from "../redux/AuthReducer/action";
//import { LOGIN_S } from "../redux/AuthReducer/actionType";
import Navbar from "../components/Navbar/Navbar";
import { ViewIcon } from "@chakra-ui/icons";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  // const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const loading = useSelector((store) => store.AuthReducer.isLoading);
  const pathRoute = location.state?.from?.pathname || "/";
  const [eye, setEye] = useState(false);
  const handleEye = () => {
    setEye((prev) => !prev);
  };
  const loginHandler = () => {
    if (email === "hk1@gmail.com" && password === "*111111#") {
      const params = {
        email,
        password,
      };
      dispatch(login(params, toast)).then((res) => {
        navigate("/admin", { replace: true });
      });
    } else if (email && password) {
      const params = {
        email,
        password,
      };
      dispatch(login(params, toast)).then((res) => {
        navigate(pathRoute, { replace: true });
      });
    }
  };

  return (
    <>
      <Navbar />
      <Flex minH={"50vh"}  align={"center"} justify={"center"} bg={useColorModeValue("gray.50", "gray.800")} >
        <Stack spacing={0} mx={"auto"} /*maxW={"lg"}*/ py={12} px={6}>
          <Stack align={"center"}>
            <Heading  fontSize={"4xl"} textTransform={"uppercase"}>
              Log In
            </Heading>
          </Stack>
          <Box rounded={"lg"} boxShadow={"lg"} p={8}>
            <Stack spacing={2}>
              <FormControl id="username" isRequired>
                <FormLabel>Email :</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password :</FormLabel>
                <InputGroup>
                  <Input
                    type={eye ? "text" : "password"}
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputRightElement h={"full"}>
                    <Button variant={"ghost"} onClick={handleEye}>
                      <ViewIcon />
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={3} align={"center"}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Link color={"gray.500"}> Forgot password ? </Link>
                </Stack>
                <Button
                  borderRadius={"40px"}
                  width={"6rem"}
                  align={"center"}
                  bg={"gray"}
                  color={"whitesmoke"}
                  _hover={{
                    bg: "none",
                    color: "black",
                    border: "1px solid black",
                  }}
                  onClick={loginHandler}
                >
                  {loading ? <Spinner /> : "Log In"}
                </Button>
              </Stack>
              <Stack pt={2.5}>
                <Text align={"center"}>
                  <RouterLink to="/register" color={"blue.400"}>
                  Don't have an account ? Sign up
                  </RouterLink>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
};

export default Login;

// swal({
//   text: "Login Success",
//   icon: "success",
// });
