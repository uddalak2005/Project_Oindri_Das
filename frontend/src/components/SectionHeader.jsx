const SectionHeader = ({ label, title }) => {
    return (
        <div className="flex flex-col items-center gap-4 text-center">

            {/* Pill */}
            <div className="flex items-center gap-2 px-4 py-1.5 
        rounded-full border border-black/10 
        text-sm font-medium text-black/70 font-inter">
                <span className="w-2 h-2 bg-black rounded-full"></span>
                {label}
            </div>

            {/* Heading */}
            <p className="text-4xl text-[clamp(2.5rem,5vw,4rem)] tracking-tight leading-tight text-black">
                {title}
            </p>
        </div>
    )
}

export default SectionHeader
