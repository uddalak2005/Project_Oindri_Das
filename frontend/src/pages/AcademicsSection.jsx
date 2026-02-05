import React, { useEffect, useState } from 'react'
import AcademicCard from '../components/AcademicCard.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import { sanityClient } from '../sanityClient.js' // Adjust path as needed

const AcademicsSection = () => {
    const [academics, setAcademics] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchAcademics = async () => {
            try {
                const query = `*[_type == "academics"] | order(yearStart desc) {
                    _id,
                    degree,
                    institution,
                    yearStart,
                    yearEnd
                }`
                const data = await sanityClient.fetch(query)
                setAcademics(data)
            } catch (error) {
                console.error('Error fetching academics:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchAcademics()
    }, [])

    return (
        <div className='bg-[#fff8f0] sm:p-5 p-4 py-5'>
            <SectionHeader
                label="Academics"
                title="Learning and Growing"
            />
            {/* 
            <div className="text-5xl flex satoshi">
                <p className="text-6xl font-black">*</p>
                About Me
            </div> */}

            <div className="w-full sm:p-3">
                {loading ? (
                    <p>Loading...</p>
                ) : academics.length > 0 ? (
                    academics.map((academic) => (
                        <AcademicCard
                            key={academic._id}
                            title={academic.degree}
                            subtitle={academic.institution}
                            year={`${academic.yearStart} – ${academic.yearEnd}`}
                        />
                    ))
                ) : (
                    <p>No academic records found.</p>
                )}
            </div>

        </div>
    )
}

export default AcademicsSection