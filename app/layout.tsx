import Head from "next/head";
import Navbar from "./Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Nav2 from "./Nav2";
import { Roboto } from "next/font/google";

const roboto = Roboto({
	weight: "400",
	subsets: ["latin"],
	display: "swap",
});

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Renzahuer Goth - Tienda de Arte",
	description:
		"Blog y tienda de arte, artículos hechos a mano por Renzahuer Goth",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			className={roboto.className}
		>
			<Head>
				<link
					rel="preconnect"
					href="https://fonts.googleapis.com"
				/>
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="anonymous"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Poppins&family=Roboto:ital,wght@1,300&display=swap"
					rel="stylesheet"
				/>

				<link
					href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.css"
					rel="stylesheet"
				/>
				<script
					src="https://kit.fontawesome.com/3826585c6c.js"
					crossOrigin="anonymous"
				></script>
			</Head>
			<body>
				<Navbar />
				{children}
				<script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js"></script>
			</body>
		</html>
	);
}
