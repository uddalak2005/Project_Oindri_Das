const AchievementPaperCard = ({ title, date, description, tag, image }) => {
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

            {image && (
                <div className="w-full h-[200px] sm:h-[300px] overflow-hidden border border-black/20">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover 
                        grayscale contrast-90 opacity-90"
                    />
                </div>
            )}

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