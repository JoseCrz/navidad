import Script from "next/script";
import { ChatShell } from "components/Chat/ChatShell";

export default function ChatSanta() {
  return (
    <ChatShell>
      <div
        data-tf-widget="S0PSZMHM"
        data-tf-opacity="100"
        data-tf-chat
        style={{ width: "100%", height: "100%" }}
      />
      <Script src="//embed.typeform.com/next/embed.js" strategy="lazyOnload" />
    </ChatShell>
  );
}
