import { Box } from "@chakra-ui/react";

export function GenderTile(response: any) {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      margin={"0.5em"}
      padding={"1em"}
    >
      {response.data.genderizeApiResponse.data.gender.gender} :{" "}
      {response.data.genderizeApiResponse.data.gender.probability * 100}%
    </Box>
  );
}
