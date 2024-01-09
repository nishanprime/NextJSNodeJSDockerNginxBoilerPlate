import { CircularProgress, Flex, Icon, Progress, Text } from "@chakra-ui/react";
import { Calculator } from "lucide-react";

const Loader = ({
  savingsLoader = false,
  fullPage = false,
}: {
  savingsLoader?: boolean;
  fullPage?: boolean;
}) => {
  if (savingsLoader) {
    return (
      <Flex
        w="full"
        h="full"
        flexDirection="column"
        align="center"
        justify="center"
      >
        <Icon as={Calculator} fontSize="6xl" />
        <Progress
          isIndeterminate
          colorScheme="brand.primaryScheme"
          size="sm"
          w="full"
          maxW="300px"
          mt="5"
          borderRadius="full"
        />

        <Text mt="5" color="brand.lightText">
          Calculating your potential savings...
        </Text>
      </Flex>
    );
  }

  if (fullPage) {
    return (
      <Flex
        w="full"
        h="100vh"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <CircularProgress
          isIndeterminate
          color="brand.primary"
          size="40px"
          thickness="4px"
        />
      </Flex>
    );
  }

  return <div>Loader</div>;
};

export default Loader;
