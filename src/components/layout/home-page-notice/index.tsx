import { BanknotesIcon, CubeTransparentIcon } from '@heroicons/react/24/outline';
export default function HomePageNotice() {
	return (
		<div className="w-full bg-white px-4">
			<div className="grid grid-cols-2 items-center gap-4 p-4 text-xs">
				<div className="flex overflow-hidden rounded-lg border border-b-0 border-r-0 border-black bg-yellow-300 shadow-[4px_4px_0px_0px_rgb(3,3,3)]">
					<BanknotesIcon className="h-14 w-14 flex-none p-2" />
					<div className="flex items-center pr-1">Giao hàng trực tiếp tại cơ sở A</div>
				</div>
				{/* 5px 5px 0px 0px rgb(0 255 90 / 50%) */}
				<div className="flex overflow-hidden rounded-lg border border-b-0 border-r-0 border-black bg-yellow-300 shadow-[4px_4px_0px_0px_rgb(3,3,3)]">
					<CubeTransparentIcon className="h-14 w-14 flex-none p-2" />
					<div className="flex items-center">Giá cả hợp lý</div>
				</div>
				<div className="flex overflow-hidden rounded-lg border border-b-0 border-r-0 border-black bg-yellow-300 shadow-[4px_4px_0px_0px_rgb(3,3,3)]">
					<BanknotesIcon className="h-14 w-14 flex-none p-2" />
					<div className="flex items-center">Bảo hành sản phẩm</div>
				</div>
				<div className="flex overflow-hidden rounded-lg border border-b-0 border-r-0 border-black bg-yellow-300 shadow-[4px_4px_0px_0px_rgb(3,3,3)]">
					<BanknotesIcon className="h-14 w-14 flex-none p-2" />
					<div className="flex items-center">Hỗ trợ giao hàng COD</div>
				</div>
			</div>
		</div>
	);
}
