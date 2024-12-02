import "@/styles/globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Gamify Learning",
	description: "Gamify Learning",
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
