import { HStack, Spacer } from "@chakra-ui/react";

interface Props {
  content: string;
}

function InquiryTail({ content }: Props) {
  return (
    <>
      <HStack mb={2}>
        <>
          <Spacer />
        </>
      </HStack>
      <p>{content}</p>
    </>
  );
}

export default InquiryTail;
