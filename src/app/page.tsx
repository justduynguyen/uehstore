import Grid from '@/components/grid';
import ProductGridItems from '@/components/layout/product-grid-items';
// import { getProducts } from 'lib/shopify';

export const runtime = 'edge';

export const metadata = {
	title: 'Home page',
	description: 'Home page description',
};

export default async function HomePage() {
	const products = [1, 2, 3]; //await getProducts({ sortKey, reverse, query: searchValue });

	return (
		<>
			{products.length > 0 ? (
				<Grid className="grid-cols-2 p-2 pt-0 sm:grid-cols-2 lg:grid-cols-3">
					<ProductGridItems products={products} />
				</Grid>
			) : null}
		</>
	);
}
