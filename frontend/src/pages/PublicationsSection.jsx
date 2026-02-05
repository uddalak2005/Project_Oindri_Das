import React, { useEffect, useState } from 'react'
import SectionHeader from '../components/SectionHeader.jsx'
import PublicationCard from '../components/PublicationCard.jsx'
import { sanityClient, urlFor } from '../sanityClient.js' // Adjust path as needed

const PublicationsSection = () => {
    const [publications, setPublications] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchPublications = async () => {
            try {
                const query = `*[_type == "publications"] | order(year desc) {
                    _id,
                    title,
                    journal,
                    year,
                    paperLink,
                    coverImage
                }`
                const data = await sanityClient.fetch(query)
                setPublications(data)
            } catch (error) {
                console.error('Error fetching publications:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchPublications()
    }, [])

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

                    <p className="text-lg leading-relaxed text-black/70 zalando-sans max-w-md text-center">
                        From studying behavioral patterns to analyzing psychological rehabilitation,
                        my research focuses on understanding human responses in structured environments.
                        Each publication reflects a step toward evidence-based, socially impactful psychology.
                    </p>
                </div>

                {/* Right – Scrollable Publication Cards */}
                <div className="lg:w-2/3 w-full">
                    {loading ? (
                        <div className="w-full flex items-center justify-center py-20">
                            <p className="text-lg text-black/50 zalando-sans">Loading publications...</p>
                        </div>
                    ) : publications.length > 0 ? (
                        <div id="publication-scroll" className="overflow-x-auto scrollbar-hide mx-3">
                            <div className="flex gap-6 w-max sm:py-6">
                                {publications.map((publication) => (
                                    <PublicationCard
                                        key={publication._id}
                                        image={publication.coverImage ? urlFor(publication.coverImage).url() : 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc'}
                                        title={publication.title}
                                        subtitle={`${publication.journal || 'Research Publication'} · ${publication.year}`}
                                        link={publication.paperLink}
                                    />
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className='w-full'>
                            <div className="w-full flex flex-col items-center justify-center py-20 px-10">
                                <span className="material-symbols-outlined text-black/20 text-6xl mb-4">
                                    description
                                </span>
                                <p className="text-xl font-semibold text-black/60 satoshi mb-2">
                                    No Publications Yet
                                </p>
                                <p className="text-base text-black/40 zalando-sans text-center max-w-md">
                                    Research work and publications will be featured here as they become available.
                                </p>
                            </div>
                        </div>
                    )}
                </div>

            </div>
        </section>
    )
}

export default PublicationsSection