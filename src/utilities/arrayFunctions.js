
export function getObjectFromArray(
	arrayOfObjects, 
	keyName, 
	keyValue
) {
	const filteredArray = arrayOfObjects.filter( item => item[keyName] === keyValue );
	return filteredArray[0];
}
