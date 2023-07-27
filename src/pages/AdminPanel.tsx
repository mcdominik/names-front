import { Button, Text, Container, Center } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Path } from "./paths";
import Inquiries from "../compontents/AdminPanel/Inquiries";

export function AdminPanel() {
  const [history, setHistory] = useState();

  const getInquiresHistory = async () => {
    const response = await axios.get("/inquiries");
    setHistory(response.data);
  };

  useEffect(() => {
    getInquiresHistory();
  }, []);

  return (
    <Container padding={16} h="100vh" w="100vw" justifyContent={"center"}>
      <Center>
        <Button
          colorScheme="blue"
          variant="outline"
          href={Path.HOME}
          as={"a"}
          mb={5}
        >
          main page
        </Button>
      </Center>
      <Text padding={2}>history: </Text>
      {history && <Inquiries inquiries={history} />}
    </Container>
  );
}
