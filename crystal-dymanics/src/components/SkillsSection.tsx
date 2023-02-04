
import { skills } from "../data/data";

export function SkillsSection() {
    return (
        <section className="bg-violet-100 rounded m-5 py-3">
            <div className="container mx-auto">
                <div className="grid max-xl:grid-cols-5  max-lg:grid-cols-5 max-md:grid-cols-6 max-sm:grid-cols-4">
                    {skills.map((skills, index) => {
                        return (
                            <div className="items-center justify-center backdrop-blur-[0.1px] border border-violet-500 m-2 rounded-lg text-cyan-50 hover:bg-violet-500
                                space-x-1.5  px-4 py-1.5 duration-100" key={index}>
                                <img src={skills.src} alt={skills.alt} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}