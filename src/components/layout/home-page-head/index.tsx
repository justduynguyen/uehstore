export default function HomePageHead() {
	const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	return (
		<div className="grid grid-cols-4 gap-4 bg-white p-4">
			{list.map(item => (
				<div key={item} className="flex flex-col items-center text-xs">
					<div className="h-12 w-12 rounded-lg bg-green-200"></div>
					<div className="line-clamp-2 tracking-tight">Category 1</div>
				</div>
			))}
		</div>
	);
}
