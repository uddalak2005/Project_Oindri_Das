const AchievementPaperCard = ({ title, date, description, tag, image }) => {
    // Default image URL
    const defaultImage = "https://plus.unsplash.com/premium_photo-1683749805319-2c481ae54bc1?q=80&w=1315&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return (
        <div className="min-w-[320px] max-w-[320px] sm:min-w-[420px] sm:max-w-[420px] bg-[#fdfcf8] 
        border border-black/10 rounded-sm p-6 
        flex flex-col justify-between 
        hover:scale-[1.02] transition-transform duration-300 max-h-[600px]">

            {/* Top Meta */}
            <div className="flex justify-between items-center text-xs uppercase tracking-wide text-black/50 mb-3">
                <span>{tag}</span>
                <span>{date}</span>
            </div>

            {/* Image */}
            <div className="w-full h-[200px] sm:h-[300px] overflow-hidden border border-black/20">
                <img
                    src={image || defaultImage}
                    alt={title}
                    className="w-full h-full object-cover 
                    grayscale contrast-90 opacity-90"
                />
            </div>

            {/* Headline */}
            <h3 className="text-xl font-semibold playfair-display leading-snug mb-3 mt-3">
                {title}
            </h3>

            {/* Divider */}
            <div className="w-10 h-[2px] bg-black mb-3"></div>

            {/* Body */}
            <p className="text-sm leading-relaxed text-black/70 zalando-sans">
                {description}
            </p>
        </div>
    )
}

export default AchievementPaperCard
