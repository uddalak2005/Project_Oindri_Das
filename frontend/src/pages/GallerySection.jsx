import { useEffect, useState } from "react"
import AchievementGalleryCard from "../components/AchievementGalleryCard"
import galleryBg from "../assets/GalleryBG.png"
import { sanityClient, urlFor } from '../sanityClient.js' // Adjust path as needed

const GallerySection = () => {
    const [galleryItems, setGalleryItems] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchGallery = async () => {
            try {
                const query = `*[_type == "gallery"] | order(year desc) {
                    _id,
                    image,
                    category,
                    caption,
                    year
                }`
                const data = await sanityClient.fetch(query)
                setGalleryItems(data)
            } catch (error) {
                console.error('Error fetching gallery:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchGallery()
    }, [])

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
                    {loading ? (
                        <div className="flex justify-center items-center py-20">
                            <p className="text-lg text-black/50 zalando-sans">Loading gallery...</p>
                        </div>
                    ) : galleryItems.length > 0 ? (
                        <div className="marquee-track">
                            {[...Array(2)].map((_, i) => (
                                <div key={i} className="flex gap-8">
                                    {galleryItems.map((item) => (
                                        <AchievementGalleryCard
                                            key={`${item._id}-${i}`}
                                            image={urlFor(item.image).url()}
                                            category={item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                                            caption={item.caption}
                                        />
                                    ))}
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col justify-center items-center py-20">
                            <span className="material-symbols-outlined text-black/20 text-6xl mb-4">
                                photo_library
                            </span>
                            <p className="text-xl font-semibold text-black/60 satoshi mb-2">
                                No Gallery Items Yet
                            </p>
                            <p className="text-base text-black/40 zalando-sans text-center max-w-md">
                                Visual content will be featured here soon.
                            </p>
                        </div>
                    )}
                </div>

            </div>
        </section>
    )
}

export default GallerySection