import linkData from '../data/linkData';
import { getObjectFromArray } from '../utilities/arrayFunctions';

export function getLinkByName(
	name
) {
	return getObjectFromArray(linkData, 'name', name).link;
}