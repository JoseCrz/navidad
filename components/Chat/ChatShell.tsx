import { Box } from "@chakra-ui/react";
import { Layout } from "components/Layout";
import { ChatChooser } from "components/Chat/ChatChooser";

type ChatShellProps = {
  children: React.ReactNode;
};

export function ChatShell({ children }: ChatShellProps) {
  return (
    <Layout>
      <Box
        minHeight="calc(100vh - 56px)"
        backgroundColor="brand.cyan"
        backgroundImage="url('/chat-background.svg')"
        backgroundPosition="center"
        backgroundSize="cover"
        position="relative"
        paddingTop="1px"
      >
        <Box maxWidth="487px" mx="auto" height="calc(100vh - 175px)">
          <ChatChooser />
          {children}
        </Box>
      </Box>
    </Layout>
  );
}
