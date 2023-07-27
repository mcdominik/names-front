import {
  Box,
  Flex,
  HStack,
  Button,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import { useAuth } from "../hooks/useAuth";
import { Path } from "../pages/paths";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useAuthStore } from "../state/authStore";

export default function Nav() {
  const user = useAuthStore((state) => state.user);
  const { logout } = useAuth();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={8} alignItems={"center"} w={"100%"}></HStack>
          <Flex alignItems={"center"}>
            {user ? (
              <>
                <Button
                  colorScheme="blue"
                  variant="outline"
                  size={"sm"}
                  ml={4}
                  href={Path.ADMIN}
                  as={"a"}
                >
                  Admin Panel
                </Button>
                <Button
                  colorScheme="blue"
                  variant="outline"
                  size={"sm"}
                  ml={4}
                  onClick={logout}
                >
                  Logout
                </Button>
                <Button onClick={toggleColorMode}>
                  {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant={"primaryOutlineButton"}
                  size={"sm"}
                  mx={4}
                  as={"a"}
                  href={Path.LOGIN}
                >
                  I am Super User
                </Button>

                <Button onClick={toggleColorMode}>
                  {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                </Button>
              </>
            )}
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
