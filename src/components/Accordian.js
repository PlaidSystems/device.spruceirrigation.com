import React, { useState } from 'react';
import { ImageBox } from './Boxes';

export default function Accordian(
    { data }
) {
    const [openIndex, setIndex] = useState(null);

    return (
        <div className="w-full">
            {data.map((sectionData, index) => {
                return (
                    <AccordianSection sectionData={sectionData} index={index} isOpen={index === openIndex} 
                    setOpen={setIndex} key={'key-' + index} id={sectionData.id}/>
                )
            })}
        </div>
    )
}

export const AccordianSection = ( { sectionData, index, isOpen, setOpen, bgColor = 'white', borderColor = 'gray', textColor = 'gray', image, id } ) => {
    
    return (
        <article className={`${isOpen && `shadow-lg border-t-4 border-${borderColor}-500 bg-${bgColor}`} border-t-2 border-gray-200`} 
            onClick={() => setOpen(isOpen ? null : index)} key={'key-' + index} id={id}>
            
                <header className="flex items-center justify-between p-5 pl-8 pr-8 cursor-pointer select-none">
                        <span className="text-xl font-light text-gray-700">
                            {sectionData.title}
                        </span>
                        <div className="flex items-center justify-center border rounded-full border-grey w-7 h-7" >

                            <svg aria-hidden="true" className="" data-reactid="266" fill="none" height="24" stroke="#606F7B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                {isOpen ? <polyline points="6 12 12 6 18 12">
                                </polyline> :
                                <polyline points="6 9 12 15 18 9">
                                </polyline>}
                            </svg>
                        </div>
                </header>
                {isOpen && <AccordianOpen sectionData={sectionData} textColor={textColor} image={image}/>}
            
        </article>
    )
}

const AccordianOpen = ( { sectionData, textColor, image } ) => {

    return (
        <div>
            <div className={`pb-5 pl-8 pr-8 text-xl font-medium text-${textColor}-700`}>
                <div className="pl-4">                    
                    {sectionData.description}
                </div>
                {image && 
                    <div>
                        <ImageBox image={image}/>
                    </div>
                }
            </div>
        </div>
    )
}