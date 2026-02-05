import { useEffect, useState } from "react";
import AchievementPaperCard from "../components/AchievementPaperCard.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import { sanityClient, urlFor } from '../sanityClient.js'; // Adjust path as needed

const AchievementsSection = () => {
    const [achievements, setAchievements] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAchievements = async () => {
            try {
                const query = `*[_type == "achievements"] | order(year desc) {
                    _id,
                    title,
                    category,
                    year,
                    description,
                    image
                }`;
                const data = await sanityClient.fetch(query);
                setAchievements(data);
            } catch (error) {
                console.error('Error fetching achievements:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchAchievements();
    }, []);

    return (
        <section className="w-full py-16 bg-[#f3f3f3] sm:p-5 p-4 ">

            {/* Section Title */}
            {/* <div className="sm:m-3 inline-block p-[3px] rounded-full bg-gradient-to-r from-black via-gray-300 to-white">
                <span className="block p-2 px-4 sm:px-5 sm:text-4xl text-xl rounded-full font-bold google-sans-flex bg-[#f3f3f3] text-black">
                    Achievements
                </span>
            </div> */}
            <SectionHeader
                label="Achievemnts"
                title="On the Journey of Doing Something Impactfull"
            />

            {/* Horizontal Scroll */}
            <div className="overflow-x-auto scrollbar-hide sm:px-10 py-10">
                <div className="flex gap-6 w-max">
                    {loading ? (
                        <p>Loading...</p>
                    ) : achievements.length > 0 ? (
                        achievements.map((achievement) => (
                            <AchievementPaperCard
                                key={achievement._id}
                                tag={achievement.category.charAt(0).toUpperCase() + achievement.category.slice(1)}
                                date={achievement.year}
                                title={achievement.title}
                                description={achievement.description}
                                image={achievement.image ? urlFor(achievement.image).url() : 'https://images.unsplash.com/photo-1761839271800-f44070ff0eb9?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                            />
                        ))
                    ) : (
                        <p>No achievements found.</p>
                    )}
                </div>
            </div>

            <div className="w-full flex gap-2 justify-center items-center mt-5">
                <p>Check out More</p>
                <p className="material-symbols-outlined text-black text-xs">
                    east
                </p>
            </div>

        </section>
    )
}

export default AchievementsSection