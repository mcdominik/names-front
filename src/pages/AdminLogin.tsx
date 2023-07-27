import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Path } from "../pages/paths";
import { useAuth } from "../hooks/useAuth";

export default function SimpleCard() {
  const { formLoginMutation } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let user: string | null = null;
  useEffect(() => {
    if (user) {
      navigate(Path.ADMIN);
    }
  });

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const login = () => {
    formLoginMutation.mutate({ email, password });
  };

  return (
    <>
      <Flex
        h="100vh"
        justify="center"
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Sign In as Super User</Heading>
            <Text color="muted">
              <Button as={"a"} href={"/"} variant="link" colorScheme="blue">
                I am not Super User
              </Button>
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="username">
                <FormLabel>Username</FormLabel>
                <Input type="username" onChange={handleEmail} />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" onChange={handlePassword} />
              </FormControl>
              <Stack spacing={10}>
                <Button colorScheme="blue" variant="outline" onClick={login}>
                  Sign In
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
}
