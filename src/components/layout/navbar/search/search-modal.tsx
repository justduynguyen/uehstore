'use client';
import NoData from '@/components/no-data';
import { Dialog, Transition } from '@headlessui/react';
import { Input } from '@nextui-org/input';
import { Fragment, useEffect, useState } from 'react';
import OpenSearch from './open-search';

export default function SearchModal() {
	const [isOpen, setIsOpen] = useState(false);
	const [textSearch, setTextSearch] = useState('');
	const openSearch = () => {
		setTextSearch('');
		setIsOpen(true);
	};
	const closeSearch = () => setIsOpen(false);

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
	}, [isOpen, textSearch]); //cart?.totalQuantity, quantityRef

	return (
		<div className="flex-1">
			<button aria-label="Open search" onClick={() => openSearch()} className="flex w-full items-center rounded-full bg-gray-100">
				<div className="w-full text-neutral-400">Input...</div>
				<OpenSearch />
			</button>
			<Transition show={isOpen} leave="transform duration-[0ms] transition">
				<Dialog onClose={closeSearch} className="relative z-50">
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
					{isOpen && (
						<div className="fixed inset-0">
							<div className="flex min-h-full items-center justify-center p-4 text-center">
								<Dialog.Panel className="flex h-[60vh] w-11/12 transform flex-col overflow-hidden rounded-xl bg-white text-left align-middle transition-all">
									<Input
										autoFocus
										type="text"
										label="Nhập tìm kiếm..."
										className="p-4"
										value={textSearch}
										onChange={e => setTextSearch(e.target.value)}
									/>
									<div className="flex-1 overflow-auto border-t p-4">
										<div className="response-list h-full space-y-4 overflow-auto rounded-xl">
											{textSearch.length ? textSearch : <NoData />}
										</div>
									</div>
								</Dialog.Panel>
							</div>
						</div>
					)}
				</Dialog>
			</Transition>
		</div>
	);
}
