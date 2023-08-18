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
		// bg-gradient-to-br from-rose-300 to-rose-500 shadow-custom1
		<div className="flex h-full w-full flex-col overflow-hidden rounded-lg border bg-white shadow-md">
			<div className="flex flex-1 bg-white p-2">
				<div className="shadow-custom1 relative flex-1 overflow-hidden rounded-xl bg-gradient-to-br from-rose-300 to-rose-400">
					<Image
						className={clsx('rounded-lg object-contain', {
							'transition duration-300 ease-in-out group-hover:scale-105': isInteractive,
						})}
						{...props}
					/>
				</div>
			</div>

			<div className="font-comfortaa text bg-white p-2  font-semibold">
				<div className="product__name line-clamp-2 w-full  tracking-tight">Sản phẩm số 1 thị trường</div>
				<div className="flex h-8 flex-row items-end justify-between">
					<div className="product__price inline-block rounded-full align-bottom tracking-tight">1.000.000đ</div>
					<div className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-500">+</div>
				</div>
			</div>
		</div>
	);
}
