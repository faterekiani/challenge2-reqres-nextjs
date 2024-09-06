import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./lib/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			colors: {
				primary: {
					100: "#F1EEFE",
					200: "#E4DDFD",
					300: "#D6CCFD",
					400: "#C8BBFC",
					500: "#BBABFB",
					600: "#AD9AFA",
					700: "#A08AFA",
					800: "#9379F9",
					900: "#8669F8",
					950: "#7A5AF8", //primary
				},
				secondary: "#0D121C",
			},
		},
	},
	plugins: [],
};
export default config;
