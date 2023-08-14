/* eslint-disable @typescript-eslint/no-unused-vars */
import Grid from '@/components/grid';
import { GridTileImage } from '@/components/grid/tile';
// import { Product } from 'lib/shopify/types';
import Link from 'next/link';

export default function ProductGridItems({ products }: { products: unknown[] }) {
	return (
		<>
			{products.map(() => (
				<Grid.Item key={'product.handle'} className="animate-fadeIn">
					{/* ${product.handle} */}
					<Link className="relative inline-block h-full w-full" href={`/product/1`}>
						<GridTileImage
							alt={'product.title'}
							label={{
								title: 'product.title',
								amount: '1000',
								currencyCode: 'USD',
							}}
							src={'/t-shirt.avif'}
							fill
							sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
						/>
					</Link>
				</Grid.Item>
			))}
		</>
	);
}
