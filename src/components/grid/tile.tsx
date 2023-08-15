/* eslint-disable jsx-a11y/alt-text */
import clsx from 'clsx';
import Image from 'next/image';
import { ComponentProps } from 'react';

export function GridTileImage({
	isInteractive = true,
	...props
}: {
	isInteractive?: boolean;
	active?: boolean;
	label?: {
		title: string;
		amount: string;
		currencyCode: string;
		position?: 'bottom' | 'center';
	};
} & ComponentProps<typeof Image>) {
	return (
		// <div
		// 	className={clsx('flex h-full w-full overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black', {
		// 		'border-2 border-blue-600': active,
		// 		'border-neutral-200 dark:border-neutral-800': !active,
		// 	})}>
		// 	{props.src ? (
		// 		// eslint-disable-next-line jsx-a11y/alt-text -- `alt` is inherited from `props`, which is being enforced with TypeScript
		// 		<div className="flex h-full w-full bg-black">
		// 			1
		// 			{/* <Image
		// 				alt=""
		// 				fill
		// 				className={clsx({
		// 					'transition duration-300 ease-in-out group-hover:scale-105': isInteractive,
		// 				})}
		// 				{...props}
		// 			/> */}
		// 		</div>
		// 	) : null}
		// 	{label ? <Label title={label.title} amount={label.amount} currencyCode={label.currencyCode} position={label.position} /> : null}
		// </div>
		<div className="flex h-full w-full flex-col overflow-hidden rounded-lg">
			<div className="relative flex-1">
				<Image
					className={clsx('rounded-lg object-contain', {
						'transition duration-300 ease-in-out group-hover:scale-105': isInteractive,
					})}
					{...props}
				/>
			</div>
			<div className="p-1 text-sm font-semibold">
				<div className="product__name leading-1 line-clamp-2 tracking-tight text-neutral-700">Sản phẩm số 1 thị trường</div>
				<div className="flex h-8 flex-row items-center justify-between text-white">
					<div className="product__price leading-1 rounded-full bg-red-500 px-2 py-1 tracking-tight">1.000.000đ</div>
					<div className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-500">+</div>
				</div>
			</div>
		</div>
	);
}
