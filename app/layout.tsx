import type { Metadata } from "next";
import { Inter } from "next/font/google";

import StyledComponentsRegistry from "@/lib/RegistryStyledComponents";
import ThemeProviderContext from "@/lib/ThemeProviderContext";
import Navbar from "@/components/Navbar";

import "@/styles/globals.styled";
import { GlobalStyle } from "@/styles/globals.styled";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Finance app",
	description: "Made by Chudy Mikołaj",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<StyledComponentsRegistry>
					<ThemeProviderContext>
						<Navbar />
						{children}
						<GlobalStyle />
					</ThemeProviderContext>
				</StyledComponentsRegistry>
			</body>
		</html>
	);
}
