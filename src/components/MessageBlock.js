import React from 'react';


export const MessageBlock = ({ title, text, isLarge, isHighlight, mTop, mBottom, textColor = 'accent2-dark' }) => {
    return (		
		<section className="max-w-6xl px-2 mx-auto text-xl font-light text-center text-gray-700">
			<h2 className="mb-6 text-2xl font-bold">{title}</h2>
			<p className={`${isLarge && `text-3xl lg:text-5xl`} ${isHighlight && `text-${textColor} font-bold`}
				${mTop && `mt-12 lg:mt-32`} ${mBottom && `mb-12 lg:mb-24`}`}>
				{text}
			</p>				
		</section>		
	)
}