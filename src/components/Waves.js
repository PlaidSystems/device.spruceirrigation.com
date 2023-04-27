import React from 'react';

//title block
export const TitleWave = data => {    
    
    return (
        <section className={`flex flex-wrap justify-center pt-32 bg-${data.color}-200`}>
            <div className="container flex flex-col justify-center">
                {data.title &&
                <h2 className={`px-5 py-3 mx-auto text-lg font-semibold leading-tight text-center text-blue-800 bg-${data.color}-300 md:text-3xl animate-fadeIn`}>
                    {data.title}
                </h2>}
                {data.subtitle &&
                <h1 className="p-5 text-3xl font-bold leading-tight text-center text-blue-800 md:text-6xl">
                    {data.subtitle}
                </h1>}
            </div>
            <div className="w-full md:-my-24">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#ffffff" fillOpacity="1" d="M0,128L34.3,128C68.6,128,137,128,206,144C274.3,160,343,192,411,202.7C480,213,549,203,617,176C685.7,149,754,107,823,106.7C891.4,107,960,149,1029,176C1097.1,203,1166,213,1234,202.7C1302.9,192,1371,160,1406,144L1440,128L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
                </svg>
            </div>
        </section>
    )
}
