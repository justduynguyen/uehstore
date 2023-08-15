import Price from './price';

const Label = ({ title, amount, currencyCode }: { title: string; amount: string; currencyCode: string; position?: 'bottom' | 'center' }) => {
	return (
		<div className="flex w-full md:px-4 md:pb-4">
			<div className="flex items-center rounded-full border bg-white/70 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white md:p-1">
				<h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">{title}</h3>
				<Price
					className="flex-none rounded-full bg-blue-600 p-2 text-white"
					amount={amount}
					currencyCode={currencyCode}
					currencyCodeClassName="hidden @[275px]/label:inline"
				/>
			</div>
		</div>
	);
};

export default Label;
