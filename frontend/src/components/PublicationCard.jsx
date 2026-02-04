const PublicationCard = ({
    image,
    title,
    subtitle,
    link
}) => {
    return (
        <div className="w-[320px] sm:w-[420px]">
            {/* Image Card */}
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block h-[230px] rounded-2xl overflow-hidden bg-neutral-200"
            >
                {/* Image */}

                <div className="w-full h-[200px] sm:h-[300px] overflow-hidden border border-black/20">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-500" />

                {/* Center Arrow */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-black/80 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-xl">↗</span>
                    </div>
                </div>
            </a>

            {/* Text Below Image */}
            <div className="mt-3">
                <h3 className="text-base font-medium text-black leading-snug">
                    {title}
                </h3>
                {subtitle && (
                    <p className="text-sm text-black/50 mt-1">
                        {subtitle}
                    </p>
                )}
            </div>
        </div>
    );
};

export default PublicationCard;
