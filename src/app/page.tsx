import Grid from '@/components/grid';
import HomePageNotice from '@/components/layout/home-page-notice';
import ProductGridItems from '@/components/layout/product-grid-items';
import botsvg from '@/public/bottom.svg';
import topsvg from '@/public/top.svg';
import Image from 'next/image';

export const runtime = 'edge';

export const metadata = {
	title: 'Home page',
	description: 'Home page description',
};

export default async function HomePage() {
	const products = [1, 2, 3]; //await getProducts({ sortKey, reverse, query: searchValue });

	return (
		<div className=" w-screen">
			<div className="w-screen bg-gradient-to-b from-yellow-200 via-pink-200 to-rose-500 selection:bg-teal-300">
				<div className="introduce relative flex flex-1 flex-col px-6 pb-8 pt-20">
					<div className="z-10">
						<div className="text-6xl">Hé lô,</div>
						<div className="text-3xl">Cảm ơn bạn ghé thăm shop</div>
						<div className="text-3xl">của chúng mình!</div>
					</div>
					<div className="z-10 pt-2 text-sm text-neutral-600">
						<div>Đây là dự án mới được khởi chạy, nhầm thỏa mãn niềm đam mê buôn bán của mình ^^!</div>
						<div>Cũng như là nơi để các bạn sinh viên trong và ngoài trường có thể mua được sản phẩm cần thiết với giá hợp lý nhất!</div>
						<div className="facebook flex items-center pt-4 text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
							<svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 1024 1024" className="icon" version="1.1">
								<path
									d="M629.379072 512.20992h-58.22464l-0.401408 252.105728H466.74944V512.311296h-62.440448v-83.866624h62.440448v-51.3536c0-69.9904 20.98176-116.784128 102.897664-116.784128h63.747072v83.968h-38.148096c-31.721472 0-33.93024 15.39584-33.93024 37.67808l-0.1024 46.288896h77.100032l-8.935424 83.968zM788.31616 98.304H236.306432C160.090112 98.304 98.304 160.090112 98.304 236.306432V788.31616c0 76.21632 61.786112 138.002432 138.002432 138.002432H788.31616c76.21632 0 138.002432-61.785088 138.002432-138.002432V236.306432C926.318592 160.090112 864.53248 98.304 788.31616 98.304z"
									fill="#FFF200"
								/>
								<path
									d="M487.22944 743.835648h63.075328l0.36864-231.658496c0.018432-11.297792 9.182208-20.447232 20.48-20.447232h39.809024l4.576256-43.008h-54.3232a20.481024 20.481024 0 0 1-20.48-20.524032l0.101376-46.288896c0-13.142016 0.6656-26.994688 8.621056-38.678528 13.234176-19.436544 37.737472-19.436544 45.789184-19.436544h17.668096v-43.006976h-43.267072c-47.642624 0-61.339648 18.086912-65.841152 24.030208-11.154432 14.729216-16.576512 38.370304-16.576512 72.274944v51.352576c0 11.311104-9.168896 20.48-20.48 20.48h-41.961472v42.906624h41.961472c11.311104 0 20.48 9.168896 20.48 20.48v231.524352z m83.52256 40.96H466.74944c-11.311104 0-20.48-9.168896-20.48-20.48V532.791296h-41.961472c-11.31008 0-20.48-9.168896-20.48-20.48v-83.866624c0-11.311104 9.16992-20.48 20.48-20.48h41.961472v-30.872576c0-43.762688 7.907328-74.586112 24.8832-97.00352 20.516864-27.091968 52.734976-40.261632 98.494464-40.261632h63.747072c11.311104 0 20.48 9.168896 20.48 20.48v83.966976c0 11.311104-9.168896 20.48-20.48 20.48h-38.148096c-8.367104 0-11.372544 1.340416-12.028928 1.700864-0.671744 1.296384-1.421312 5.07904-1.421312 15.49824l-0.057344 25.808896h56.573952a20.48 20.48 0 0 1 20.365312 22.646784l-8.9344 83.968c-1.107968 10.413056-9.893888 18.313216-20.365312 18.313216h-37.777408l-0.369664 231.658496c-0.017408 11.297792-9.181184 20.447232-20.48 20.447232zM788.31616 98.304H236.306432C160.090112 98.304 98.304 160.090112 98.304 236.306432V788.31616c0 76.21632 61.786112 138.002432 138.002432 138.002432H788.31616c76.21632 0 138.002432-61.786112 138.002432-138.002432V236.306432C926.318592 160.090112 864.53248 98.304 788.31616 98.304z m0 40.96c53.510144 0 97.042432 43.533312 97.042432 97.042432V788.31616c0 53.50912-43.532288 97.042432-97.042432 97.042432H236.306432c-53.50912 0-97.042432-43.533312-97.042432-97.042432V236.306432C139.264 182.797312 182.797312 139.264 236.306432 139.264H788.31616z"
									fill="#000000"
								/>
							</svg>
							<div className="pl-1">https://www.facebook.com/justduynguyen</div>
						</div>
						<div className="zalo__phone flex items-center text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
							<svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 1024 1024" className="icon" version="1.1">
								<path
									d="M590.226432 690.929664c-61.667328 81.299456-91.501568 90.14272-158.25408-0.113664 0.464896 0.347136 0.897024 0.65536 1.355776 0.9984-0.448512-0.461824-0.90112-0.896-1.355776-1.368064 66.277376-76.855296 91.981824-76.845056 158.25408 0.119808-0.59392 0.498688-1.18784 0.965632-1.783808 1.4592 0.594944-0.36864 1.178624-0.72704 1.783808-1.09568m215.40864-238.467072c-14.2848-39.46496-37.920768-77.609984-71.504896-111.33952-17.67936-18.46272-37.557248-34.760704-59.225088-48.453632-39.415808-28.18048-79.940608-54.84032-120.588288-81.267712C511.495168 170.52672 453.71392 145.408 390.068224 145.408c-22.035456 0-43.372544 3.00544-63.634432 8.631296 50.62656 3.47136 96.92672 22.8352 134.019072 53.175296-23.504896-7.79264-48.61952-12.007424-74.714112-12.007424-43.491328 0-84.2752 11.713536-119.405568 32.178176 19.559424-5.219328 40.108032-7.99744 61.294592-7.99744 33.654784 0 65.672192 7.048192 94.716928 19.700736-23.71584 15.683584-47.285248 31.58016-70.509568 47.95392-52.1216 30.46912-94.69952 75.630592-122.200064 129.88928-6.306816 12.511232-11.722752 25.353216-16.326656 38.488064-17.639424 112.66048 7.020544 211.751936 3.545088 221.019136C259.106816 785.097728 362.34752 865.28 478.434304 876.255232a317.952 317.952 0 0 0 29.913088 1.417216c60.71296 0 117.643264-17.649664 165.919744-49.18272 56.7552-35.677184 101.338112-89.15456 126.118912-152.664064-3.330048-9.09824 16.10752-146.893824 5.248-223.363072"
									fill="#FFF200"
								/>
								<path
									d="M511.204352 734.767104h-0.100352c-12.551168-0.0768-29.883392-14.237696-52.785152-43.189248 24.337408-26.68032 40.457216-38.275072 52.753408-38.275072h0.008192c12.295168 0.00512 28.402688 11.60192 52.714496 38.284288-18.341888 22.994944-37.689344 43.180032-52.590592 43.180032z m-0.108544-122.42432h-0.016384c-32.3072 0-60.155904 24.768512-94.6176 64.728064a20.425728 20.425728 0 0 0-4.968448 13.551616 20.421632 20.421632 0 0 0 4.013056 12.370944c38.075392 51.480576 65.69984 72.552448 95.348736 72.732672l0.371712 0.001024c33.613824-0.003072 61.4144-27.726848 95.315968-72.421376a20.4288 20.4288 0 0 0 4.16256-12.557312 20.477952 20.477952 0 0 0-4.960256-13.546496c-34.470912-40.03328-62.328832-64.846848-94.649344-64.859136z m209.48992-16.523264c0 25.1392-20.42368 45.592576-45.52704 45.592576-25.104384 0-45.52704-20.453376-45.52704-45.592576s20.422656-45.591552 45.52704-45.591552c25.10336 0 45.52704 20.452352 45.52704 45.591552z m-333.23008 0c0 24.897536-20.153344 45.080576-45.01504 45.080576-24.859648 0-45.01504-20.18304-45.01504-45.080576 0-24.896512 20.155392-45.079552 45.01504-45.079552 24.861696 0 45.01504 20.18304 45.01504 45.079552z m550.286336 68.57728c0 21.057536-17.030144 38.189056-37.9648 38.189056-20.93056 0-37.95968-17.13152-37.95968-38.189056V491.808768c0-21.057536 17.02912-38.189056 37.95968-38.189056 20.934656 0 37.9648 17.13152 37.9648 38.189056v172.588032z m-137.28768 11.42784c-24.7808 63.509504-69.362688 116.987904-126.117888 152.665088-48.27648 31.533056-105.206784 49.18272-165.919744 49.18272-9.879552 0-19.853312-0.466944-29.913088-1.41824C362.3168 865.28 259.076096 785.097728 216.82176 676.438016c3.475456-9.2672-21.184512-108.357632-3.545088-221.019136 4.603904-13.134848 10.01984-25.976832 16.326656-38.488064 27.49952-54.258688 70.07744-99.42016 122.200064-129.888256 23.22432-16.37376 46.793728-32.270336 70.509568-47.95392-29.044736-12.652544-61.062144-19.700736-94.716928-19.700736-20.854784 0-41.090048 2.697216-60.37504 7.759872-0.08192-0.050176-0.164864-0.09728-0.247808-0.146432 34.978816-20.224 75.517952-31.794176 118.7328-31.794176 26.094592 0 51.21024 4.215808 74.715136 12.0064-37.091328-30.339072-83.39456-49.701888-134.019072-53.174272 20.261888-5.625856 41.6-8.631296 63.634432-8.631296 63.645696 0 121.42592 25.11872 164.248576 65.993728 40.648704 26.426368 81.17248 53.087232 120.588288 81.266688 21.66784 13.693952 41.545728 29.99296 59.225088 48.45568 33.584128 33.728512 57.219072 71.87456 71.503872 111.33952 10.85952 76.4672-8.577024 214.262784-5.248 223.361024z m-637.389824-11.42784c0 21.057536-17.031168 38.189056-37.9648 38.189056-20.931584 0-37.95968-17.13152-37.95968-38.189056V491.808768c0-21.057536 17.028096-38.189056 37.95968-38.189056 20.933632 0 37.9648 17.13152 37.9648 38.189056v172.588032z m97.917952-396.424192c1.78176 0.238592 3.587072 0.37888 5.408768 0.37888 3.501056 0 7.048192-0.45056 10.571776-1.391616a196.093952 196.093952 0 0 1 39.733248-6.30784c-52.5056 34.158592-95.00672 81.48992-123.527168 137.762816l-0.038912 0.0768c-5.59616 11.101184-10.681344 22.70208-15.186944 34.584576a79.084544 79.084544 0 0 0-21.019648-13.672448c21.476352-58.244096 57.286656-110.32576 104.05888-151.431168zM858.44992 424.35072a79.512576 79.512576 0 0 0-15.099904 12.094464c-16.969728-45.9264-43.853824-87.61856-79.944704-123.941888-19.693568-20.519936-41.769984-38.621184-65.636352-53.817344-37.31968-26.646528-75.988992-52.195328-110.43328-74.64448 51.659776 11.37664 100.3264 33.6896 143.232 65.98656 59.17696 44.545024 103.366656 104.802304 127.88224 174.322688z m41.22624-11.691008c-0.643072 0-1.28 0.033792-1.92 0.049152-0.0512-0.155648-0.082944-0.31232-0.137216-0.466944-27.096064-77.79328-76.343296-145.202176-142.41792-194.93888-67.319808-50.675712-147.40992-79.24736-231.612416-82.624512a20.506624 20.506624 0 0 0-6.079488 0.66048C478.4384 115.166208 434.930688 104.448 390.037504 104.448c-25.300992 0-50.397184 3.405824-74.59328 10.124288-19.2256 5.338112-31.807488 23.752704-29.792256 43.603968a40.89856 40.89856 0 0 0 3.66592 13.26592 277.004288 277.004288 0 0 0-43.63264 20.549632c-17.471488 10.17856-24.854528 31.545344-17.523712 50.295808-50.002944 45.5936-88.194048 102.721536-111.02208 166.349824a20.496384 20.496384 0 0 0-1.0496 4.540416c-39.334912 4.4544-70.01088 38.01088-70.01088 78.630912v172.588032c0 43.64288 35.4048 79.149056 78.91968 79.149056 25.527296 0 48.25088-12.22656 62.686208-31.135744 24.178688 51.800064 60.935168 97.47456 107.302912 133.060608 53.06368 40.726528 115.155968 65.472512 179.560448 71.56224a360.554496 360.554496 0 0 0 33.768448 1.599488c67.142656 0 132.146176-19.24096 188.01664-55.653376 31.917056-20.107264 60.346368-45.090816 84.50048-74.26048a356.745216 356.745216 0 0 0 51.47648-83.13856c13.878272 22.750208 38.88128 37.965824 67.366912 37.965824 43.518976 0 78.9248-35.506176 78.9248-79.149056V491.808768c0-43.64288-35.405824-79.149056-78.9248-79.149056z"
									fill="#000000"
								/>
							</svg>
							<div className="pl-1">Zalo - Phone: 096.8285.944</div>
						</div>
					</div>
				</div>
				<div className="w-screen">
					<Image src={topsvg} alt="top.svg" className="w-screen object-fill" />
					<HomePageNotice />
				</div>
			</div>
			{/* <div className="bg-white"> */}
			<div className="bg-gradient-to-r from-rose-100 to-teal-100">
				<div className="h-[1000px] bg-[url('/ooorganize2.svg')] bg-contain">
					<Image src={botsvg} alt="bottom.svg" className="-mt-2 w-screen" />
					{products.length > 0 ? (
						<Grid className="grid-cols-2 p-4 pt-8 sm:grid-cols-2 lg:grid-cols-3">
							<ProductGridItems products={products} />
						</Grid>
					) : null}
				</div>
			</div>

			{/* </div> */}
		</div>
	);
}
