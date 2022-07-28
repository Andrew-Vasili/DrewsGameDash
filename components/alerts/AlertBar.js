import { Alert, Center, Stack, VStack, Box, HStack, IconButton, CloseIcon, Text } from 'native-base';
import { GiTrophy } from "react-icons/gi";


export default function AlertBar({ status, achiement, team }) {

  const statusArray = [{
    status: "success",
    title: "Selection successfully moved!",
    bodyText: "Hello World"
  }, {
    status: "error",
    title: "Please try again later!",
    bodyText: "I love life"
  }, {
    status: "info",
    title: "We are going live in July!",
    bodyText: "Info baby"
  }, {
    status: "warning",
    title: "Poor internet connection.",
    bodyText: ""
  }];

  console.log(status)

  return (
    <Center>
      <Alert w="100%" status={status}>
        <VStack space={2} flexShrink={1} w="100%">
          <HStack flexShrink={1} space={2} justifyContent="space-between">
            <HStack space={2} flexShrink={1}>
              <GiTrophy
                size={30}
              />
              <Text fontSize="md" fontWeight="medium" _dark={{
                color: "coolGray.800"
              }}>
                {achiement} - {team}
              </Text>
              <Box _text={{
                textAlign: "center"
              }} _dark={{
                _text: {
                  color: "coolGray.600"
                }
              }}>
              </Box>
            </HStack>
          </HStack>
        </VStack>
      </Alert>
    </Center>)
}
