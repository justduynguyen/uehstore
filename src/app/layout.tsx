import Navbar from '@/components/layout/navbar';
import { NextUIProviders } from '@/components/nextui-providers';
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html className="font-pacifo">
			<body className="h-screen touch-pan-y overflow-auto bg-gradient-to-b from-yellow-200 via-pink-200 to-rose-500 text-black selection:bg-teal-300">
				<NextUIProviders>
					<Navbar />
					{children}
				</NextUIProviders>
			</body>
		</html>
	);
}
