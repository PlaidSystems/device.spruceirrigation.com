import React from 'react';

import { imageLookup } from '../utilities/imageLookup';
import { SubscribeModal } from './Modal';


export const ImgContent = ({ data, title, text, boxColor, image, CTA, isReverse, isBorder }) => {
	//console.log(data);
	return (
		<div className={`flex py-16 flex-wrap w-full ${data.color} ${isReverse ? 'md:flex-row-reverse' : 'md:flex-row'} ${isBorder && 'border-t-2 border-b-2'}`} >
			<a id={data.id}/>
			<div className={`flex flex-col px-8 md:pt-20 justify-center md:textBlockLeft xl:pl-56 md:w-1/2`}>
				<h2 className="text-base text-gray-600 xl:w-3/4 md:text-xl">
					{data.id}
				</h2>
				<h1 className="mb-5 text-3xl font-light text-gray-800 xl:w-3/4 md:text-5xl">
					{data.title}
				</h1>
				<h2 className="text-lg text-gray-700 xl:w-3/4 md:text-xl">
					{data.text}
				</h2>
				{data.button &&
				<div className="my-6 md:w-2/3 md:my-8 ">
					<SubscribeModal CTAButtonText={data.CTAButtonText} data={CTA} buttonColor={data.buttonColor} event_id={data.event_id}/>
				</div>}
			</div>
			<div className="w-full md:my-24 md:w-1/2">
				<img className="w-full" src={imageLookup[data.image]}/>
			</div>
		</div>
	)}
