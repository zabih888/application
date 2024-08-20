import { Paper, TextInput, PasswordInput, Checkbox, Button, Title, Text, Anchor, Container, Flex } from "@mantine/core";
import Form from "./form";

const AuthenticationImage = () => {
  return (
    <Paper bg="gray.2" h="100vh">
      <Container h="100%" size={"sm"}>
        <Flex direction={"column"} justify={"center"} h="100%">
          <Paper radius={"lg"} p={30} shadow="xl" withBorder={true}>
            <Title order={2} ta="center" mt="md" mb={50}>
              Welcome back
            </Title>

            <Form />
            <Button fullWidth mt="xs" variant="subtle" size="md">
              {`Don't have an account?`}
            </Button>
          </Paper>
        </Flex>
      </Container>
    </Paper>
  );
};
export default AuthenticationImage;
