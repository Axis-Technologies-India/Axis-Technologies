import React from 'react'

const Process = () => {

    const content = [
        {
            "title": "Get the Items you need",
            "content": "lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, repellat."
        },
        {
            "title": "Get the Items you need",
            "content": "lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, repellat."
        }, {
            "title": "Get the Items you need",
            "content": "lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, repellat."
        },
    ]

    const smallCards = [
        {
            "title" :  "Quality Service",
            "percentage" : "90%"
        },
        {
            "title" :  "Dedicated Team",
            "percentage" : "100%"
        }
    ]

    return (
        <div className='lg:w-[70%] mx-auto my-[5vh] lg:my-[20vh] grid grid-cols-1 lg:grid-cols-2 grid-rows-none place-items-center gap-[5vh] p-4 lg:gap-4'>
            <div className='flex flex-col items-center justify-center gap-6'>
            <div className='w-full lg:hidden text-center lg:text-left text-sec text-primaryColor uppercase'>
                    Process and Skills
                </div>
                {
                    content?.map((items, index) => {
                        return (
                            <div className='flex items-center justify-center gap-10' key={index}>
                                <div className='min-w-[4rem] min-h-[4rem] bg-orange-300 rounded-full flex items-center justify-center'>
                                    <div className='min-w-[3rem] min-h-[3rem] bg-primaryColor rounded-full flex items-center justify-center'>
                                        <h1 className='text-[6vw] lg:text-[1.5vw] text-white font-bold'>{index + 1}</h1>
                                    </div>
                                </div>
                                <div className='flex flex-col items-start justify-center gap-1 '>
                                    <h1 className='text-sec-head font-bold'> {items?.title} </h1>
                                    <h2 className='text-desc text-gray-500'>{items?.content}</h2>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <div className='flex flex-col items-start justify-center gap-8'>
                <div className='w-full hidden lg:block text-center lg:text-left text-sec text-primaryColor uppercase'>
                    Process and Skills
                </div>
                <div className='text-head capitalize'>
                    few reasons why you choose us
                </div>
                <h2 className='text-desc text-gray-500'>{content[0]?.content}</h2>

                <div className='w-full grid grid-cols-1 lg:grid-cols-2 grid-rows-none gap-8 lg:gap-4'>

                {
                    smallCards.map((item, index)=>{
                        return (
                            <div className='grid grid-cols-1 grid-rows-none place-items-center'>
                        <div className='w-full flex items-start justify-between font-bold'>
                            <h1 className=''>
                                {item.title}
                            </h1>
                            <h1>
                                {item.percentage}
                            </h1>
                        </div>

                        <div className='w-full h-[.5rem] bg-gray-200 '>
                            <div className='w-[80%] h-[.5rem]  bg-orange-600'>

                            </div>
                        </div>
                    </div>
                        )
                    })
                }
                </div>

                <div className='w-full grid grid-cols-3 grid-rows-none gap-4 text-[2.5vw] font-bold'>
                    <div className='text-center bg-gray-200 p-4'>
                        900+
                    </div>
                    <div className='text-center bg-gray-200 p-4'>
                        900+
                    </div>
                    <div className='text-center bg-gray-200 p-4'>
                        900+
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Process;