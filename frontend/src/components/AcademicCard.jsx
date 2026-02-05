import React from 'react'

const AcademinCard = ({ title, subtitle, year }) => {
    return (
        <div className="group flex justify-between items-center py-8 sm:px-6 border-b border-black/10 hover:bg-black/5 transition-all duration-300 cursor-pointer rounded-2xl gap-4">

            {/* LEFT CONTENT */}
            <div className="w-2/3">
                <p className="text-2xl md:text-3xl  font-semibold satoshi mb-1">
                    {title}
                </p>
                <p className="text-black/60 text-base zalando-sans">
                    {subtitle}
                </p>
            </div>

            {/* RIGHT YEAR */}
            <div className="w-1/3 text-right text-2xl md:text-4xl font-bold satoshi tracking-tight google-sans-flex">
                {year}
            </div>

        </div>
    )
}

export default AcademinCard