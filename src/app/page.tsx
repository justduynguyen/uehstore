import Grid from '@/components/grid';
import ProductGridItems from '@/components/layout/product-grid-items';
// import { getProducts } from 'lib/shopify';

export const runtime = 'edge';

export const metadata = {
	title: 'Home page',
	description: 'Home page description',
	viewport: 'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no',
};

export default async function HomePage() {
	const products = [1, 2, 3]; //await getProducts({ sortKey, reverse, query: searchValue });

	return (
		<>
			{products.length > 0 ? (
				<Grid className="grid-cols-2 sm:grid-cols-2 lg:grid-cols-3">
					<ProductGridItems products={products} />
				</Grid>
			) : null}
		</>
	);
}
