'use client';

import { NextUIProvider } from '@nextui-org/react';
import { ReactNode } from 'react';

export function NextUIProviders({ children }: { children: ReactNode }) {
	return (
		<NextUIProvider>
			<main className="flex h-full flex-col">{children}</main>
		</NextUIProvider>
	);
}
