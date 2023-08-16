'use client';

import { NextUIProvider } from '@nextui-org/react';
import { ReactNode } from 'react';

export function NextUIProviders({ children }: { children: ReactNode }) {
	return (
		<NextUIProvider>
			<main className="h-screen flex-col overflow-auto">{children}</main>
		</NextUIProvider>
	);
}
