import { Link } from 'gatsby';
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'

export const CSTBlock = (props) => {
	
	return (

		<div className="flex flex-col justify-center w-full gap-6 px-2 mx-auto my-8 sm:w-4/5 lg:flex-row">
			
			<div className="overflow-hidden bg-white rounded-lg shadow-xs lg:w-96 dark:bg-gray-800 hover:bg-orange-200">
				<Link to={'/quote-builder'}>
				<div className="flex flex-wrap items-center justify-center p-4 xl:flex-no-wrap">
					<div className="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500">
						<svg fill="currentColor" viewBox="0 0 20 20" className="w-20 h-20">
							<path
								d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
							></path>
						</svg>
					</div>
					<div>
						<p className="mb-2 text-lg font-semibold text-gray-600 dark:text-gray-400">
							Create
						</p>
						<p className="font-light text-gray-700 dark:text-gray-200">
							Spend less time quoting with quote builder
						</p>
					</div>
				</div>
				</Link>
			</div>			

			<div className="mx-auto my-auto text-gray-400 transform rotate-90 lg:rotate-0">
				<FontAwesomeIcon icon={faArrowCircleRight} size="4x"/>
			</div>

			<div className="overflow-hidden bg-white rounded-lg shadow-xs lg:w-96 dark:bg-gray-800 hover:bg-green-200">
				<Link to={'/send-quote'}>
				<div className="flex flex-wrap items-center justify-center p-4 xl:flex-no-wrap">
					<div className="p-3 mr-4 text-green-500 bg-green-100 rounded-full dark:text-green-100 dark:bg-green-500">
						<svg fill="currentColor" viewBox="0 0 20 20" className="w-20 h-20">
							<path
								fillRule="evenodd"
								d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
								clipRule="evenodd"
							></path>
						</svg>
					</div>
					<div>
						<p className="mb-2 text-lg font-semibold text-gray-600 dark:text-gray-400">
							Send & Track
						</p>
						<p className="font-light text-gray-700 dark:text-gray-200">
							Send and automatically follow-up
						</p>
					</div>
				</div>
				</Link>
			</div>

			<div className="mx-auto my-auto text-gray-400 transform rotate-90 lg:rotate-0">
				<FontAwesomeIcon icon={faArrowCircleRight} size="4x"/>
			</div>

			<div className="overflow-hidden bg-white rounded-lg shadow-xs lg:w-96 dark:bg-gray-800 hover:bg-blue-200">
				<Link to={'/measure-results'}>
				<div className="flex flex-wrap items-center justify-center p-4 xl:flex-no-wrap">
					<div className="p-3 mr-4 text-blue-500 bg-blue-100 rounded-full dark:text-blue-100 dark:bg-blue-500">
						<svg fill="currentColor" viewBox="0 0 20 20" className="w-20 h-20">
							<path
								d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
							></path>
						</svg>
					</div>
					<div>
						<p className="mb-2 text-lg font-semibold text-gray-600 dark:text-gray-400">
							Track Metrics
						</p>
						<p className="font-light text-gray-700 dark:text-gray-200">
							Grow your business with acceptance, profit and category metrics
						</p>
					</div>
				</div>
				</Link>
			</div>
			
			<div className="mx-auto my-auto text-gray-400 transform rotate-90 lg:rotate-0">
				<FontAwesomeIcon icon={faArrowCircleRight} size="4x"/>
			</div>

			<div className="overflow-hidden bg-white rounded-lg shadow-xs lg:w-96 dark:bg-gray-800 hover:bg-blue-200">
				<Link to={'/measure-results'}>
				<div className="flex flex-wrap items-center justify-center p-4 xl:flex-no-wrap">
					<div className="p-3 mr-4 text-blue-500 bg-blue-100 rounded-full dark:text-blue-100 dark:bg-blue-500">
						<svg fill="currentColor" viewBox="0 0 20 20" className="w-20 h-20">
							<path
								d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
							></path>
						</svg>
					</div>
					<div>
						<p className="mb-2 text-lg font-semibold text-gray-600 dark:text-gray-400">
							Track Metrics
						</p>
						<p className="font-light text-gray-700 dark:text-gray-200">
							Grow your business with acceptance, profit and category metrics
						</p>
					</div>
				</div>
				</Link>
			</div>
			
		</div>
		)
 };

 /*
export const ProductJSON =
[
	{
		'name': 'builder',
		'title': 'Quote Builder',
		'subtitle': 'semiconductor',
		'link': '/#',
		'description': 'Your data is YOURS. We will never share, sell or monetize your data in any way.',
		'icon': 'svgPeople'
	},
	{
		'name': 'trace-ability',
		'title': 'Trace-ability',
		'subtitle': 'semiconductor',
		'link': '/#',
		'description': 'Your data is YOURS. We will never share, sell or monetize your data in any way.',
		'icon': 'svgPeople'
	},
	{
		'name': 'measure',
		'title': 'Measure',
		'subtitle': 'semiconductor',
		'link': '/#',
		'description': 'Your data is YOURS. We will never share, sell or monetize your data in any way.',
		'icon': 'svgPeople'
	},
	{
		'name': 'privacy',
		'title': 'Privacy',
		'subtitle': 'semiconductor',
		'link': '/#',
		'description': 'Your data is YOURS. We will never share, sell or monetize your data in any way.',
		'icon': 'svgPeople'
	}
]

export function svgPeople() {
	return (
		<div
			className="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500"
		>
			<svg fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5">
				<path
					d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
				></path>
			</svg>
		</div>
	)
}
*/