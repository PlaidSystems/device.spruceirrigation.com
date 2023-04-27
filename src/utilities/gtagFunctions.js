
//google analytics function
export function gtagEventClick(
 result 
) {		
	console.log(result)
	if (typeof window !== 'undefined' && window.gtag){
		process.env.GATSBY_PRODUCTION === 'true' && typeof window !== 'undefined' && window.gtag('event', 'click', ` ${result} ` )		
	}
	//process.env.GATSBY_PRODUCTION === 'true' && window.gtag('event', `subscribe_${event_id}`, { 'event_id': event_id, 'subscribe': result.success });
	//return (process.env.GATSBY_PRODUCTION === 'true' && typeof window !== 'undefined' && window.gtag('event', 'click', ` ${data} ` ));
}

//check if ok
export function isGtagEvent(){
	if (typeof window !== 'undefined' && window.gtag){return true;}
	return false;
}