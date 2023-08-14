'use client';

import { SortFilterItem } from '@/components/constants';
import { createUrl } from '@/components/utils';
import { BoltIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import type { ListItem, PathFilterItem } from '.';

// eslint-disable-next-line no-redeclare
function PathFilterItem({ item }: { item: PathFilterItem }) {
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const active = pathname === item.path;
	const newParams = new URLSearchParams('searchParams.toString()');
	const DynamicTag = active ? 'p' : Link;

	newParams.delete('q');

	return (
		<li className="mt-2 flex text-black dark:text-white" key={item.title}>
			<DynamicTag
				href={createUrl(item.path, newParams)}
				className={clsx('flex w-full items-center rounded-lg underline-offset-4 hover:bg-orange-100 dark:hover:text-neutral-100', {
					'underline underline-offset-4': active,
				})}>
				<div className="rounded-lg bg-orange-100 p-2">
					<BoltIcon className="h-6 text-orange-600" />
				</div>
				<div className="pl-2 font-semibold text-neutral-600">{item.title}</div>
			</DynamicTag>
		</li>
	);
}

// eslint-disable-next-line no-redeclare
function SortFilterItem({ item }: { item: SortFilterItem }) {
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const active = searchParams.get('sort') === item.slug;
	const q = searchParams.get('q');
	const href = createUrl(
		pathname,
		new URLSearchParams({
			...(q && { q }),
			...(item.slug && item.slug.length && { sort: item.slug }),
		}),
	);
	const DynamicTag = active ? 'p' : Link;

	return (
		<li className="mt-2 flex text-sm text-black dark:text-white" key={item.title}>
			<DynamicTag
				prefetch={!active ? false : undefined}
				href={href}
				className={clsx('w-full hover:underline hover:underline-offset-4', {
					'underline underline-offset-4': active,
				})}>
				{item.title}
			</DynamicTag>
		</li>
	);
}

export function FilterItem({ item }: { item: ListItem }) {
	return 'path' in item ? <PathFilterItem item={item} /> : <SortFilterItem item={item} />;
}
