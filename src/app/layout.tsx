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
			<body className="touch-pan-y overflow-auto bg-white text-black">
				<NextUIProviders>
					<Navbar />
					{children}
				</NextUIProviders>
			</body>
		</html>
	);
}
