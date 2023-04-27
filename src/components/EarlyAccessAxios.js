import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { iconLookup } from '../utilities/iconLookup';
import sendSubscribe from '../utilities/subscribeFunctions';

export const EarlyAccessAxios = ({ id, color = 'blue', inputText, buttonText, event_id, onSubscribe }) => {
		const [success, setSuccess] = useState(false);
		const [email, setEmail] = useState();

		const postEmail = () => {
			sendSubscribe('embarkable', email)
			.then(result => (setSuccess(result) + ga(result) + onSubscribe(!result)))
		}

		function ga(result){
			process.env.GATSBY_PRODUCTION === 'true' && typeof window !== 'undefined' && window.gtag('event', `subscribe_${event_id}`, { 'event_id': event_id, 'subscribe': result });
		}

		function inputChange(event){
			//console.log(event)
			const target = event.target
			const value = target.value
			setEmail(value);
		}

		const setContainerClass = `py-5 flex-wrap justify-center w-full  mx-auto text-center align-bottom xl:flex`;
		const setInputClass = `flex my-2 xl:m-0 h-12 px-6 text-md py-2 font-bold w-full xl:w-2/3 text-gray-800 bg-white
			border-${color}-400 xl:border-r-0 border-2 rounded-full xl:rounded-r-none focus:outline-none`;
		const setButtonClass = `h-12 xl:-ml-6 px-4 py-2 w-32 border-none font-bold text-lg text-white bg-${color}-400
			rounded-full xl:my-0 hover:bg-${color}-200 hover:text-${color}-600 focus:outline-none justify-center`

		return (
			<React.Fragment>
				{success ?
					<div className={setContainerClass}>
						<div className={setInputClass}
							onClick={() => setSuccess(false)}
						>
							Subscribed!
						</div>
						<button className={setButtonClass}

							onClick={() => setSuccess(false)}
						>
							<FontAwesomeIcon icon={iconLookup.faSync} size="md"/>
						</button>
					</div>
					:
					<div className={setContainerClass}>
						<input className={setInputClass}
							placeholder={inputText}
							type="email"
							onChange={inputChange}
						/>
						<button className={setButtonClass}
							onClick={postEmail}
							id={id}
						>
							{buttonText}
						</button>
					</div>
				}
			</React.Fragment>
		)
	}