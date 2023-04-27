import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';

import React from 'react';
import { iconLookup } from '../utilities/iconLookup';
import { imageLookup } from '../utilities/imageLookup';

export const StepCard = ({ data, bgColor = 'none', textColorWhite, isArrow, isBorder }) => {

	return(
		<div className="flex flex-wrap justify-center w-full py-4">

			{data.map((feature) => {

				return (
					<React.Fragment key={'key-' + feature.name}>
						<Link to={'/#' + feature.name}
							className={`m-4 w-full md:w-56 xxl:w-80 h-56 rounded-lg ${isBorder && 'border-2'} bg-${bgColor} border-white
								flex items-self-center ${isBorder && 'shadow-md'} p-4 hover:bg-${feature.color}-600 transition-colors-shadow duration-500`}
						>

							<div className="flex-row mx-auto text-center">
								<div className={`text-${feature.color}-400`}>
									<FontAwesomeIcon icon={iconLookup[feature.icon]} size="4x"/>
								</div>
								<div className={`pt-3 pb-1 text-2xl font-bold capitalize ${textColorWhite ? 'text-white' : 'text-gray-700'}`}>
									{feature.name}
								</div>
								<div className={`px-5 text-sm lg:text-base ${textColorWhite ? 'text-white' : 'text-gray-600'}`}>
									{feature.subtitle}
								</div>
							</div>

						</Link>

						{(isArrow && feature.arrow) &&
						<div className="z-10 my-auto text-pink-300 transform rotate-90 rounded-full md:-mx-8 bg-none md:rotate-0">
							<FontAwesomeIcon icon={iconLookup.faArrowCircleRight} size="3x"/>
						</div>}
					</React.Fragment>
				)
			})}

		</div>
	)
};

export const ImageCard = ({ data, bgColor = 'none', textColorWhite, isArrow, isBorder, isHover }) => {

	return(
		<div className="flex flex-wrap justify-center w-full py-4">

			{data.map((feature) => {

				return (
					<React.Fragment key={'key-' + feature.name}>
						<Link to={'/#' + feature.name}
							className={`m-4 sm:w-64 xxl:w-80 h-96 rounded-lg ${isBorder && 'border-2'} bg-${bgColor} border-gray-400
								flex items-self-center ${isBorder && 'shadow-md'} p-4 ${isHover && `hover:bg-${feature.color}-500`} overflow-hidden`}
						>

							<div className="flex-row text-left">
								<div className={`mb-3 overflow-hidden `}>
									<img className="object-cover w-full h-40 rounded-lg xxl:h-48" src={imageLookup[feature.image]}/>
								</div>
								<div className={`pb-1 text-2xl font-bold capitalize ${textColorWhite ? 'text-white' : 'text-gray-700'}`}>
									{feature.title}
								</div>
								<div className={`text-base ${textColorWhite ? 'text-white' : 'text-gray-600'}`}>
									{feature.subtitle}
								</div>
							</div>

						</Link>

						{(isArrow && feature.arrow) &&
						<div className="z-10 my-auto -mx-8 text-gray-400 transform rotate-90 bg-white rounded-full lg:rotate-0">
							<FontAwesomeIcon icon={iconLookup.faArrowCircleRight} size="4x"/>
						</div>}
					</React.Fragment>
				)
			})}

		</div>
	)
};
