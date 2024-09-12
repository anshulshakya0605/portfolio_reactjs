import React from 'react'
import logo from '../../assets/logo.png'
import { IoLogoCss3, IoLogoFacebook, IoLogoGithub, IoLogoHtml5, IoLogoJavascript, IoLogoLinkedin, IoLogoWhatsapp } from 'react-icons/io'
import { IoLogoReact } from 'react-icons/io5'
import { ReactTyped, Typed } from 'react-typed'
function Home() {
    return (
        <>
            <div className="max-w-screen-2xl container px-4 md:px-20 my-10">
                <div className="flex flex-col md:flex-row">
                    <div className='md:w-1/2 mt-12 md:mt-12 space-y-2 order-2 md:order-1'>
                        <span>Welcome In My Portfolio</span>
                        <div className='flex space-x-1 text-2xl md:text-4xl'>
                            <h1>Hello I'm a </h1>
                            <ReactTyped
                                className='text-yellow-500 font-bold'
                                strings={["Developer", "Programer", "Coder"]}
                                typeSpeed={40}
                                backSpeed={50}
                                loop={true}
                            />
                            {/* <span className='text-yellow-500 font-bold'>Developer</span> */}
                        </div>
                        <p className='leading-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt minus voluptatum voluptate incidunt odio, omnis quo inventore provident consequuntur ullam alias quis facilis modi totam officia ratione similique suscipit dolor neque quasi amet. Numquam facere maiores non quae laudantium. Eaque.</p>
                        <br />
                        <div className='flex justify-between'>
                            <div className='space-y-2 text-center'>
                                <h2>Available On</h2>
                                <div className='flex space-x-2 text-3xl rounded-full'>
                                    <IoLogoGithub />
                                    <IoLogoLinkedin />
                                    <IoLogoFacebook />
                                    <IoLogoWhatsapp />
                                </div>
                            </div>
                            <div className='space-y-2 text-center'>
                                <h2>Currently Working On</h2>
                                <div className='flex space-x-2 text-3xl rounded-full'>
                                    <IoLogoHtml5 className='hover:scale-110 duration-200 cursor-pointer' />
                                    <IoLogoCss3 className='hover:scale-110 duration-200 cursor-pointer' />
                                    <IoLogoJavascript className='hover:scale-110 duration-200 cursor-pointer' />
                                    <IoLogoReact className='hover:scale-110 duration-200 cursor-pointer' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='md:w-1/2 mt-12 md:mt-10 space-y-2 md:ps-8 order-1'>
                        <img src={logo} className='bg-gray-300 md:w-[450px] md:h-[450px] rounded-full md:ml-24' alt="" />
                    </div>
                </div>
                <div>

                </div>

            </div>
        </>
    )
}

export default Home
