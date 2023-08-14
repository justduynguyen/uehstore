import { ReadonlyURLSearchParams } from 'next/navigation';

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
export const createUrl = (pathname: string, params: URLSearchParams | ReadonlyURLSearchParams) => {
	// const paramsString = params.toString();
	// const queryString = `${paramsString.length ? '?' : ''}${paramsString}`;

	return `${pathname}${'queryString'}`;
};

export const ensureStartsWith = (stringToCheck: string, startsWith: string) =>
	stringToCheck.startsWith(startsWith) ? stringToCheck : `${startsWith}${stringToCheck}`;
