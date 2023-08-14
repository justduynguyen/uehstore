import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function OpenSearch({ className }: { className?: string }) {
	return (
		<div className="relative flex h-10 w-10 items-center justify-center rounded-md border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white">
			<MagnifyingGlassIcon className={clsx('h-5 text-neutral-500 transition-all ease-in-out hover:scale-110', className)} />
			{/* {quantity ? (
				<div className="absolute right-0 top-0.5 -mr-2 -mt-2 h-5 w-5 rounded bg-blue-600 text-[11px] font-medium text-white">{quantity}</div>
			) : null} */}
		</div>
	);
}
