import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import React from 'react';
import { iconLookup } from '../utilities/iconLookup';

export const ProductCard = (data) => {

	return(
		<div className="flex flex-wrap justify-center w-full">

			{data.data.map(feature => {
				if (feature.name === 'learn'){return null}
				return (
					<Link to={'/' + feature.link}
						className={`m-4 sm:w-80 w-full rounded-lg flex p-4 hover:bg-${feature.color}-100`} key={'key-' + feature.name}
					>

						<div className={`px-4 text-${feature.color}-400`}>
							<FontAwesomeIcon icon={iconLookup[feature.icon]} size="lg"/>
						</div>
						<div className="flex-row">
							<div className={`font-bold text-gray-700 text-md`}>
								{feature.title}
							</div>
							<div className="mt-1 text-sm font-hairline text-gray-700">
								{feature.subtitle}
							</div>
						</div>

					</Link>
				)
			})}

		</div>
		)
};
