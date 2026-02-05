import React from 'react'

const ExperienceCard = ({ title, organization, yearStart, yearEnd, description, type }) => {
    return (
        <div className="group flex justify-between items-center py-8 sm:px-6 border-b border-black/10 hover:bg-black/5 transition-all duration-300 cursor-pointer rounded-2xl gap-4">

            {/* LEFT CONTENT */}
            <div className="w-2/3">
                <p className="text-2xl md:text-3xl font-semibold satoshi mb-1">
                    {title}
                </p>
                <p className="text-black/60 text-base sm:text-xl zalando-sans">
                    {organization}
                </p>
                {description && (
                    <p className="text-black/50 text-sm zalando-sans mt-2">
                        {description}
                    </p>
                )}
            </div>

            {/* RIGHT YEAR */}
            <div className="w-1/3 text-right">
                <div className="text-2xl md:text-4xl font-bold satoshi tracking-tight google-sans-flex">
                    {yearStart} – {yearEnd}
                </div>
                {type && (
                    <p className="text-black text-lg mt-2 capitalize zalando-sans">
                        {type}
                    </p>
                )}
            </div>

        </div>
    )
}

export default ExperienceCard