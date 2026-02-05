import React, { useEffect, useState } from 'react'
import ExperienceCard from '../components/ExperienceCard.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import { sanityClient } from '../sanityClient.js' // Adjust path as needed

const ExperienceSection = () => {
    const [experiences, setExperiences] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchExperiences = async () => {
            try {
                const query = `*[_type == "experience"] | order(yearStart desc) {
                    _id,
                    title,
                    organization,
                    yearStart,
                    yearEnd,
                    description,
                    type
                }`
                const data = await sanityClient.fetch(query)
                setExperiences(data)
            } catch (error) {
                console.error('Error fetching experiences:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchExperiences()
    }, [])

    return (
        <div className='bg-[#fff8f0] sm:p-5 p-4 py-5'>
            <SectionHeader
                label="Experience"
                title="Professional Journey"
            />

            <div className="w-full sm:p-3">
                {loading ? (
                    <p>Loading...</p>
                ) : experiences.length > 0 ? (
                    experiences.map((experience) => (
                        <ExperienceCard
                            key={experience._id}
                            title={experience.title}
                            organization={experience.organization}
                            yearStart={experience.yearStart}
                            yearEnd={experience.yearEnd}
                            description={experience.description}
                            type={experience.type}
                        />
                    ))
                ) : (
                    <p>No experience records found.</p>
                )}
            </div>

        </div>
    )
}

export default ExperienceSection