import React from 'react';

import { ExperimentRandom } from 'react-abtest';
import { imageLookup } from '../utilities/imageLookup';
import { SubscribeModal } from './Modal';

//variations
const A = (<CtaBlock
    title="Interested in starting a free trial?"
    tagline=""
    buttonTitle="Apply Now"
    tag="cta-subscribe"
    />);
const B = (<CtaBlock
    title="Interested in free onboarding?"
    tagline=""
    buttonTitle="Apply Now"
    tag="cta-contact"
    />);
const C = (<CtaBlock
    title="Keep me in the loop"
    tagline=""
    buttonTitle="Subscribe"
    tag="cta-learn"
    />);

// Optional, but useful for logging test data.
//const logger = (variant) => console.log(`User placed in group ${variant}.`);

const ABCCtaBlock = () => {
  return (
    <ExperimentRandom
      variants={[A, B, C]}
    />
  );
}

export default ABCCtaBlock;


export function CtaBlock({ data, text, bgColor = 'gray-100', textColor = 'gray-800', width = 'full', inputText, buttonText  }) {

    return (
        <section className={`bg-${bgColor}`}>

            <div className="flex flex-wrap px-8 py-24 text-center md:mx-auto md:w-3/4 md:flex-row">
				<p className={`w-full md:w-1/2 text-4xl font-normal text-${textColor}`}>
					{text}
				</p>

                <div className="flex flex-col justify-center w-full my-6 md:w-1/2">
                    <div className="flex justify-center w-full md:mt-6">
						<SubscribeModal creditcard CTAButtonText={data.CTAButtonText} data={data} event_id="cta_modal"/>
					</div>
                </div>
            </div>

        </section>
    )
}

export function CtaBlockImg({ data, text, bgColor = 'gray', textColor = 'white', width = 'full', inputText, buttonText  }) {

    return (
        <div className={`bg-gradient-to-br from-${bgColor}-700 to-${bgColor}-800 overflow-hidden xxl:mx-56 my-24 xxl:rounded-3xl shadow-md`}>

            <div className="flex flex-wrap px-4 py-16 overflow-hidden md:mx-auto md:flex-row">
				<div className={`w-full md:w-1/2 text-4xl text-center font-normal text-${textColor}`}>
					{text}                    
                    <div className="flex justify-center w-full md:mt-10">
                        <SubscribeModal creditcard CTAButtonText={data.CTAButtonText} data={data} event_id="cta_modal"/>
					</div>
				</div>
                <div className="object-cover h-64 -mx-4 md:w-1/2 md:-mt-10">
                    <img className="" src={imageLookup.FeedbackBoard}/>
                </div>
            </div>

        </div>
    )
}
