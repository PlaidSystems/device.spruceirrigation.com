import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { iconLookup } from '../utilities/iconLookup';
import { imageLookup } from '../utilities/imageLookup';

//absolute solidbox with slide-in option
export const SolidBox = ({ size, fromColor = 'blue-500', toColor = fromColor, width = 'w-full', height = 'h-80', topMargin = 'mt-0', isSlide, isRounded }) => {

    return (
		<div className={`${size} absolute overflow-hidden hidden lg:inline`}>
			<div className={`w-full bg-gradient-to-r from-${fromColor} to-${toColor} h-full ${isSlide && 'animate-slideIn'} ${isRounded && 'rounded-2xl'}`}/>			
		</div>
	)
}

//absolute solidbox with slide-in option
export const FillBox = ({ size, pattern = 'textureSquares', width = 'w-full', height = 'h-80', topMargin = 'mt-0', isSlide, isRounded }) => {

    return (
		<div className={`${size} absolute overflow-hidden hidden lg:inline`}>
			<div className={`w-full ${pattern} h-full ${isSlide && 'animate-slideIn'} ${isRounded && 'rounded-2xl'}`}/>			
		</div>
	)
}

//absolute image with fade-in option
export const ImageBox = ({ image, isFade, width = 'w-full', height = 'h-auto', margin = 'mt-0', padding = 'p-8' }) => {

    return (
		<div className={`block lg:absolute lg:${margin} ${height} w-full lg:${width} ${isFade && `animate-fadeIn`}`}>
			<img className={`lg:${padding}`} src={imageLookup[image]}/>
		</div>
	)
}

//icon card
export const IconBox = ({ icon, title, width = '64', height = '20', margin = '4',
	padding = 'auto', bgColor = 'transparent', textColor = 'white', click, id }) => {

    return (
		<div className={`m-${margin} h-12 lg:h-${height} w-${width} p-${padding}
			bg-${bgColor} text-lg lg:text-2xl text-${textColor} border-${textColor}
			flex rounded-lg cursor-pointer justify-center items-center border-2
			hover:text-${textColor} hover:opacity-75
			focus:outline-none`}
			onClick={click}
			id={id}
		>
			{icon && <FontAwesomeIcon icon={iconLookup[icon]} size="lg"/>}
			<span className="mx-2">
				{title}
			</span>
		</div>
	)
}

//bullet icon card
export const BulletBox = ({ icon, text, width = 'full', height = '20', margin = '1',
	padding = 'auto', bgColor = 'transparent', textColor = 'gray-800', iconColor = 'green-400',
	click }) => {

    return (
		<div className={`m-${margin} h-${height} w-${width} p-${padding}
			bg-${bgColor} text-xl text-${iconColor}
			flex justify-center items-center
			${click && `cursor-pointer hover:text-${textColor} hover:opacity-75`}
			focus:outline-none`}
			onClick={click}
		>
			{icon && <FontAwesomeIcon icon={iconLookup[icon]} size="lg"/>}
			<span className={`text-${textColor} mx-2`}>
				{text}
			</span>
		</div>
	)
}
