import AchievementPaperCard from "../components/AchievementPaperCard.jsx";
import SectionHeader from "../components/SectionHeader.jsx";

const AchievementsSection = () => {
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
                    <AchievementPaperCard
                        tag="Research"
                        date="2024"
                        title="Research Associate at Correction Home"
                        description="Conducted behavioral research focusing on rehabilitation, emotional regulation, and psychological well-being of residents."
                        image="https://images.unsplash.com/photo-1761839271800-f44070ff0eb9?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    />

                    <AchievementPaperCard
                        tag="Academic"
                        date="2023"
                        title="Selected for Research Internship"
                        description="Chosen for academic research involvement based on performance and interest in applied psychology."
                        image="https://images.unsplash.com/photo-1769631417306-a1da09f42b20?q=80&w=2386&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    />

                    <AchievementPaperCard
                        tag="Recognition"
                        date="2022"
                        title="Distinction in Psychology Coursework"
                        description="Recognized for academic consistency and strong analytical performance in core psychology subjects."
                        image="https://images.unsplash.com/photo-1769109003123-99c12ae4b23c?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    />

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
