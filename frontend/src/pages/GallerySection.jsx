import AchievementGalleryCard from "../components/AchievementGalleryCard";
import galleryBg from "../assets/GalleryBG.png"

const GallerySection = () => {
    return (
        <section
            className="
                relative w-full py-24 overflow-hidden 
                h-screen flex justify-center items-center flex-col
            "
            style={{
                backgroundImage: `url(${galleryBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#fff8f0]/90 backdrop-blur-[1px]" />

            {/* Content */}
            <div className="relative z-10 w-full">

                {/* Header */}
                <div className="px-6 sm:px-12 mb-12 w-full flex flex-col items-start">
                    <p className="sm:text-6xl text-3xl font-semibold playfair-display">
                        Visual <span className="text-[#ad2e24]">J</span>ourney
                    </p>
                    <p className="mt-4 max-w-xl text-black/70 zalando-sans sm:text-xl">
                        A visual archive of academic milestones, research work,
                        and artistic expression through movement.
                    </p>
                </div>

                {/* Scrolling Track */}
                <div className="relative w-full overflow-hidden">
                    <div className="marquee-track">

                        {[...Array(2)].map((_, i) => (
                            <div key={i} className="flex gap-8">
                                <AchievementGalleryCard
                                    image="https://images.unsplash.com/photo-1523050854058-8df90110c9f1"
                                    category="Education"
                                    caption="Academic Excellence & Merit Recognition"
                                />

                                <AchievementGalleryCard
                                    image="https://images.unsplash.com/photo-1581093588401-12c8d6f8e1d1"
                                    category="Research"
                                    caption="Behavioral Research & Psychological Studies"
                                />

                                <AchievementGalleryCard
                                    image="https://images.unsplash.com/photo-1518837695005-2083093ee35b"
                                    category="Dance"
                                    caption="Classical & Contemporary Performance Practice"
                                />
                            </div>
                        ))}

                    </div>
                </div>





            </div>
        </section>
    )
}

export default GallerySection;
