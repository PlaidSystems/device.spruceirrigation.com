import React from 'react';
import { navigate } from '@reach/router';

export const LinkText = ({ link, id, children, color = 'white', isExternal, isFullwidth, isLarge }) => {    
	
	const setClass =
		`block text-white no-underline pointer hover:underline
		${isFullwidth && `lg:w-full`}
		${isLarge && `text-2xl`}
		text-${color}		
		`
	
	return (		
		<React.Fragment>
			{isExternal ?			
				<a className={setClass} id={id}
					href={link} target="_blank"
					rel="noopener noreferrer">
					{children}
				</a>
			:
				<a
					onClick = {() => {navigate(link)}}
					className={setClass}
					id={id}>
						{children}
				</a>
			}
		</React.Fragment>
	)
};
