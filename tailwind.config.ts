import type { Config } from "tailwindcss";
import {nextui} from "@nextui-org/react";
import daisyui from "daisyui"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    backgroundImage: {
      'larandom': "url('/larandom2.webp')",
      'skyweb': "url('/sky2.webp')",
    },
    extend: {
    },
  },
  plugins: [nextui(),
    daisyui,

  ],
};
export default config;
