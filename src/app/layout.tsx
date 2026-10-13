import { Navbar } from "@/components/site/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import { QueryProvider } from "@/react-query/provider";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Kyle Parker | Frontend Developer",
	description: "Frontend developer portfolio featuring selected projects and experience.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html className='dark' lang='en'>
			<body className={inter.className}>
				<QueryProvider>
					<Navbar />
					{children}
				</QueryProvider>
			</body>
		</html>
	);
}
