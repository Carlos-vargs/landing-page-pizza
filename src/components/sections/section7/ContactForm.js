import { Flex, Input, Textarea } from "@chakra-ui/react";

export default function ContactForm({
  onChange,
  onSubmit,
  formValues,
  children,
}) {
  return (
    <Flex as="form" onSubmit={onSubmit} flexDirection="column" mt="46px">
      <Flex gridGap="20px">
        <Input
          placeholder="Your name"
          size="lg"
          required
          onChange={onChange}
          autoComplete={"name"}
          value={formValues.name}
          name={"name"}
        />
        <Input
          placeholder="Email address"
          size="lg"
          required
          onChange={onChange}
          autoComplete={"email"}
          value={formValues.email}
          name={"email"}
        />
      </Flex>
      <Textarea
        mt="20px"
        placeholder="Enter your message"
        required
        onChange={onChange}
        value={formValues.message}
        name={"message"}
      />
      {children}
    </Flex>
  );
}
