import React from "react";
import heroBg from "../assets/hero_bg_mandala.jpg";
import heroImg from "../assets/hero_image.jpg"
import FadeContent from "../components/FadeContent.jsx";

const HeroSection = () => {
    return (
        <div
            className="hero-section"
            style={{
                backgroundImage: `url(${heroBg})`,
            }}
        >
            {/* 👉 Add your content here */}
            <div className="hero-content d-flex w-full">
                {/* Edit stuff here */}
                <div className="w-3/5 d-flex justify-center items-center p-5">
                    <div className="d-flex flex-col justify-center ">
                        <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                            <p className="text-black text-9xl inter ">Oindri Das.</p>
                        </FadeContent>

                        <div className="d-flex items-center gap-3 bg-white p-3 m-2 rounded-full text-black text-xl w-2/3">
                            <div className="bg-lime-400 h-5 w-5 rounded-full"></div>
                            Exploring the Human Mind Through Research & Rhythm
                        </div>

                        <div className="w-2/3 p-3 text-xl">
                            <p className="text-black text-left">
                                Exploring the human mind through research, and expressing it through dance.
                                Third-year Psychology student, Research Associate, and Indian Classical Dancer on a journey where science and art converge.
                            </p>
                        </div>
                        <div className="mt-40 p-3 flex items-center">
                            <p className="text-black text-2xl font-bold underline">
                                Scroll Down

                            </p>
                            <span class="material-symbols-outlined text-black">
                                arrow_cool_down
                            </span>
                        </div>
                    </div>
                </div>
                <div className="w-2/5 hero-image p-5" >
                    <img src={heroImg} alt="" />
                </div>

            </div>
        </div>
    );
};

export default HeroSection;
