import React from 'react'
import AcademicCard from '../components/AcademicCard.jsx'
import SectionHeader from '../components/SectionHeader.jsx'

const AcademicsSection = () => {
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
                <AcademicCard
                    title="Undergraduate Student in Psychology"
                    subtitle="Third-year psychology student with a focus on behavioral studies and applied research."
                    year="2022 – Present"
                />
                <AcademicCard
                    title="Undergraduate Student in Psychology"
                    subtitle="Third-year psychology student with a focus on behavioral studies and applied research."
                    year="2022 – Present"
                />
                <AcademicCard
                    title="Undergraduate Student in Psychology"
                    subtitle="Third-year psychology student with a focus on behavioral studies and applied research."
                    year="2022 – Present"
                />
            </div>

        </div>
    )
}

export default AcademicsSection