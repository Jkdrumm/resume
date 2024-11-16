import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    // Merge your custom tokens with the base theme tokens
    tokens: {
      colors: {},
      fonts: {
        heading: { value: `'Roboto', sans-serif` },
        body: { value: `'Open Sans', sans-serif` },
      },
    },
    semanticTokens: {
      colors: {
        primary: { value: "{colors.brand.500}" },
        onPrimary: { value: "white" },
      },
    },
  },
});

export default createSystem(config, defaultConfig);
