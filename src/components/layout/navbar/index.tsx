// // import Cart from 'components/cart';
// // import OpenCart from 'components/cart/open-cart';
// // import LogoSquare from 'components/logo-square';
// // import { getMenu } from 'lib/shopify';
// // import { Menu } from 'lib/shopify/types';
// import Cart from '@/components/cart';
// import OpenCart from '@/components/cart/open-cart';
// import Logo from '@/components/layout/logo';
// import Link from 'next/link';
// import { Suspense } from 'react';
// // import MobileMenu from './mobile-menu';
// // import Search from './search';
// const { SITE_NAME } = process.env;

// export default function Navbar() {
// 	// const menu = await getMenu('next-js-frontend-header-menu');

// 	return (
// 		<nav className="sticky flex items-center justify-between p-4 lg:px-6">
// 			{/* <div className="block flex-none md:hidden">
// 				<MobileMenu menu={menu} />
// 			</div> */}
// 			<div className="flex w-full items-center">
// 				<div className="flex w-full md:w-1/3">
// 					<Link href="/" className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6">
// 						<Logo />
// 						<div className="ml-2 flex-none text-sm font-medium uppercase md:hidden lg:block">{SITE_NAME}</div>
// 					</Link>
// 					{/* {menu.length ? ( */}
// 					<ul className="hidden gap-6 text-sm md:flex md:items-center">
// 						{/* {menu.map((item: Menu) => ( */}
// 						<li key={'menu1'}>
// 							<Link
// 								href={'#'}
// 								className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300">
// 								{'item.title'}
// 							</Link>
// 						</li>
// 						{/* ))} */}
// 					</ul>
// 					{/* ) : null} */}
// 				</div>
// 				<div className="hidden justify-center md:flex md:w-1/3">{/* <Search /> */}Search</div>
// 				<div className="flex justify-end md:w-1/3">
// 					<Suspense fallback={<OpenCart />}>
// 						<Cart />
// 					</Suspense>
// 				</div>
// 			</div>
// 		</nav>
// 	);
// }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// import Cart from 'components/cart';
// import OpenCart from 'components/cart/open-cart';
// import LogoSquare from 'components/logo-square';
// import { getMenu } from 'lib/shopify';
// import { Menu } from 'lib/shopify/types';
// import MobileMenu from './mobile-menu';
// import Search from './search';
// const { SITE_NAME } = process.env;

'use client';
import Cart from '@/components/cart';
import OpenCart from '@/components/cart/open-cart';
import Logo from '@/components/layout/logo';
import { Link } from '@nextui-org/link';
import { Navbar as NavNextUI, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from '@nextui-org/navbar';
import { Suspense, useState } from 'react';
import SearchModal from './search/search-modal';
export default function Navbar() {
	// const menu = await getMenu('next-js-frontend-header-menu');
	const menuItems = ['Profile', 'Dashboard', 'Activity', 'Analytics', 'System', 'Deployments', 'My Settings', 'Team Settings', 'Help & Feedback', 'Log Out'];
	// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	return (
		<NavNextUI shouldHideOnScroll isBordered maxWidth="full">
			<div className="flex w-full">
				<div className="flex w-[1240px]">
					<NavbarContent>
						<NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} className="sm:hidden" />
						<NavbarBrand>
							{/* <Link href="/" className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6"> */}
							<Logo />
							{/* <div className="ml-2 flex-none text-sm font-medium uppercase md:hidden lg:block">{'SITE_NAME'}</div> */}
							{/* </Link> */}
						</NavbarBrand>
					</NavbarContent>
					{/* <NavbarContent className="flex w-full flex-1 gap-4" justify="center">
						<NavbarItem>
							<SearchModal />
						</NavbarItem>
					</NavbarContent> */}
					<NavbarContent justify="end">
						<SearchModal />
						<NavbarItem className="flex">
							<Suspense fallback={<OpenCart />}>
								<Cart />
							</Suspense>
						</NavbarItem>
						{/* <NavbarItem>
					<Button as={Link} color="primary" href="#" variant="flat">
						Sign Up
					</Button>
				</NavbarItem> */}
					</NavbarContent>
					<NavbarMenu>
						{menuItems.map((item, index) => (
							<NavbarMenuItem key={`${item}-${index}`}>
								<Link
									color={index === 2 ? 'primary' : index === menuItems.length - 1 ? 'danger' : 'foreground'}
									className="w-full"
									href="#"
									size="lg">
									{item}
								</Link>
							</NavbarMenuItem>
						))}
					</NavbarMenu>
				</div>
			</div>
		</NavNextUI>

		// <nav className="sticky flex items-center justify-between p-4 lg:px-6">
		// 	{/* <div className="block flex-none md:hidden">
		// 		<MobileMenu menu={menu} />
		// 	</div> */}
		// 	<div className="flex w-full items-center">
		// 		<div className="flex w-full md:w-1/3">
		// 			<Link href="/" className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6">
		// 				<Logo />
		// 				<div className="ml-2 flex-none text-sm font-medium uppercase md:hidden lg:block">{SITE_NAME}</div>
		// 			</Link>
		// 			{/* {menu.length ? ( */}
		// 			<ul className="hidden gap-6 text-sm md:flex md:items-center">
		// 				{/* {menu.map((item: Menu) => ( */}
		// 				<li key={'menu1'}>
		// 					<Link
		// 						href={'#'}
		// 						className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300">
		// 						{'item.title'}
		// 					</Link>
		// 				</li>
		// 				{/* ))} */}
		// 			</ul>
		// 			{/* ) : null} */}
		// 		</div>
		// 		<div className="hidden justify-center md:flex md:w-1/3">{/* <Search /> */}Search</div>
		// 		<div className="flex justify-end md:w-1/3">
		// 			<Suspense fallback={<OpenCart />}>
		// 				<Cart />
		// 			</Suspense>
		// 		</div>
		// 	</div>
		// </nav>
	);
}
