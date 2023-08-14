'use client';
import { Dialog, Transition } from '@headlessui/react';
import { Input } from '@nextui-org/input';
import { Fragment, useEffect, useState } from 'react';
import OpenSearch from './open-search';

export default function SearchModal({ cart }: { cart: null | undefined }) {
	//Cart
	const [isOpen, setIsOpen] = useState(false);
	const [textSearch, setTextSearch] = useState('');
	// const quantityRef = useRef(cart);
	const openCart = () => {
		setTextSearch('');
		setIsOpen(true);
	};
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
	}, [isOpen, cart, textSearch]); //cart?.totalQuantity, quantityRef

	return (
		<>
			<button aria-label="Open cart" onClick={() => openCart()} className="flex items-center rounded-full bg-gray-100">
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
								<Dialog.Panel className="flex h-[66vh] w-2/3 transform flex-col rounded-xl bg-transparent text-left align-middle transition-all">
									<Input
										type="email"
										label="Nhập tìm kiếm..."
										className="mb-4 rounded-xl bg-white p-4 pb-4"
										value={textSearch}
										onChange={e => setTextSearch(e.target.value)}
									/>
									<div className="flex-1 overflow-auto rounded-xl bg-white py-6 pl-4 pr-2">
										<div className="response-list h-full space-y-4 overflow-auto rounded-xl px-2 pt-2">
											{/* {textSearch} */}
											{textSearch.length ? textSearch : <div className="flex h-full w-full items-center justify-center">...</div>}

											{/* <div className="flex h-24 w-full rounded-xl bg-gray-100">1</div>
											<div className="flex h-24 w-full rounded-xl bg-gray-100">1</div>
											<div className="flex h-24 w-full rounded-xl bg-gray-100">1</div>
											<div className="flex h-24 w-full rounded-xl bg-gray-100">1</div>
											<div className="flex h-24 w-full rounded-xl bg-gray-100">1</div>
											<div className="flex h-24 w-full rounded-xl bg-gray-100">1</div>
											<div className="flex h-24 w-full rounded-xl bg-gray-100">1</div>
											<div className="flex h-24 w-full rounded-xl bg-gray-100">1</div> */}
										</div>
									</div>
								</Dialog.Panel>
							</div>
						</div>
					</Transition.Child>
				</Dialog>
			</Transition>
		</>
	);
}
