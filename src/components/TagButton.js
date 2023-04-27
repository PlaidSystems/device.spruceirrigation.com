import React from 'react';
import { Link } from 'gatsby';
import { imageLookup } from '../utilities/imageLookup';

export const TagButton = (props) => {    

    return (		
		<Link to={props.link} id={props.tag}>
			<span className="inline-block px-3 py-1 m-1 text-xs font-semibold text-gray-600 bg-gray-300 rounded-full">{props.tag}</span>
		</Link>
    )
 };

 export const UserTag = (props) => {    
	const image = props.user === 'Embarkable' ? 'natelily' : props.user
    return (		
		<div className="inline-block lg:mx-4">
			<img className="inline-block object-cover w-8 h-8 rounded-full" src={imageLookup[image]}/>
			<div className="inline-block py-2 mx-1 my-2 text-sm capitalize">by {props.user}</div>			
		</div>
    )
 };