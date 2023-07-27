import { Flex, Input, Button, VStack, HStack, Spinner } from "@chakra-ui/react";
import { NationalityChart } from "../compontents/Home/NationalityChart";
import axios from "axios";
import { useEffect, useState } from "react";
import { GenderTile } from "../compontents/Home/GenderTile";
import { useToast } from "@chakra-ui/react";
import { useClipboard } from "@chakra-ui/react";

export function Home() {
  const [input, setInput] = useState();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const { onCopy, setValue, hasCopied } = useClipboard("");

  const getInformationsFromName = async () => {
    setLoading(true);
    const response = await axios.get(`api-proxy/${input}`).catch((e) => {
      toast.closeAll();
      toast({
        title: e.message,
        status: "error",
      });
    });
    setData(response?.data);
    setLoading(false);
    const stringifiedData = JSON.stringify(response?.data);
    setValue(stringifiedData);
  };

  function handleInput(event: any) {
    const phrase = event.target.value;
    const onlyLatin = event.target.value.replace(/[^a-z]/gi, "");
    if (onlyLatin != phrase) {
      toast.closeAll();
      toast({
        title: "only latin chars are allowed",
        status: "error",
      });
      return;
    }
    setInput(onlyLatin);
  }

  useEffect(() => {}, [data]);

  return (
    <Flex padding={16} h="100vh" w="100vw" justifyContent={"center"}>
      <VStack w={["100%", "100%", "50%"]}>
        <HStack>
          <Flex>
            <Input onChange={handleInput} placeholder="search..." />
          </Flex>
          <Button
            mx={4}
            colorScheme="blue"
            variant="outline"
            onClick={getInformationsFromName}
          >
            {loading ? <Spinner /> : "check"}
          </Button>
        </HStack>
        {data && <NationalityChart data={data} />}
        {data && <GenderTile data={data} />}
        {data && (
          <Button onClick={onCopy}>{hasCopied ? "Copied!" : "Copy"}</Button>
        )}
      </VStack>
    </Flex>
  );
}
