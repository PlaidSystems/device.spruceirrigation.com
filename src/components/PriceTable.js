import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import priceData from '../data/priceData';
import { getObjectFromArray } from '../utilities/arrayFunctions';
import { iconLookup } from '../utilities/iconLookup';
import { SubscribeModal } from './Modal';

function PriceTable() {
	const tierOne = getObjectFromArray(priceData, 'name', 'tierOne')
	const tierTwo = getObjectFromArray(priceData, 'name', 'tierTwo')
	const tierThree = getObjectFromArray(priceData, 'name', 'tierThree')

	return (

			<section className="py-8 ">

			<div className="container px-2 pt-4 pb-12 mx-auto text-gray-800">

				<div className="flex flex-col justify-center pt-12 my-12 sm:flex-row sm:my-4">

					<div className="flex flex-col w-5/6 mx-auto mt-4 bg-white rounded-none lg:w-1/4 lg:mx-0 lg:rounded-l-lg">
						<div className="flex-1 overflow-hidden text-gray-600 bg-white rounded-t rounded-b-none shadow">
							<div className="p-8 text-3xl font-bold text-center border-b-4">{tierOne.title}</div>
							<ul className="w-full text-sm text-center">
								<li className="py-4 border-b">{tierOne.users}</li>
								{tierOne.featureList.map((featureData, index) => {
									return <li className="py-4 border-b" key={'key' + index}>{featureData}</li>
								})}
							</ul>
						</div>
						<div className="flex-none p-6 mt-auto overflow-hidden bg-white rounded-t-none rounded-b shadow">
							<div className="w-full pt-6 text-3xl font-bold text-center text-gray-600">{tierOne.price}</div>
							<div className="flex items-center justify-center">
								<button className="px-8 py-4 mx-auto my-6 font-bold text-white rounded-full shadow-lg lg:mx-0 hover:underline gradient">Sign Up</button>
							</div>
						</div>
					</div>

					<div className="z-10 flex flex-col w-5/6 mx-auto mt-4 bg-white rounded-lg shadow-lg lg:w-1/3 lg:mx-0 sm:-mt-6">
						<div className="flex-1 overflow-hidden bg-white rounded-t rounded-b-none shadow">
							<div className="w-full p-8 text-3xl font-bold text-center">{tierTwo.title}</div>
							<div className="w-full h-1 py-0 my-0 rounded-t gradient"></div>
							<ul className="w-full text-base font-bold text-center">
								<li className="py-4 border-b">{tierTwo.users}</li>
								{tierTwo.featureList.map((featureData, index) => {
									return <li className="py-4 border-b" key={'key' + index}>{featureData}</li>
								})}
							</ul>
						</div>
						<div className="flex-none p-6 mt-auto overflow-hidden bg-white rounded-t-none rounded-b shadow">
							<div className="w-full pt-6 text-4xl font-bold text-center">{tierTwo.price}</div>
							<div className="flex items-center justify-center">
								<button className="px-8 py-4 mx-auto my-6 font-bold text-white rounded-full shadow-lg lg:mx-0 hover:underline gradient">Sign Up</button>
							</div>
						</div>
					</div>

					<div className="flex flex-col w-5/6 mx-auto mt-4 bg-white rounded-none lg:w-1/4 lg:mx-0 lg:rounded-l-lg">
						<div className="flex-1 overflow-hidden text-gray-600 bg-white rounded-t rounded-b-none shadow">
							<div className="p-8 text-3xl font-bold text-center border-b-4">{tierThree.title}</div>
							<ul className="w-full text-sm text-center">
								<li className="py-4 border-b">{tierThree.users}</li>
								{tierThree.featureList.map((featureData, index) => {
									return <li className="py-4 border-b" key={'key' + index}>{featureData}</li>
								})}
							</ul>
						</div>
						<div className="flex-none p-6 mt-auto overflow-hidden bg-white rounded-t-none rounded-b shadow">
							<div className="w-full pt-6 text-3xl font-bold text-center text-gray-600">{tierThree.price}</div>
							<div className="flex items-center justify-center">
								<button className="px-8 py-4 mx-auto my-6 font-bold text-white rounded-full shadow-lg lg:mx-0 hover:underline gradient">Sign Up</button>
							</div>
						</div>
					</div>

				</div>

			</div>

		</section>
	)}

export default PriceTable;

export const PriceBlock = ({ data }) => {

	const tier = getObjectFromArray(priceData, 'name', data)
	//splits the featurelist between top and bottom
	const featureSplit = 5
	return (
			<section className="py-2 ">

			<div className="container mx-auto text-gray-700">
				<div className="flex flex-col justify-center lg:p-12 lg:m-12 sm:flex-row sm:my-4">

					<div className="z-10 flex flex-col w-5/6 pt-10 pb-16 mx-auto rounded-lg shadow-lg bg-gradient-to-tr from-purple-200 to-pink-100 lg:w-1/2 lg:mx-0 sm:-mt-6">

						<div className="w-full pt-4 text-2xl text-center">{tier.title}</div>
						<div className="w-full pt-1 mb-6 text-xl text-center">{tier.subtitle}</div>
						
						<ul className="px-4 mx-auto text-base lg:p-0 lg:w-1/2">
							{tier.featureList.map((featureData, index) => {
								if (index >= featureSplit) {return null;}
								return (
									<div className="grid items-center grid-cols-4 py-2 border-b border-purple-200">
										<div className="flex items-center justify-center col-span-1 text-pink-500">
											<FontAwesomeIcon icon={iconLookup.faCheck} size="md"/>
										</div>
										<li className="col-span-3" key={'key' + index}>
											{featureData}
										</li>

									</div>
								)
							})}
						</ul>

						<div className="py-5">
							<div className="text-4xl font-bold text-center">{tier.price}<span className="text-base font-light text-center">/month</span></div>
							<div className="flex flex-col items-center justify-center m-4">
								<SubscribeModal creditcard small CTAButtonText={tier.CTA.CTAButtonText} data={tier.CTA} event_id="cta_modal"/>
							</div>
						</div>					

						<ul className="px-4 mx-auto text-base lg:p-0 lg:w-1/2">
							{tier.featureList.map((featureData, index) => {
								if (index <= featureSplit - 1) {return null;}
								return (
									<div className="grid items-center grid-cols-4 py-2 border-b border-purple-200">
										<div className="flex items-center justify-center col-span-1 text-pink-500">
											<FontAwesomeIcon icon={iconLookup.faCheck} size="md"/>
										</div>
										<li className="col-span-3" key={'key' + index}>
											{featureData}
										</li>

									</div>
								)
							})}
						</ul>						

					</div>
				</div>
			</div>

		</section>
	)}