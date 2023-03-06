
import { skills } from "../data/data";

export function SkillsSection() {
    return (
        <section className="bg-primary rounded m-5 py-3">
            <div className="container mx-auto">
                <div className="grid grid-cols-4 max-xl:grid-cols-5  max-lg:grid-cols-5 max-md:grid-cols-6 max-sm:grid-cols-4">
                    {skills.map((skills, index) => {
                        return (
                            <div className="card shadow-xl border border-primary-content m-2 rounded-lg 50 hover:bg-secondary
                                space-x-1.5 px-4 py-1.5 duration-100" key={index}>
                                <img className="mask mask-squircle" src={skills.src} alt={skills.alt} />
                                <h2 className="card-title justify-center">
                                    {skills.name}
                                </h2>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}