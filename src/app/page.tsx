import Grid from '@/components/grid';
import HomePageNotice from '@/components/layout/home-page-notice';
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
		<div className="">
			<div className="bg-gradient-to-b from-yellow-200 via-pink-200 to-rose-500 selection:bg-teal-300">
				<div className="introduce relative flex flex-1 flex-col px-6 pb-8 pt-20">
					<svg
						className="absolute right-0 top-0"
						xmlns="http://www.w3.org/2000/svg"
						version="1.1"
						xmlnsXlink="http://www.w3.org/1999/xlink"
						viewBox="0 0 800 800">
						<defs>
							<filter id="bbburst-blur-1" x="-100%" y="-100%" width="400%" height="400%">
								<feGaussianBlur in="SourceGraphic" stdDeviation="1"></feGaussianBlur>
							</filter>
							<filter id="bbburst-blur-2" x="-100%" y="-100%" width="400%" height="400%">
								<feGaussianBlur in="SourceGraphic" stdDeviation="2"></feGaussianBlur>
							</filter>
							<filter id="bbburst-blur-3" x="-100%" y="-100%" width="400%" height="400%">
								<feGaussianBlur in="SourceGraphic" stdDeviation="4"></feGaussianBlur>
							</filter>
							<filter id="bbburst-blur-4" x="-100%" y="-100%" width="400%" height="400%">
								<feGaussianBlur in="SourceGraphic" stdDeviation="12"></feGaussianBlur>
							</filter>
							<symbol id="bbburst-shape-1" viewBox="0 0 194 167">
								<path d="m97 0 96.129 166.5H.871L97 0Z"></path>
							</symbol>
							<symbol id="bbburst-shape-4" viewBox="0 0 149 143">
								<path d="M71.647 2.781c.898-2.764 4.808-2.764 5.706 0l15.445 47.534a3 3 0 0 0 2.853 2.073h49.98c2.906 0 4.115 3.719 1.764 5.427L106.96 87.193a2.999 2.999 0 0 0-1.09 3.354l15.445 47.534c.898 2.764-2.266 5.062-4.617 3.354l-40.435-29.378a3 3 0 0 0-3.526 0l-40.435 29.378c-2.351 1.708-5.515-.59-4.617-3.354L43.13 90.547a3 3 0 0 0-1.09-3.354L1.605 57.815c-2.35-1.708-1.142-5.427 1.764-5.427h49.98a3 3 0 0 0 2.853-2.073L71.647 2.781Z"></path>
							</symbol>
							<symbol id="bbburst-shape-6" viewBox="0 0 133 116">
								<path d="M59.7487 10.2513c-13.6683-13.66839-35.8291-13.66839-49.4974 0-13.66839 13.6683-13.66839 35.8291 0 49.4974l49.4974-49.4974ZM66.5 66.5 41.7513 91.2487 66.5 115.997l24.7487-24.7483L66.5 66.5Zm56.249-6.7513c13.668-13.6683 13.668-35.8291 0-49.4974-13.669-13.66839-35.8294-13.66839-49.4977 0l49.4977 49.4974Zm-112.4977 0 31.5 31.5 49.4974-49.4974-31.5-31.5-49.4974 49.4974Zm80.9974 31.5 31.5003-31.5-49.4977-49.4974-31.5 31.5 49.4974 49.4974Z"></path>
							</symbol>
							<symbol id="bbburst-shape-8" viewBox="0 0 87 168">
								<path
									d="m12 12 31.2546 18.0749c16.4102 9.4902 20.014 31.6325 7.4603 45.8369L36.3296 92.1884c-12.5684 14.2206-8.9394 36.3916 7.5068 45.8636L75 156"
									stroke-width="14"
									stroke-linecap="round"
									stroke-linejoin="round"></path>
							</symbol>
							<symbol id="bbburst-shape-10" viewBox="0 0 145 145">
								<circle cx="72.5" cy="72.5" r="61.5" fill="none" stroke-width="22"></circle>
							</symbol>
						</defs>
						<use
							xlinkHref="#bbburst-shape-10"
							width="51.08081904454652"
							opacity="0.2839078371308702"
							transform="matrix(0.874439266829273,-0.4851350004144039,0.4851350004144039,0.874439266829273,402.47362043704004,355.41834402400104)"
							fill="none"
							stroke="#ff5c58"
							filter="url(#bbburst-blur-2)"></use>
						<use
							xlinkHref="#bbburst-shape-10"
							width="39.511138028195525"
							opacity="0.23327201282019971"
							transform="matrix(0.9494937035510334,0.31378608464516455,-0.31378608464516455,0.9494937035510334,147.94488618460093,-276.10340258140013)"
							fill="none"
							stroke="#2c2891"
							filter="url(#bbburst-blur-3)"></use>
						<use
							xlinkHref="#bbburst-shape-4"
							width="59.98534715123627"
							opacity="0.2056855744256424"
							transform="matrix(0.9340191589734149,-0.35722291453740007,0.35722291453740007,0.9340191589734149,190.23210709098444,299.21158792082906)"
							fill="#2c2891"
							filter="url(#bbburst-blur-3)"></use>
						<use
							xlinkHref="#bbburst-shape-10"
							width="73.61976730034151"
							opacity="-0.007294532234929818"
							transform="matrix(0.9948464623797116,-0.10139288086731195,0.10139288086731195,0.9948464623797116,4.163115984256521,311.6057946842287)"
							fill="none"
							stroke="#2c2891"
							filter="url(#bbburst-blur-3)"></use>
						<use
							xlinkHref="#bbburst-shape-8"
							width="24.699366887106716"
							opacity="0.8242187490613372"
							transform="matrix(0.8734783205681067,0.4868630438814594,-0.4868630438814594,0.8734783205681067,862.9101058573799,-227.94237779815876)"
							fill="none"
							stroke="#ff5c58"></use>
						<use
							xlinkHref="#bbburst-shape-10"
							width="30.76959977274079"
							opacity="0.6709587913701618"
							transform="matrix(0.8077891935813452,0.5894714740623164,-0.5894714740623164,0.8077891935813452,707.8162934674868,-238.91234735925872)"
							fill="none"
							stroke="#00a19d"></use>
						<use
							xlinkHref="#bbburst-shape-8"
							width="74.53279776401841"
							opacity="0.10389023998886637"
							transform="matrix(0.9589372148372606,-0.283618437341717,0.283618437341717,0.9589372148372606,-88.2938170121667,133.6785324387194)"
							fill="none"
							stroke="#ff5c58"
							filter="url(#bbburst-blur-3)"></use>
						<use
							xlinkHref="#bbburst-shape-8"
							width="17.162538126012976"
							opacity="0.829819199983799"
							transform="matrix(0.9920073734703787,-0.12617991512281437,0.12617991512281437,0.9920073734703787,665.4815985180918,-243.22048306175753)"
							fill="none"
							stroke="#00a19d"></use>
						<use
							xlinkHref="#bbburst-shape-10"
							width="41.26464317173928"
							opacity="0.5415055612985278"
							transform="matrix(0.8392118431878652,0.5438046361086174,-0.5438046361086174,0.8392118431878652,591.9139282741714,-138.30474671197553)"
							fill="none"
							stroke="#2c2891"
							filter="url(#bbburst-blur-1)"></use>
						<use
							xlinkHref="#bbburst-shape-10"
							width="41.33655647181595"
							opacity="0.3162276529125655"
							transform="matrix(0.9999551886621195,0.009466819302440732,-0.009466819302440732,0.9999551886621195,100.85269603955075,-354.82543177694333)"
							fill="none"
							stroke="#ff5c58"
							filter="url(#bbburst-blur-2)"></use>
						<use
							xlinkHref="#bbburst-shape-4"
							width="23.537464931348506"
							opacity="0.6833607895927409"
							transform="matrix(0.7923186799789583,0.6101074572207761,-0.6101074572207761,0.7923186799789583,779.6992191863372,-136.3881392316256)"
							fill="#ffbd9b"></use>
						<use
							xlinkHref="#bbburst-shape-4"
							width="46.08866334419744"
							opacity="0.23630465696635594"
							transform="matrix(0.9897139837702648,-0.14306023322220623,0.14306023322220623,0.9897139837702648,68.80464863303725,6.461815807185189)"
							fill="#2c2891"
							filter="url(#bbburst-blur-3)"></use>
						<use
							xlinkHref="#bbburst-shape-8"
							width="10.949626409389797"
							opacity="0.9771609699852415"
							transform="matrix(0.9980389355881115,-0.06259619038047985,0.06259619038047985,0.9980389355881115,756.2766639355663,-380.2494510077333)"
							fill="none"
							stroke="#ffbd9b"></use>
						<use
							xlinkHref="#bbburst-shape-8"
							width="42.150832205394494"
							opacity="0.5156474081197361"
							transform="matrix(0.9921216073463214,0.12527855457560053,-0.12527855457560053,0.9921216073463214,347.7848665446894,-346.24500876592214)"
							fill="none"
							stroke="#2c2891"
							filter="url(#bbburst-blur-1)"></use>
						<use
							xlinkHref="#bbburst-shape-8"
							width="27.12996104713772"
							opacity="0.7309605580687286"
							transform="matrix(0.9987859855376786,0.049260076060923794,-0.049260076060923794,0.9987859855376786,539.2750853053842,-366.16693610322363)"
							fill="none"
							stroke="#ffa6d5"></use>
						<use
							xlinkHref="#bbburst-shape-8"
							width="45.153805588734045"
							opacity="0.3267977975259798"
							transform="matrix(0.9347686009146587,-0.3552571783146001,0.3552571783146001,0.9347686009146587,-14.70989376302299,-196.3426000345535)"
							fill="none"
							stroke="#ff5c58"
							filter="url(#bbburst-blur-2)"></use>
						<use
							xlinkHref="#bbburst-shape-10"
							width="31.417448245948464"
							opacity="0.6856397250023651"
							transform="matrix(0.7784943415765424,0.6276516232220751,-0.6276516232220751,0.7784943415765424,827.7295829997489,-88.3230950540468)"
							fill="none"
							stroke="#00a19d"></use>
						<use
							xlinkHref="#bbburst-shape-6"
							width="45.7647777095609"
							opacity="0.08365686752553292"
							transform="matrix(0.7148168405685497,0.6993117219377899,-0.6993117219377899,0.7148168405685497,518.6580754398002,434.94093858973156)"
							fill="#ffa6d5"
							filter="url(#bbburst-blur-3)"></use>
						<use
							xlinkHref="#bbburst-shape-10"
							width="39.20291613988381"
							opacity="0.3518306029585848"
							transform="matrix(0.9958222953181409,0.09131240960192255,-0.09131240960192255,0.9958222953181409,476.1078333386092,151.1637432983223)"
							fill="none"
							stroke="#2c2891"
							filter="url(#bbburst-blur-2)"></use>
						<use
							xlinkHref="#bbburst-shape-4"
							width="17.662055619017387"
							opacity="0.8238694034211624"
							transform="matrix(0.7678363528706451,-0.6406460295750737,0.6406460295750737,0.7678363528706451,363.29390287245866,-272.16891606102274)"
							fill="#2c2891"></use>
						<use
							xlinkHref="#bbburst-shape-4"
							width="36.857018714803274"
							opacity="0.4610937898103342"
							transform="matrix(0.7423079736111529,0.6700588573500869,-0.6700588573500869,0.7423079736111529,924.0863766314831,213.68624671135382)"
							fill="#ffa6d5"
							filter="url(#bbburst-blur-1)"></use>
						<use
							xlinkHref="#bbburst-shape-4"
							width="14.102702087016798"
							opacity="0.9160103311096961"
							transform="matrix(0.9992285682739971,0.0392717244986518,-0.0392717244986518,0.9992285682739971,747.3643455133621,-342.53751994237984)"
							fill="#2c2891"></use>
						<use
							xlinkHref="#bbburst-shape-10"
							width="43.39103672075714"
							opacity="0.48632910913752136"
							transform="matrix(0.9999989407587039,-0.0014555004192181808,0.0014555004192181808,0.9999989407587039,548.6245979531353,59.78412541667848)"
							fill="none"
							stroke="#00a19d"
							filter="url(#bbburst-blur-1)"></use>
						<use
							xlinkHref="#bbburst-shape-6"
							width="28.36482913919341"
							opacity="0.1787594626705098"
							transform="matrix(0.7949682286751101,0.6066510656029197,-0.6066510656029197,0.7949682286751101,714.5009030854048,431.05031185599216)"
							fill="#ffbd9b"
							filter="url(#bbburst-blur-3)"></use>
						<use
							xlinkHref="#bbburst-shape-6"
							width="14.45003870455951"
							opacity="0.8217031862767519"
							transform="matrix(0.9996112580980794,-0.027880686569288993,0.027880686569288993,0.9996112580980794,753.783714486425,-223.53331052248643)"
							fill="#00a19d"></use>
						<use
							xlinkHref="#bbburst-shape-4"
							width="58.22829115490585"
							opacity="0.4597449128887421"
							transform="matrix(0.9737412394986341,-0.2276576343979346,0.2276576343979346,0.9737412394986341,165.6562393556429,-219.38727199931964)"
							fill="#ffbd9b"
							filter="url(#bbburst-blur-1)"></use>
						<use
							xlinkHref="#bbburst-shape-8"
							width="39.865152545714636"
							opacity="0.5711368474870309"
							transform="matrix(0.881030557853279,0.47305935793380105,-0.47305935793380105,0.881030557853279,817.3330367159116,38.290972249562)"
							fill="none"
							stroke="#2c2891"
							filter="url(#bbburst-blur-1)"></use>
						<use
							xlinkHref="#bbburst-shape-4"
							width="18.04473478940773"
							opacity="0.7768896945316899"
							transform="matrix(0.9067468528831814,-0.4216754021595834,0.4216754021595834,0.9067468528831814,425.90585665094204,-254.61675035612376)"
							fill="#ffbd9b"></use>
						<use
							xlinkHref="#bbburst-shape-8"
							width="37.61955435001409"
							opacity="0.437162214682846"
							transform="matrix(0.9594956827817536,-0.28172333010096373,0.28172333010096373,0.9594956827817536,325.67930648007757,67.29993467101576)"
							fill="none"
							stroke="#00a19d"
							filter="url(#bbburst-blur-2)"></use>
						<use
							xlinkHref="#bbburst-shape-10"
							width="28.412453149383506"
							opacity="0.7189426854312713"
							transform="matrix(0.7940495925814689,-0.6078529793635985,0.6078529793635985,0.7940495925814689,500.3052073990111,-31.59750862474516)"
							fill="none"
							stroke="#2c2891"></use>
						<use
							xlinkHref="#bbburst-shape-4"
							width="39.07093137428887"
							opacity="0.5639982080638273"
							transform="matrix(0.7960117452673666,-0.6052811754849154,0.6052811754849154,0.7960117452673666,487.13963117906974,125.93898612567477)"
							fill="#ff5c58"
							filter="url(#bbburst-blur-1)"></use>
						<use
							xlinkHref="#bbburst-shape-10"
							width="13.433046420128534"
							opacity="0.9260342394763293"
							transform="matrix(0.9652365234813,0.26137799015550983,-0.26137799015550983,0.9652365234813,826.5763458671299,-368.8804256560635)"
							fill="none"
							stroke="#2c2891"></use>
						<use
							xlinkHref="#bbburst-shape-4"
							width="42.017988684982896"
							opacity="0.5794925841802055"
							transform="matrix(0.906145320466167,0.4229664977244266,-0.4229664977244266,0.906145320466167,626.7150551173637,-102.55852209489677)"
							fill="#00a19d"
							filter="url(#bbburst-blur-1)"></use>
						<use
							xlinkHref="#bbburst-shape-4"
							width="33.180823318727185"
							opacity="0.4681472041463811"
							transform="matrix(0.9430278001067133,-0.3327139435399317,0.3327139435399317,0.9430278001067133,610.6048208061073,158.63235251271766)"
							fill="#2c2891"
							filter="url(#bbburst-blur-1)"></use>
						<use
							xlinkHref="#bbburst-shape-8"
							width="45.99411428465858"
							opacity="0.39026071973277676"
							transform="matrix(0.9949982608376693,-0.09989224659608684,0.09989224659608684,0.9949982608376693,519.1055017235961,173.7131982294722)"
							fill="none"
							stroke="#ff5c58"
							filter="url(#bbburst-blur-2)"></use>
						<use
							xlinkHref="#bbburst-shape-1"
							width="36.52546366095214"
							opacity="0.4454656621511539"
							transform="matrix(0.7848487592861761,0.6196873607287388,-0.6196873607287388,0.7848487592861761,556.2958614050256,-42.77892047053342)"
							fill="#ffa6d5"
							filter="url(#bbburst-blur-2)"></use>
						<use
							xlinkHref="#bbburst-shape-6"
							width="49.601393232814964"
							opacity="0.34704311792421727"
							transform="matrix(0.7983675293211062,0.6021704809484708,-0.6021704809484708,0.7983675293211062,427.60289935820043,-61.971961413763154)"
							fill="#00a19d"
							filter="url(#bbburst-blur-2)"></use>
						<use
							xlinkHref="#bbburst-shape-10"
							width="22.830335222938732"
							opacity="0.7598091383521184"
							transform="matrix(0.8259809893264687,-0.5636979734496728,0.5636979734496728,0.8259809893264687,392.0715269741281,-157.35780074420273)"
							fill="none"
							stroke="#00a19d"></use>
						<use
							xlinkHref="#bbburst-shape-10"
							width="47.23438762392722"
							opacity="0.20243723639966738"
							transform="matrix(0.9925790603498137,0.12160102365967493,-0.12160102365967493,0.9925790603498137,82.82795788306882,-108.36896284836382)"
							fill="none"
							stroke="#00a19d"
							filter="url(#bbburst-blur-3)"></use>
						<use
							xlinkHref="#bbburst-shape-8"
							width="34.459266939891975"
							opacity="0.5956809678809607"
							transform="matrix(0.7141770392235042,0.699965111020506,-0.699965111020506,0.7141770392235042,664.9489722162357,-261.94306696130667)"
							fill="none"
							stroke="#ffbd9b"
							filter="url(#bbburst-blur-1)"></use>
						<use
							xlinkHref="#bbburst-shape-10"
							width="15.780147576312283"
							opacity="0.8956660372937251"
							transform="matrix(0.9997358697294321,-0.02298240144841273,0.02298240144841273,0.9997358697294321,680.8882216026282,-377.91207494617316)"
							fill="none"
							stroke="#00a19d"></use>
						<use
							xlinkHref="#bbburst-shape-10"
							width="26.946618255881962"
							opacity="0.6471250295941089"
							transform="matrix(0.8448989425401915,0.5349259545904145,-0.5349259545904145,0.8448989425401915,964.7246297826139,5.671060032266553)"
							fill="none"
							stroke="#ffa6d5"
							filter="url(#bbburst-blur-1)"></use>
						<use
							xlinkHref="#bbburst-shape-10"
							width="31.104225209958486"
							opacity="0.5799275659381977"
							transform="matrix(0.7501269356283432,-0.6612938684464202,0.6612938684464202,0.7501269356283432,120.21017751406077,-173.30655388348976)"
							fill="none"
							stroke="#ffbd9b"
							filter="url(#bbburst-blur-1)"></use>
						<use
							xlinkHref="#bbburst-shape-1"
							width="20.97442858913512"
							opacity="0.6655713193935787"
							transform="matrix(0.9788270738767058,-0.2046889333744404,0.2046889333744404,0.9788270738767058,374.97991898164264,-357.26110977748857)"
							fill="#2c2891"></use>
						<use
							xlinkHref="#bbburst-shape-6"
							width="42.560449742136576"
							opacity="0.2428426223350565"
							transform="matrix(0.983987010541507,0.17824018370050085,-0.17824018370050085,0.983987010541507,770.2847934554269,355.524244076632)"
							fill="#2c2891"
							filter="url(#bbburst-blur-3)"></use>
						<use
							xlinkHref="#bbburst-shape-4"
							width="40.975004150659394"
							opacity="0.5446788575286592"
							transform="matrix(0.9293378408669629,-0.36923052085754177,0.36923052085754177,0.9293378408669629,356.5232545271266,-2.5807813696977178)"
							fill="#ffa6d5"
							filter="url(#bbburst-blur-1)"></use>
						<use
							xlinkHref="#bbburst-shape-4"
							width="47.50923719240558"
							opacity="0.27984196213674983"
							transform="matrix(0.999998491294915,-0.0017370687648442967,0.0017370687648442967,0.999998491294915,473.52983388801977,253.85181911512143)"
							fill="#ffbd9b"
							filter="url(#bbburst-blur-2)"></use>
						<use
							xlinkHref="#bbburst-shape-6"
							width="17.487010677261516"
							opacity="0.9411231015556809"
							transform="matrix(0.858938807162435,-0.5120782416295123,0.5120782416295123,0.858938807162435,567.7097910999348,-283.7036713507775)"
							fill="#ffbd9b"></use>
						<use
							xlinkHref="#bbburst-shape-6"
							width="25.443605228368718"
							opacity="0.8265038161668976"
							transform="matrix(0.9176204450837923,-0.3974578201070183,0.3974578201070183,0.9176204450837923,477.4218272640391,-278.2011911900354)"
							fill="#ff5c58"></use>
						<use
							xlinkHref="#bbburst-shape-4"
							width="31.837672165331114"
							opacity="0.7114145069207671"
							transform="matrix(0.9783386774227791,0.20701070566192278,-0.20701070566192278,0.9783386774227791,732.4703467042274,-139.41053626180906)"
							fill="#ffbd9b"></use>
						<use
							xlinkHref="#bbburst-shape-6"
							width="44.73378628985316"
							opacity="0.4229363817989391"
							transform="matrix(0.7494617033661858,-0.6620476985742457,0.6620476985742457,0.7494617033661858,-55.4661100888394,-224.4841081790878)"
							fill="#00a19d"
							filter="url(#bbburst-blur-2)"></use>
						<use
							xlinkHref="#bbburst-shape-10"
							width="18.431277937018525"
							opacity="0.8660803593871761"
							transform="matrix(0.9857528189154233,0.16820041617159145,-0.16820041617159145,0.9857528189154233,833.5066072289716,-264.2270675229345)"
							fill="none"
							stroke="#ff5c58"></use>
						<use
							xlinkHref="#bbburst-shape-4"
							width="34.485736519825984"
							opacity="0.6271586089390779"
							transform="matrix(0.9862922555245393,0.16500783827538912,-0.16500783827538912,0.9862922555245393,637.4253199537011,-90.32881629396508)"
							fill="#ffa6d5"
							filter="url(#bbburst-blur-1)"></use>
						<use
							xlinkHref="#bbburst-shape-1"
							width="10.778035931905455"
							opacity="0.9540798793307258"
							transform="matrix(0.8041621505146062,0.5944099895524333,-0.5944099895524333,0.8041621505146062,991.9885949533914,-305.0599717527553)"
							fill="#ffa6d5"></use>
						<use
							xlinkHref="#bbburst-shape-1"
							width="31.30684706912313"
							opacity="0.6329440244106315"
							transform="matrix(0.9852429418220529,-0.17116175270727682,0.17116175270727682,0.9852429418220529,390.5963433173355,-221.77696518805033)"
							fill="#00a19d"
							filter="url(#bbburst-blur-1)"></use>
						<use
							xlinkHref="#bbburst-shape-10"
							width="21.37209148878522"
							opacity="0.7242788123454874"
							transform="matrix(0.7869076892833726,0.6170707322071783,-0.6170707322071783,0.7869076892833726,786.7926476015743,-208.6354673722135)"
							fill="none"
							stroke="#ffa6d5"></use>
						<use
							xlinkHref="#bbburst-shape-8"
							width="27.495028726001102"
							opacity="0.7736375859970851"
							transform="matrix(0.7247334729663755,0.689029312266246,-0.689029312266246,0.7247334729663755,958.4031316265781,-100.02093318424403)"
							fill="none"
							stroke="#ff5c58"></use>
						<use
							xlinkHref="#bbburst-shape-4"
							width="57.65689033658546"
							opacity="0.3350105178436411"
							transform="matrix(0.8269059752550273,0.5623402067143448,-0.5623402067143448,0.8269059752550273,476.446243250868,61.704797896276546)"
							fill="#00a19d"
							filter="url(#bbburst-blur-2)"></use>
						<use
							xlinkHref="#bbburst-shape-10"
							width="75.48071700430091"
							opacity="0.17007061826371317"
							transform="matrix(0.985141469913699,-0.17174482308435526,0.17174482308435526,0.985141469913699,94.96373917512587,186.69994683022628)"
							fill="none"
							stroke="#ffa6d5"
							filter="url(#bbburst-blur-3)"></use>
						<use
							xlinkHref="#bbburst-shape-6"
							width="18.110098399849512"
							opacity="0.8614714017813165"
							transform="matrix(0.7344976384094526,0.6786112430331058,-0.6786112430331058,0.7344976384094526,928.9462065135297,-272.81993303573125)"
							fill="#00a19d"></use>
						<use
							xlinkHref="#bbburst-shape-8"
							width="30.588885417111854"
							opacity="0.6529360177445065"
							transform="matrix(0.9292938135398465,0.36934131655769153,-0.36934131655769153,0.9292938135398465,816.9869827536825,-50.45257035777752)"
							fill="none"
							stroke="#ffbd9b"></use>
						<use
							xlinkHref="#bbburst-shape-4"
							width="47.52180445264274"
							opacity="0.35862045427945677"
							transform="matrix(0.8815803956467189,0.47203390345543467,-0.47203390345543467,0.8815803956467189,908.001153611648,274.77137401063266)"
							fill="#2c2891"
							filter="url(#bbburst-blur-2)"></use>
						<use
							xlinkHref="#bbburst-shape-6"
							width="55.00589483611322"
							opacity="0.30780702228866363"
							transform="matrix(0.9974459021296262,0.0714259919414211,-0.0714259919414211,0.9974459021296262,338.40676676716106,113.85025751784832)"
							fill="#ffbd9b"
							filter="url(#bbburst-blur-2)"></use>
						<use
							xlinkHref="#bbburst-shape-10"
							width="18.36793514760139"
							opacity="0.9058510750959333"
							transform="matrix(0.9274545960597675,0.3739357862623118,-0.3739357862623118,0.9274545960597675,919.6870629634409,-282.7243769659702)"
							fill="none"
							stroke="#ffa6d5"></use>
						<use
							xlinkHref="#bbburst-shape-1"
							width="20.13782327247639"
							opacity="0.8738799909864468"
							transform="matrix(0.99998059803053,-0.006229250557140161,0.006229250557140161,0.99998059803053,682.2886196716845,-330.26524628255925)"
							fill="#00a19d"></use>
						<use
							xlinkHref="#bbburst-shape-10"
							width="22.513781514773815"
							opacity="0.8783837095194164"
							transform="matrix(0.8998406766571803,0.4362187027548774,-0.4362187027548774,0.8998406766571803,896.6565015590338,-263.81694099772744)"
							fill="none"
							stroke="#ffbd9b"></use>
						<use
							xlinkHref="#bbburst-shape-10"
							width="21.746155712262784"
							opacity="0.7742142326977031"
							transform="matrix(0.9469050851615431,0.3215132340903104,-0.3215132340903104,0.9469050851615431,880.7974420492584,-159.61004512906672)"
							fill="none"
							stroke="#ffa6d5"></use>
						<use
							xlinkHref="#bbburst-shape-6"
							width="49.80007128272846"
							opacity="0.4623198508380598"
							transform="matrix(0.8602522499786028,-0.5098686756477118,0.5098686756477118,0.8602522499786028,174.16698409283438,27.381236543180023)"
							fill="#2c2891"
							filter="url(#bbburst-blur-1)"></use>
						<use
							xlinkHref="#bbburst-shape-10"
							width="19.25807666907238"
							opacity="0.7809250758004049"
							transform="matrix(0.9718470637733319,-0.23561257316865197,0.23561257316865197,0.9718470637733319,480.5458753254547,-349.0253149588951)"
							fill="none"
							stroke="#00a19d"></use>
					</svg>
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
				<div className="">
					<svg className="-mb-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 98.79">
						<path
							d="M1014.5-213.94V-162H-65.5v-64.39a100,100,0,0,0,35.36,15c56.08,11.43,81.68-37.58,144-35,38.25,1.58,38,20.44,81,21,47,.61,53.77-21.86,92-22,57.2-.22,66.72,50,126,58,46,6.22,58-21.63,122-37,77.87-18.71,87.42,16,180,11,116.57-6.27,160.7-65.92,239-38C982.78-243.07,1002.91-225.66,1014.5-213.94Z"
							transform="translate(65.5 260.77)"
							fill="#fffffe"
						/>
					</svg>
					<HomePageNotice />
				</div>
			</div>
			<svg className="-mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 80">
				<path
					d="M-103.65-202.42V-245h1080v24.71c-43.92,33.3-82.1,45-106.49,49.94-110.78,22.26-221.37-39.2-324.4-30.94-23.65,1.89-48.67,5.44-48.67,5.44-57.36,9.25-68.3,15-88.91,17.5-76.71,9.27-90.89-50.47-159.09-38.5-35.22,6.18-49.92,25.36-92,22-24.74-2-42.21-10.41-48.89-13.35-33.78-14.88-94.27-22.94-211.47,5.78Z"
					transform="translate(103.65 245)"
					fill="#fffffe"
				/>
				<path d="M187.89-183.35" transform="translate(103.65 245)" fill="#fffffe" />
			</svg>
			<div className="bg-rose-600">
				<div className="relative h-[1000px] bg-[url('/ooorganize.svg')] bg-contain">
					{products.length > 0 ? (
						<Grid className="grid-cols-2 p-4 pt-8 sm:grid-cols-2 lg:grid-cols-3">
							<ProductGridItems products={products} />
						</Grid>
					) : null}
				</div>
			</div>
		</div>
	);
}
