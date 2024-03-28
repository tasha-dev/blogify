// Codes by mahdi tasha
// Importing type of configs of tailwindCSS
import type {Config} from "tailwindcss";

// Defining the configs
const config: Config = {
    darkMode: 'class',
    content: [
        './app/*.{ts,tsx,js,jsx}',
        './app/**/*.{ts,tsx,js,jsx}',
        './app/**/**/*.{ts,tsx,js,jsx}',
        './component/*.{ts,tsx,js,jsx}',
        './component/**/*.{ts,tsx,js,jsx}',
        './component/ui/*.{ts,tsx,js,jsx}',
        './component/ui/**/*.{ts,tsx,js,jsx}',
    ],
    theme: {},
    plugins: [],
};

// Exporting the configs
export default config;
