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
import Cart from '@/components/cart';
import OpenCart from '@/components/cart/open-cart';
import Logo from '@/components/layout/logo';
import { Link } from '@nextui-org/link';
import { Navbar as NavNextUI, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/navbar';
import { Suspense } from 'react';
export default function Navbar() {
	// const menu = await getMenu('next-js-frontend-header-menu');

	return (
		<NavNextUI shouldHideOnScroll isBordered maxWidth="full">
			<div className="flex w-full justify-center">
				<div className="flex w-[1240px]">
					<NavbarBrand>
						<Link href="/" className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6">
							<Logo />
							<div className="ml-2 flex-none text-sm font-medium uppercase md:hidden lg:block">{'SITE_NAME'}</div>
						</Link>
					</NavbarBrand>
					<NavbarContent className="hidden gap-4 sm:flex" justify="center">
						<NavbarItem>
							<div className="bg-gray-300">{/* <Search /> */}Search</div>
							{/* <Link color="foreground" href="#">
						Features
					</Link> */}
						</NavbarItem>
						{/* <NavbarItem isActive>
					<Link href="#" aria-current="page">
						Customers
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link color="foreground" href="#">
						Integrations
					</Link>
				</NavbarItem> */}
					</NavbarContent>
					<NavbarContent justify="end">
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
