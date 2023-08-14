// 'use client';

// import { useRouter, useSearchParams } from 'next/navigation';
// import { FormEvent, useEffect, useState } from 'react';

// import { createUrl } from '@/components/utils';
// import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

// export default function Search() {
// 	const router = useRouter();
// 	const searchParams = useSearchParams();
// 	const [searchValue, setSearchValue] = useState('');

// 	useEffect(() => {
// 		setSearchValue(searchParams?.get('q') || '');
// 	}, [searchParams, setSearchValue]);

// 	function onSubmit(e: FormEvent<HTMLFormElement>) {
// 		e.preventDefault();

// 		const val = e.target as HTMLFormElement;
// 		const search = val.search as HTMLInputElement;
// 		const newParams = new URLSearchParams(searchParams.toString());

// 		if (search.value) {
// 			newParams.set('q', search.value);
// 		} else {
// 			newParams.delete('q');
// 		}

// 		router.push(createUrl('/search', newParams));
// 	}

// 	return (
// 		<form onSubmit={onSubmit} className="w-max-[550px] relative w-full lg:w-80 xl:w-full">
// 			<input
// 				type="text"
// 				name="search"
// 				placeholder="Search for products..."
// 				autoComplete="off"
// 				value={searchValue}
// 				onChange={e => setSearchValue(e.target.value)}
// 				className="w-full rounded-lg border bg-white px-4 py-2 text-sm text-black placeholder:text-neutral-500 dark:border-neutral-800 dark:bg-transparent dark:text-white dark:placeholder:text-neutral-400"
// 			/>
// 			<div className="absolute right-0 top-0 mr-3 flex h-full items-center">
// 				<MagnifyingGlassIcon className="h-4" />
// 			</div>
// 		</form>
// 	);
// }
'use client';

// import Price from 'components/price';
// import { DEFAULT_OPTION } from 'lib/constants';
// import type { Cart } from 'lib/shopify/types';
// import { createUrl } from 'lib/utils';
import { Fragment, useEffect, useRef, useState } from 'react';
// import EditItemQuantityButton from './edit-item-quantity-button';
import { Dialog, Transition } from '@headlessui/react';
import { Input } from '@nextui-org/input';
import OpenSearch from './open-search';
// type MerchandiseSearchParams = {
// 	[key: string]: string;
// };

export default function SearchModal({ cart }: { cart: null | undefined }) {
	//Cart
	const [isOpen, setIsOpen] = useState(false);
	const quantityRef = useRef(cart);
	const openCart = () => setIsOpen(true);
	const closeCart = () => setIsOpen(false);

	useEffect(() => {
		// // Open cart modal when quantity changes.
		// if (cart?.totalQuantity !== quantityRef.current) {
		// 	// But only if it's not already open (quantity also changes when editing items in cart).
		// 	if (!isOpen) {
		// 		setIsOpen(true);
		// 	}
		// 	// Always update the quantity reference
		// 	quantityRef.current = cart?.totalQuantity;
		// }
	}, [isOpen, cart, quantityRef]); //cart?.totalQuantity

	return (
		<>
			<button aria-label="Open cart" onClick={openCart} className="flex items-center rounded-full bg-gray-100">
				<div className="w-32 text-neutral-400">Input...</div>
				<OpenSearch />
			</button>
			<Transition as={Fragment} show={isOpen} leave="transform duration-[200ms] transition">
				<Dialog onClose={closeCart} className="relative z-50">
					<Transition.Child
						as={Fragment}
						enter="transition-all ease-in-out duration-200"
						enterFrom="opacity-0 backdrop-blur-none"
						enterTo="opacity-100 backdrop-blur-[.5px]"
						leave="transition-all ease-in-out duration-200"
						leaveFrom="opacity-100 backdrop-blur-[.5px]"
						leaveTo="opacity-0 backdrop-blur-none">
						<div className="fixed inset-0 bg-black/30" aria-hidden="true" />
					</Transition.Child>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0 scale-95"
						enterTo="opacity-100 scale-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100 scale-100"
						leaveTo="opacity-0 scale-95">
						<div className="fixed inset-0">
							<div className="flex min-h-full items-center justify-center p-4 text-center">
								<Dialog.Panel className="h-[66vh] w-2/3 transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
									{/* <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
										Payment successful
									</Dialog.Title> */}
									<Input type="email" label="Email" className="border-b border-gray-200 pb-4" />
									<div className="response-list h-full space-y-4 overflow-auto pt-4">
										<div className="flex h-24 w-full rounded-xl bg-gray-200">1</div>
										<div className="flex h-24 w-full rounded-xl bg-gray-200">1</div>
										<div className="flex h-24 w-full rounded-xl bg-gray-200">1</div>
										<div className="flex h-24 w-full rounded-xl bg-gray-200">1</div>
										<div className="flex h-24 w-full rounded-xl bg-gray-200">1</div>
										<div className="flex h-24 w-full rounded-xl bg-gray-200">1</div>
										<div className="flex h-24 w-full rounded-xl bg-gray-200">1</div>
										<div className="flex h-24 w-full rounded-xl bg-gray-200">1</div>
										<div className="flex h-24 w-full rounded-xl bg-gray-200">1</div>
										<div className="flex h-24 w-full rounded-xl bg-gray-200">1</div>
										<div className="flex h-24 w-full rounded-xl bg-gray-200">1</div>
										<div className="flex h-24 w-full rounded-xl bg-gray-200">1</div>
										<div className="flex h-24 w-full rounded-xl bg-gray-200">1</div>
									</div>

									{/* <div className="mt-2">
										<p className="text-sm text-gray-500">
											Your payment has been successfully submitted. We’ve sent you an email with all of the details of your order.
										</p>
									</div>

									<div className="mt-4">
										<button
											type="button"
											className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
											onClick={closeCart}>
											Got it, thanks!
										</button>
									</div> */}
								</Dialog.Panel>
							</div>
						</div>
					</Transition.Child>
				</Dialog>
			</Transition>
		</>
	);
}
