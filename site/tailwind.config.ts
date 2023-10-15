import defaultTheme from "tailwindcss/defaultTheme";
import type { Config } from 'tailwindcss';

export const TailwindConfig: Config = {
	content: ['./src/**/*.{js,ts,md,jsx,tsx,mdx}'],
	theme: {
		extend: {
			sans: [...defaultTheme.fontFamily.sans],
		},
	},
};

export default TailwindConfig;
