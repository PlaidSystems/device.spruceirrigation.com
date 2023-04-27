import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { iconLookup } from '../utilities/iconLookup';

import { SpinnerDiamond } from 'spinners-react';
import sendTrialSignup from '../utilities/trialFunctions';
import { Button } from './Button';
import { isGtagEvent } from '../utilities/gtagFunctions';
import sendSubscribe from '../utilities/subscribeFunctions';


export const TrialSignupAxios = ({ id, color = 'blue', inputText, buttonText, event_id, onSubscribe }) => {
		const [success, setSuccess] = useState(false);
		const [setupComplete, setSetupComplete] = useState(false);
		const [errorMessage, setErrorMessage] = useState('');
		const [view, setView] = useState(1);

		//form values
		const [email, setEmail] = useState();
		const [firstName, setFirstName] = useState();
		const [lastName, setLastName] = useState();
		const [password, setPassword] = useState();
		const [confirmPassword, setConfirmPassword] = useState();
		const [teamName, setTeamName] = useState();
		const [validURL, setValidURL] = useState(true);
		const [subdomain, setSubdomain] = useState(false);

		const postEmail = async() => {
			sendTrialSignup('embarkable', email, firstName, lastName, password, confirmPassword, teamName, subdomain)
			.then(result => (redirectTimer(result.success) + setSuccess(result.success) + setErrorMessage(result.message) + subscribe(result.success) + ga(result)));
			//not used to close modal + onSubscribe(!result)))
		}

		//redirect link timer
		function redirectTimer(result){
			if (result === true){setTimeout(() => setSetupComplete(true), 30000);}
		}

		function ga(result){
			isGtagEvent() && window.gtag('event', `subscribe_${event_id}`, { 'event_id': event_id, 'subscribe': result.success });
		}

		function subscribe(result){
			console.log('subscribe', result)
			if (result === true){sendSubscribe('embarkable', email, firstName, lastName, subdomain);}
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
				case 'password':
					setPassword(value);
					break;
				case 'confirmPassword':
					setConfirmPassword(value);
					break;
				case 'teamName':
					setTeamName(value);
					break;
				case 'subdomain':
					//check names placeholder
					const inUseNames = ['test', 'app', 'embarkable'];
					
					var url = value.replace(/[^0-9A-Za-z]/g, '-');					

					setSubdomain(url)
					if (inUseNames.indexOf(url.toLowerCase()) > -1) {
						setValidURL(false);
						setErrorMessage('invalid subdomain');
					}
					else if (!isNaN(parseInt(url[0], 0))) {
						setValidURL(false);
						setErrorMessage('subdomain must start with letter');
					}
					else {
						setValidURL(true);
						setErrorMessage('');
					}

					break;
				default:
					break;
			}
		}

		const viewClass = `flex flex-col justify-center gap-3 my-8 lg:mx-auto lg:w-1/3 h-80`;
		const sectionClass = `flex flex-col w-full`;
		const labelClass = `flex w-full px-3 text-xs lg:text-xs text-white`;
		const inputClass = `p-2 m-1 text-sm lg:text-md text-gray-800 bg-white border-none border-gray-200 rounded-full focus:outline-none focus:bg-red-200`;

		return (
			<React.Fragment>

			{success ?
			<div className="flex flex-col justify-center mt-16">
				<div className="text-4xl text-white textBlock">Welcome to Embarkable</div>

				<div className="flex flex-col justify-center mx-auto">
					{setupComplete ?
						<React.Fragment>
							<div className="mt-16 mb-5 text-xl text-white textBlock">Your all set! Go to your new page now:</div>
							<Button link={`https://${subdomain}.embarkable.io/`} isExternal isRound isLarge
								color="pink">
								{subdomain}.embarkable.io
							</Button>
						</React.Fragment>
					:
						<React.Fragment>
							<div className="mt-4 text-2xl text-white textBlock">Sit tight while we get your account setup</div>
							<div className="justify-center mx-auto my-16">
								<SpinnerDiamond size="100" color="white" secondaryColor="#ffffff38"/>
							</div>
						</React.Fragment>
					}
				</div>
			</div>
			:

			<div className="flex flex-col">

				<div className="flex flex-col justify-center mb-3">
					<div className="text-2xl text-white textBlock">Sign-up free</div>
					<div className="text-lg text-white textBlock">No credit card required</div>
				</div>

				<div className={`${view !== 1 && 'hidden'}`}>
					<div className={viewClass}>
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
								password
							</div>
							<input className={inputClass}
								placeholder="  password"
								type="password"
								name="password"
								onChange={inputChange}
								autoComplete="off"
							/>
						</div>
						<div className={sectionClass}>
							<input className={inputClass}
								placeholder="  confirm password"
								type="password"
								name="confirmPassword"
								onChange={inputChange}
								autoComplete="off"
							/>
						</div>
					</div>
				</div>

				<div className={`${view !== 2 && 'hidden'}`}>
					<div className={viewClass}>
						<div className={sectionClass}>
							<div className={labelClass}>
								team name
							</div>
							<input className={inputClass}
								placeholder="  team name"
								name="teamName"
								onChange={inputChange}
								autoComplete="off"
							/>
						</div>
						<div className={sectionClass}>
							<div className={labelClass}>
								subdomain
							</div>
							<input className={inputClass}
								placeholder="  subdomain"
								name="subdomain"
								onChange={inputChange}
								autoComplete="off"
							/>
						</div>
						<div className={sectionClass}>
							<div className="flex flex-row justify-center p-4 text-lg bg-red-200 rounded-full">
								<div className={`font-bold text-purple-600`}>
									<span className={`${validURL === false && 'line-through text-pink-600'}`}>{subdomain}</span>.embarkable.io
								</div>
							</div>
						</div>

					</div>
				</div>

				<div className={`${view !== 3 && 'hidden'}`}>
					<div className={viewClass}>
						<div className="flex flex-col justify-center">
							<div className="my-12 text-5xl text-white textBlock">Welcome to Embarkable</div>
							<div className="text-2xl text-white textBlock">Check your email to complete account activation</div>
						</div>
					</div>
				</div>

				<div className={`flex my-2 mx-auto justify-center text-white`}>
					{errorMessage}
				</div>

				<div className={`flex justify-center m-auto`}>
					<div className="flex flex-row gap-10 rounded-full bg-none">
						{view !== 1 && <BackButton viewId={1} setView={setView} icon="faChevronCircleLeft"/>}
						{view === 1 && <SetupButton viewId={2} setView={setView} text="Team Setup" icon="faChevronCircleRight"/>}
						{view === 2 && <SetupButton viewId={3} setView={postEmail} text="Activate" icon="faChevronCircleRight"/>}
					</div>
				</div>

			</div>
			}

			</React.Fragment>
		)
	}

const BackButton = ({ viewId, text, icon, setView }) => {

	return(
		<button className="text-white rounded-full hover:text-purple-600 focus:outline-none"
			onClick={() => setView(viewId)}
			id="signup"
		>
			<FontAwesomeIcon icon={iconLookup[icon]} size="2x"/>
		</button>
	)
	}

const SetupButton = ({ viewId, setView, disable = false, text, icon  }) => {

	return(
		<button className={`px-2 py-2 text-sm font-bold text-white uppercase align-middle ${disable ? 'bg-purple-400' : 'bg-purple-600 hover:bg-pink-200 hover:text-purple-600'} rounded-full  focus:outline-none`}
			onClick={() => setView(viewId)}
			disabled={disable}
			id="signup"
		>
			{text && <span className="mx-4">{text}</span>}
			<FontAwesomeIcon icon={iconLookup[icon]} size="lg"/>
		</button>
	)
}