import type { Metadata } from "next";
import { Provider } from "@/components/ui/provider";
import { Box } from "@chakra-ui/react";

export const metadata: Metadata = {
  title: "Joshua Drumm's Resume",
  description: "Created with Next.js and Chakra UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider>
          <Box
            position="fixed"
            w="100%"
            h="100%"
            bgSize="250px"
            bgRepeat="repeat"
            bgImage="url('/static.png')"
            opacity="0.06"
            pointerEvents="none"
          />
          {children}
        </Provider>
      </body>
    </html>
  );
}
