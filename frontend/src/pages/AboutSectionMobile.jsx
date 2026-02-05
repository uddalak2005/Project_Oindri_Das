import React, { useState, useEffect } from 'react';
import floralImg from '../assets/floral.png';
import mindfullness from '../assets/mindfulness.png';
import aboutImg from '../assets/about_img.jpeg';
import ShuffleCards from '../components/ShuffleCards.jsx';
import Bullet from "../assets/bullet.png";
import { sanityClient, urlFor } from '../sanityClient.js';

const AboutSection = () => {
    const [profileImage, setProfileImage] = useState(null);

    useEffect(() => {
        const fetchProfileImage = async () => {
            try {
                const data = await sanityClient.fetch(`*[_type == "profileImage"][0] {
                    image,
                    altText
                }`);
                setProfileImage(data);
            } catch (error) {
                console.error("Error fetching profile image:", error);
            }
        };

        fetchProfileImage();
    }, []);

    return (
        <div className="about-section bg-[#f3f3f3] p-2">
            <div className="">
                <div className=" flex flex-col justify-between p-4">
                    <div>
                        <div className="text-5xl flex satoshi">
                            <p className="text-6xl font-black">*</p>
                            About Me
                        </div>
                    </div>

                    <div className="bg-white rounded-3xl flex-row p-3 mb-2">
                        {/* Icon */}
                        <div className='bg-[#f3f3f3] p-1 rounded-full border-2 border-black h-10 w-10 flex items-center justify-center flex-shrink-0'>
                            <img src={mindfullness} alt="" className='h-6 w-6' />
                        </div>

                        {/* Text */}
                        <div className='flex items-center gap-3 justify-between'>
                            <div className='w-1/2 text-xs leading-relaxed flex-shrink-0'>
                                I am a psychology student deeply engaged in research that explores the complexities of human behavior and cognition. My academic pursuits are complemented by my lifelong passion for dance.
                            </div>

                            {/* Image Container */}
                            <div className='flex-1 overflow-hidden max-h-70 m-0 p-0 rounded-2xl'>
                                <img
                                    src={profileImage?.image ? urlFor(profileImage.image).url() : aboutImg}
                                    alt={profileImage?.altText || "Profile Image"}
                                    className='w-full h-full object-cover rounded-2xl'
                                />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 ">
                        <ShuffleCards />
                        <div className="bg-white rounded-3xl flex flex-col items-start gap-4 justify-center p-3">
                            <div className='flex justify-center items-start gap-2 text-xl'>
                                <div>
                                    <img src={Bullet} alt="" className='w-20' />
                                </div>
                                <p className='text-left text-xs'>
                                    To become a researcher who bridges psychology and human behavior with real-world impact.
                                </p>
                            </div>
                            <div className='flex justify-center items-start gap-2 text-xl'>
                                <div>
                                    <img src={Bullet} alt="" className='w-20' />
                                </div>
                                <p className='text-left text-xs'>
                                    To express emotional intelligence and mental well-being through the art of Indian classical dance.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection;
