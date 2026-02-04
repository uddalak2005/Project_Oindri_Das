import React from 'react'
import SectionHeader from '../components/SectionHeader.jsx'
import PublicationCard from '../components/PublicationCard.jsx'

const PublicationsSection = () => {
    return (
        <section className="w-full py-16 bg-[#f3f3f3] px-3 sm:px-5">

            <div className='p-2'>
                <SectionHeader
                    label="Publications"
                    title="Research & Scholarly Work"

                />
            </div>

            {/* Content */}
            <div className="flex flex-col lg:flex-row gap-10 sm:mt-12 mt-0">

                {/* Left – Research Narrative */}


                <div className="lg:w-1/3 w-full flex flex-col-reverse items-center p-3 sm:py-5 sm:px-5">
                    <button
                        onClick={() => {
                            document.getElementById("publication-scroll")
                                ?.scrollBy({ left: 400, behavior: "smooth" })
                        }}
                        className="shrink-0 w-14 h-14 rounded-full bg-black 
                   flex items-center justify-center
                   hover:scale-105 transition-transform m-5"
                    >
                        <span className="material-symbols-outlined text-white text-2xl">
                            north_east
                        </span>
                    </button>

                    <p className="text-lg leading-relaxed text-black/70 zalando-sans max-w-md">
                        From studying behavioral patterns to analyzing psychological rehabilitation,
                        my research focuses on understanding human responses in structured environments.
                        Each publication reflects a step toward evidence-based, socially impactful psychology.
                    </p>

                </div>

                {/* Right – Scrollable Publication Cards */}
                <div id="publication-scroll" className="lg:w-2/3 w-full overflow-x-auto scrollbar-hide mx-3">
                    <div className="flex gap-6 w-max sm:py-6">

                        <PublicationCard
                            image="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc"
                            title="Behavioral Rehabilitation Patterns"
                            subtitle="Research Publication · 2024"
                            link="https://example.com/research-paper"
                        />

                        <PublicationCard
                            image="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc"
                            title="Emotional Regulation in Institutional Settings"
                            subtitle="Journal Study · 2023"
                            link="https://example.com/research-paper"
                        />

                        <PublicationCard
                            image="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc"
                            title="Psychological Well-being & Social Reintegration"
                            subtitle="Conference Paper · 2022"
                            link="https://example.com/research-paper"
                        />
                        <PublicationCard
                            image="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc"
                            title="Psychological Well-being & Social Reintegration"
                            subtitle="Conference Paper · 2022"
                            link="https://example.com/research-paper"
                        />

                    </div>
                </div>

            </div>
        </section>
    )
}

export default PublicationsSection
