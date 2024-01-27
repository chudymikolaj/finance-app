import type { Metadata } from "next";
import { Inter } from "next/font/google";

import StyledComponentsRegistry from "@/lib/RegistryStyledComponents";
import ThemeProviderContext from "@/lib/ThemeProviderContext";
import Navbar from "@/components/Navbar";

import "@/styles/globals.styled";
import { GlobalStyle } from "@/styles/globals.styled";
import { NextAuthProvider } from "@/lib/NextAuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Finance app",
	description: "Made by Chudy Mikołaj",
};

type Props = {
	children?: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<StyledComponentsRegistry>
					<ThemeProviderContext>
						<NextAuthProvider>
							<Navbar />
							{children}
							<GlobalStyle />
						</NextAuthProvider>
					</ThemeProviderContext>
				</StyledComponentsRegistry>
			</body>
		</html>
	);
}
