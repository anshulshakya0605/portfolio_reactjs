import React from 'react'

function Home() {
    return (
        <>
        <div className="max-w-screen-2xl container px-4 md:px-20 my-20">
        <div className="flex flex-col md:flex-row">
            <div className='md:w-1/2 mt-12 md:mt-12 space-y-2'>
                <span>Welcome In My Portfolio</span>
                <div className='flex space-x-1 text-2xl md:text-4xl'>
                    <h1>Hello I'm s </h1>
                    <span className='text-red-700 font-bold'>Developer</span>
                </div> 
                <p className='mt-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt minus voluptatum voluptate incidunt odio, omnis quo inventore provident consequuntur ullam alias quis facilis modi totam officia ratione similique suscipit dolor neque quasi amet. Numquam facere maiores non quae laudantium. Eaque.</p>
            </div>
            <div>Right</div>
        </div>
        </div>
        </>
    )
}

export default Home
