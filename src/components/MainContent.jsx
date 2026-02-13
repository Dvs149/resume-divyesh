
import { resumeData } from '../data/resumeData';
import SectionHeader from './SectionHeader';
import ExperienceItem from './ExperienceItem';

export default function MainContent() {
    const { profile, objective, skills, summary, experience, additionalInfo, strengths } = resumeData;

    return (
        <main className="flex-1 p-8 md:p-12 text-gray-800 bg-white print:p-4 print:text-[10px] print:leading-tight">
            <header className="mb-10 text-center md:text-left print:mb-2">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 tracking-tight mb-2 uppercase print:text-2xl print:mb-1">{profile.name}</h1>
            </header>

            <section className="mb-8 print:mb-2">
                <SectionHeader title="Objective" />
                <p className="text-gray-700 leading-relaxed print:text-gray-900">
                    {objective}
                </p>
            </section>

            <section className="mb-8 print:mb-2">
                <SectionHeader title="Technical Skills" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 print:gap-1 print:text-gray-900">
                    <ul className="list-disc list-inside space-y-1 print:space-y-0">
                        {skills.col1.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                    <ul className="list-disc list-inside space-y-1 print:space-y-0">
                        {skills.col2.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="mb-8 print:mb-2">
                <SectionHeader title="Professional Summary" />
                <ul className="list-disc list-inside space-y-2 text-gray-700 print:space-y-0.5 print:text-gray-900">
                    {summary.map((item, index) => (
                        <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
                    ))}
                </ul>
            </section>

            <section className="mb-8 print:mb-2">
                <SectionHeader title="Work Experience" />
                <div className="space-y-6 print:space-y-2">
                    {experience.map((job, index) => (
                        <ExperienceItem
                            key={index}
                            company={job.company}
                            duration={job.duration}
                            points={job.points}
                        />
                    ))}
                </div>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 print:gap-4 print:mt-2">
                <section>
                    <SectionHeader title="Additional Information" />
                    <ul className="list-disc list-inside space-y-1 text-gray-700 print:text-gray-900 print:space-y-0">
                        {additionalInfo.map((info, index) => (
                            <li key={index}>{info}</li>
                        ))}
                    </ul>
                </section>

                <section>
                    <SectionHeader title="Strength" />
                    <ul className="list-disc list-inside space-y-1 text-gray-700 print:text-gray-900 print:space-y-0">
                        {strengths.map((strength, index) => (
                            <li key={index}>{strength}</li>
                        ))}
                    </ul>
                </section>
            </div>

        </main>
    );
}
