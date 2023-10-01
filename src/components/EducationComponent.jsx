import React from 'react';
import { useState } from 'react';

function EducationComponent({ prop }) {
    const { name, content, preview, url } = prop;
    const [isFlipped, setIsFlipped] = useState(false);
    const handleFlip = () => {
        setIsFlipped(prevState => !prevState)
    }
    // useEffect(() => {
    //     console.log(isFlipped);
    // }, [isFlipped])
    return (
        <div
            className={`
        rounded-[15px] min-w-[15rem] w-4/5 sm:w-1/6 relative h-52
        bg-indigo-600 bg-opacity-50 backdrop-blur-sm glass shadow-2xl md:hover:shadow-slate-400 overflow-hidden
        text-xl text-slate-200 text-center cursor-pointer 
        group  items-center
        transition-all duration-1000
        [&_div]:transition-all 
        [transform-style:preserve-3d]
        `}
        // ${isFlipped ? 'flipCard' : 'backVisi'}

        >

            {isFlipped ? (
                <div className="w-full h-full bg-black bg-opacity-95 absolute cursor-auto p-4 text-sm flex flex-col justify-center flipCard">
                    <p className='mb-2'>{content}</p>
                    <a href={isFlipped && url} className='rounded-lg bg-indigo-600 bg-opacity-60 p-1 md:hover:bg-opacity-80 cursor-pointer' target='_blank'>Ver Certificación</a>
                    <button onClick={handleFlip} className=' absolute top-1 right-1'>❌</button>
                </div>
            ) :
                <div className='w-full h-full' onClick={handleFlip}>
                    <h2 className="
            text-xs md:text-xl text-center
            w-full md:h-full md:px-2 py-3 md:z-10 md:absolute 
            flex items-center justify-center flex-wrap
            bg-black bg-opacity-60 md:opacity-0 transition-all duration-700 md:group-hover:opacity-100">
                        {name}
                    </h2>
                    <img
                        src={preview}
                        alt={name}
                        className="w-full h-full  md:group-hover:scale-110 z-0 transition-transform duration-1000"
                    />
                </div>
            }
        </div>
    );
}

export default EducationComponent;