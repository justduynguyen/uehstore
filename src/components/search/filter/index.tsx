import { SortFilterItem } from '@/components/constants';
import clsx from 'clsx';
import FilterItemDropdown from './dropdown';
import { FilterItem } from './item';

export type ListItem = SortFilterItem | PathFilterItem;
export type PathFilterItem = { title: string; path: string };

function FilterItemList({ list }: { list: ListItem[] }) {
	return (
		<>
			{list.map((item: ListItem, i) => (
				<FilterItem key={i} item={item} />
			))}
		</>
	);
}

export default function FilterList({ list, title, display }: { list: ListItem[]; title?: string; display?: string }) {
	return (
		<>
			<nav>
				{title ? <h3 className={clsx('hidden text-xl font-semibold md:block', display ? `text-${display}` : 'text-start')}>{title}</h3> : null}
				<ul className="hidden md:block">
					<FilterItemList list={list} />
				</ul>
				<ul className="md:hidden">
					<FilterItemDropdown list={list} />
				</ul>
			</nav>
		</>
	);
}
