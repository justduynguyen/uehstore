// import { cookies } from 'next/headers';
import CartModal from './modal';

export default async function Cart() {
	// const cartId = cookies().get('cartId')?.value;
	// let cart;

	// if (cartId) {
	// 	cart = await getCart(cartId);
	// }

	// cart
	return <CartModal cart={null} />;
}
