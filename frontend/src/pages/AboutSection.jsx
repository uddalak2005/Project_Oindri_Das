import React from 'react'
import floralImg from '../assets/floral.png'
import mindfullness from '../assets/mindfulness.png'
import aboutImg from '../assets/about_img.jpeg'
import ShuffleCards from '../components/ShuffleCards.jsx'
import Bullet from "../assets/bullet.png"

const AboutSection = () => {
    return (
        <div className="about-section bg-[#f3f3f3] p-5" style={{ height: 'calc(100vh - 80px)' }}>
            <div className="grid grid-cols-2 gap-5 h-full">

                {/* LEFT SIDE */}
                <div className="flex flex-col justify-between p-5">
                    <div>
                        <div className="text-7xl flex satoshi">
                            <p className="text-8xl font-black">*</p>
                            About Me
                        </div>

                        <div className="text-2xl zalando-sans px-5">
                            Focused on understanding complex human behavior and transforming it into clear, structured psychological insights through research, observation, and analysis that are scientifically grounded and practically impactful in practice.
                        </div>
                    </div>

                    <div>
                        <img src={floralImg} alt="VectorArt" className="" />
                    </div>
                </div>

                {/* RIGHT SIDE - Grid Layout */}
                <div className="grid grid-cols-2 gap-5 h-full">
                    {/* Large Box with Image and Text */}
                    <div className="row-span-2 bg-white rounded-3xl flex flex-col p-6 overflow-hidden justify-start">
                        {/* Icon */}
                        <div className='bg-[#f3f3f3] p-2 rounded-full border-2 border-black h-14 w-14 flex items-center justify-center flex-shrink-0 mb-5'>
                            <img src={mindfullness} alt="" className='w-full h-full object-contain' />
                        </div>

                        {/* Text */}
                        <div className='text-xl leading-relaxed flex-shrink-0 mb-5'>
                            I am a psychology student deeply engaged in research that explores the complexities of human behavior and cognition. My academic pursuits are complemented by my lifelong passion for dance.
                        </div>

                        {/* Image Container */}
                        <div className='flex-1 overflow-hidden max-h-110 m-0 p-0'>
                            <img src={aboutImg} alt="" className='w-full h-full object-cover rounded-2xl' />
                        </div>
                    </div>

                    {/* Shuffle Card Component - Replaces Top Box */}
                    <ShuffleCards />

                    {/* Bottom Right Box - Static or another component */}
                    <div className="bg-white rounded-3xl flex flex-col items-start gap-4 justify-center px-6">
                        <div className='flex justify-center items-start gap-2 text-xl'>
                            <div>
                                <img src={Bullet} alt="" className='w-30' />
                            </div>
                            <p className='text-left'>
                                To become a researcher who bridges psychology and human behavior with real-world impact.
                            </p>
                        </div>
                        <div className='flex justify-center items-start gap-2 text-xl'>
                            <div>
                                <img src={Bullet} alt="" className='w-30' />
                            </div>
                            <p className='text-left'>
                                To express emotional intelligence and mental well-being through the art of Indian classical dance.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AboutSection