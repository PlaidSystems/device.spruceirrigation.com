import React, { useState } from 'react';

import { ExperimentRandom } from 'react-abtest';

import { imageLookup } from '../utilities/imageLookup';
import { FillBox } from './Boxes';
import { SubscribeModal } from './Modal';


//tag used for google analytics
const A = (
	<TitleBlockSurveyModal
		title="Connect with your Customers"
		subtitle="Embarkable is the simple way to get great user feedback."
		color="indigo"
		image=""
		tag="title-factory"
	/>);

const B = (
	<TitleBlockSurveyModal
		// title="Schedule User Interviews without the logistics"
		title="User interviews without the logistics"
		// subtitle="The simple way to get user interviews for low-touch SaaS companies."
		subtitle="The simplest way for low-touch SaaS companies to connect with their customers to validate, learn, and grow."
		color="red-300"
		image=""
		tag="title-factory"
	/>);

//Optional, but useful for logging test data.
//const logger = (variant) => console.log(`User placed in group ${variant}.`);

const ABCTitleBlock = () => {
  return (
	<ExperimentRandom
	  variants={[A, B]}
	  //logger={logger}
	/>
  );
}

export default ABCTitleBlock;


export function TitleBlockSurveyModal({ title, subtitle, color, image, CTA }) {


	return (
		<section className={`relative w-full h-screen overflow-hidden`}>

			<div className="flex flex-wrap w-full mx-auto my-16 bg-gray-100 md:w-5/6 md:bg-opacity-0 md:my-12 md:flex-row">
				<div className="w-full p-4 md:px-12 md:pt-32 md:pb-64 md:w-1/2">

					<h1 className="my-12 text-3xl font-semibold text-gray-700 textBlockLeft md:text-5xl">
						Build <span className="font-extrabold text-pink-500">better products </span>with <span className="font-extrabold text-purple-500">more meaningful </span>feedback.
					</h1>
					<h2 className="mb-10 text-lg text-gray-600 textBlockLeft md:text-2xl">
						{subtitle}
					</h2>
					<div className="flex w-full textBlockLeft">
						<SubscribeModal CTAButtonText={CTA.CTAButtonText} data={CTA} event_id="title_modal" creditcard/>
					</div>

				</div>
				<div className="w-full p-5 md:mt-24 md:w-1/2">					
					<img className="block overflow-hidden md:rounded-xl md:absolute md:ml-24 md:w-2/5" src={imageLookup[image]}/>
				</div>
			</div>

		</section>
	)
}

export function TitleBlockSplit({ title, subtitle, color, image, CTA }) {
	
	return (
		<section className={`flex flex-col overflow-hidden relative w-full xxl:h-screen xxl:pt-10 md:flex-row`}>

			
			<div className="w-full p-4 pt-12 xl:m-32 md:px-12 md:pt-10 md:w-1/2">

				<h1 className="my-8 text-3xl font-semibold text-gray-700 textBlockLeft xl:text-5xl">
					Build <span className="font-extrabold text-pink-500">better products </span>with more <span className="font-extrabold text-purple-500">meaningful feedback.</span>
				</h1>
				<h2 className="mb-10 text-lg text-gray-500 textBlockLeft xl:text-2xl">
					{subtitle}
				</h2>
				<div className="flex w-full textBlockLeft">
					<SubscribeModal CTAButtonText={CTA.CTAButtonText} data={CTA} event_id="title_modal" creditcard/>
				</div>

			</div>
			
			<div className="w-full cursor-pointer xl:-ml-24 md:pt-10 md:w-1/2">					
				<img className="block py-3 overflow-hidden md:p-4 frame-gradient md:mt-40 md:-ml-10 md:rounded-xl md:absolute md:w-1/2" src={imageLookup[image]}/>
			</div>			

		</section>
	)
}
