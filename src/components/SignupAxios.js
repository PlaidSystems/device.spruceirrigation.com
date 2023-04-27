import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { iconLookup } from '../utilities/iconLookup';

import sendSubscribe from '../utilities/subscribeFunctions';


export const SignupAxios = ({ id, color = 'blue', inputText, buttonText, event_id, onSubscribe }) => {
		const [success, setSuccess] = useState(false);
		const [email, setEmail] = useState();
		const [firstName, setFirstName] = useState();
		const [lastName, setLastName] = useState();
		const [company, setCompany] = useState();
		const [validURL, setValidURL] = useState(false);
		const [companyURL, setCompanyURL] = useState(false);

		const postEmail = async() => {
			sendSubscribe('embarkable', email, firstName, lastName, company)
			.then(result => (setSuccess(result) + ga(result)))// + onSubscribe(!result)))
		}

		function ga(result){
			process.env.GATSBY_PRODUCTION === 'true' && typeof window !== 'undefined' && window.gtag('event', `subscribe_${event_id}`, { 'event_id': event_id, 'subscribe': result });
		}

		function inputChange(event){
			//const target = event.target
			const name = event.target.name
			const value = event.target.value
			//console.log(value)
			switch (name) {
				case 'email':
					setEmail(value);
					break;
				case 'firstName':
					setFirstName(value);
					break;
				case 'lastName':
					setLastName(value);
					break;
				case 'company':
					setCompany(value);
					//check names placeholder
					const inUseNames = ['test', 'app', 'embarkable'];
					const url = value.replace(/\s/g, '-');
					setCompanyURL(url)
					if (inUseNames.indexOf(url) > -1) {setValidURL(false)}
					else {setValidURL(true)}

					break;
				default:
					break;
			}
		}

		const sectionClass = `flex flex-col w-full`
		const labelClass = `flex w-full px-4 text-xs lg:text-sm text-white`;
		const inputClass = `p-3 m-1 text-sm lg:text-md text-gray-800 bg-white border-none border-gray-200 rounded-full focus:outline-none focus:bg-red-200`;

		return (
			<React.Fragment>

				{success ?
				<div className="flex flex-col justify-center">
					<div className="my-12 text-5xl text-white textBlock">Welcome to Embarkable</div>					
					<div className="text-2xl text-white textBlock">Check your email to complete account activation</div>	
				</div>
				: <div className="flex flex-col justify-center gap-3">
					<div className={sectionClass}>
						<div className={labelClass}>
							email
						</div>
						<input className={inputClass}
							placeholder="  your@mail.com"
							type="email"
							name="email"
							onChange={inputChange}
						/>
					</div>
					<div className={sectionClass}>
						<div className={labelClass}>
							first name
						</div>
						<input className={inputClass}
							placeholder="  first name"
							name="firstName"
							onChange={inputChange}
						/>
					</div>
					<div className={sectionClass}>
						<div className={labelClass}>
							last name
						</div>
						<input className={inputClass}
							placeholder="  last name"
							name="lastName"
							onChange={inputChange}
						/>
					</div>
					<div className={sectionClass}>
						<div className={labelClass}>
							company
						</div>
						<input className={inputClass}
							placeholder="  company"
							name="company"
							onChange={inputChange}
							autoComplete="off"
						/>
					</div>

					<div className={sectionClass}>
						<div className={labelClass}>
							url
						</div>
						<div className={`${company ? 'visible' : 'visible'} text-sm lg:text-2xl bg-purple-300 m-1 p-2 rounded-full text-center text-purple-600`}>
							<span className={`${validURL ? 'text-purple-900 font-bold' : 'line-through text-red-500'}`}>{companyURL}</span>.embarkable.io
						</div>
					</div>
					
					<div className={`flex w-full my-4 justify-center md:justify-end m-auto`}>
						<button className="px-3 py-3 font-bold text-white uppercase align-middle bg-red-400 rounded-full hover:bg-red-200 hover:text-red-600 focus:outline-none"
							onClick={postEmail}
							id="signup"
						>
							<span className="mx-4">Try for Free</span>
							<FontAwesomeIcon icon={iconLookup.faChevronCircleRight} size="lg"/>
						</button>
					</div>
				</div>
				}
			</React.Fragment>
		)
	}