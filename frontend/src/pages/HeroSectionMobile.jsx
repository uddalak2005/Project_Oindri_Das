import React, { useEffect, useState } from "react";
import heroImg from "../assets/hero_image.jpg";
import FadeContent from "../components/FadeContent.jsx";
import heroBg from "../assets/hero_bg.jpg"
import { sanityClient, urlFor } from '../sanityClient.js' // Adjust path as needed

const HeroSectionMobile = () => {
    const [heroImage, setHeroImage] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchHeroImage = async () => {
            try {
                const query = `*[_type == "heroImage"][0] {
                    image,
                    altText
                }`
                const data = await sanityClient.fetch(query)
                setHeroImage(data)
            } catch (error) {
                console.error('Error fetching hero image:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchHeroImage()
    }, [])

    return (
        <div className="hero-mobile w-full flex flex-col">
            {/* Top Image Section */}
            <div className="relative w-full min-h-[45vh] max-h-[50vh] overflow-hidden">
                <img
                    src={heroImage?.image ? urlFor(heroImage.image).url() : heroImg}
                    alt={heroImage?.altText || "Oindri Das"}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Bottom Text Section */}
            <div
                className="min-h-[45h] max-h-[60vh] flex flex-col justify-center p-5 relative"
                style={{
                    backgroundImage: `url(${heroBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* Gradient overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#fff8f0]/90 via-transparent to-transparent"></div>

                {/* Content above overlay */}
                <div className="relative z-10">
                    <div className="">
                        <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                            <p className="text-black text-7xl inter  ">Oindri Das.</p>
                        </FadeContent>
                    </div>
                    <div className="flex items-center gap-3 bg-white p-3 rounded-full text-black text-sm w-full mb-3 ">
                        <div className="bg-lime-400 aspect-square w-4 rounded-full"></div>
                        Where Mind Meets Rhythm
                    </div>

                    <div className="text-black text-sm leading-relaxed max-w-md">
                        <p>
                            Exploring the human mind through research, and expressing it through dance.
                            Third-year Psychology student, Research Associate, and Indian Classical Dancer on a journey where science and art converge.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HeroSectionMobile;