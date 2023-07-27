import { Box, Grid } from "@chakra-ui/react";
import { Inquiry } from "../../models/inquiry/inquiry";
import InquiryTile from "./InquiryTile";

interface Props {
  inquiries: Inquiry[];
}

function Inquiries({ inquiries }: Props) {
  return (
    <Box overflow="scroll" maxH="58vh">
      <Grid
        templateColumns={{
          sm: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
          xl: "repeat(4, 1fr)",
        }}
        gap={4}
      >
        {inquiries?.map((inquiry) => (
          <Box
            key={inquiry._id}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            padding="1em"
          >
            <InquiryTile content={inquiry.name} />
          </Box>
        ))}
      </Grid>
    </Box>
  );
}

export default Inquiries;
