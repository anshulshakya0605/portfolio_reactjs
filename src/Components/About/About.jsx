import React from 'react'
import logo1 from '../../assets/logo1.jpeg'
import { ReactTyped } from 'react-typed'

function About() {
    return (
        <>
            <div className='max-w-screen-2xl container px-4 md:px-20 my-10'>
                <div className='space-y-6'>
                    <h1 className='text-3xl font-bold text-yellow-400 mt-7 text-center hover:scale-100 duration-300 hover:text-white'> About Us </h1>
                    <p className='text-sm md:px-10'>Welcome to Anshul Kumar Portfolio!
                        As a passionate front-end developer, I specialize in creating dynamic, responsive, and user-friendly web applications. With a deep understanding of HTML, CSS, JavaScript, and modern frameworks like React, I bring ideas to life through clean and efficient code.</p>
                </div>

                <div className='flex flex-col md:flex-row text-center'>
                    <div className='md:w-1/3'>
                        <img className='rounded-full mt-6 border-4 shadow-lg' src={logo1} alt="anshul image" />
                    </div>
                    <div className='md:w-8/12'>
                        <h1 className='text-4xl text-white mt-8'>ANSHUL <span> <ReactTyped
                            className='text-yellow-400'
                            strings={['SHAKYA', 'KUMAR']}
                            typeSpeed={70}
                            backSpeed={80}
                            loop={true}
                        /> </span></h1>

                        <p className='mt-1 text-lg'>Front End Developer</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
