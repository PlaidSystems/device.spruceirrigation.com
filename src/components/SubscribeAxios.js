import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { iconLookup } from '../utilities/iconLookup';
import sendSubscribe from '../utilities/subscribeFunctions';

export const SubscribeAxios = ({ id, color = 'indigo' }) => {	
		const [success, setSuccess] = useState(false);
		const [email, setEmail] = useState();
				
		const postEmail = () => {
			sendSubscribe('embarkable', email)
			.then(result => setSuccess(result));
		}
		
		function inputChange(event){
			//console.log(event)
			const target = event.target
			const value = target.value
			//console.log(value)
			setEmail(value);
		}

		return (
			<React.Fragment>
				<div className="flex justify-left">
				{success ? 
					<div>
						<div className="inline-block w-64 px-4 py-1 mr-0 text-gray-800 bg-red-200 border-gray-200 rounded-full lg:rounded-l-full focus:outline-none"
							onClick={() => setSuccess(false)}
						>
							Subscribed!
						</div>
						<button className={`inline-block px-6 py-1 my-1 font-bold text-white uppercase bg-${color}-400 rounded-full lg:my-0 lg:rounded-r-full hover:bg-${color}-200 hover:text-${color}-600 focus:outline-none`} 
							onClick={() => setSuccess(false)}
						>
							<FontAwesomeIcon icon={iconLookup.faSync} size="sm"/>
						</button>
					</div>
					:
					<div>
						<input className="w-64 px-4 py-1 text-gray-800 bg-white rounded-full lg:rounded-r-none focus:outline-none" 
							placeholder="your@mail.com"
							type="email" 
							onChange={inputChange}
						/>
						<button className={`px-6 py-1 my-1 font-bold text-white uppercase bg-${color}-400 rounded-full lg:my-0 lg:rounded-l-none hover:bg-${color}-200 hover:text-${color}-600 focus:outline-none`}
							onClick={postEmail}
							id={id}
						>
							Subscribe
						</button>
					</div>
				}
				</div>
			</React.Fragment>
		)
	}