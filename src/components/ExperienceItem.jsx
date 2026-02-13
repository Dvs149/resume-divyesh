export default function ExperienceItem({ company, duration, points }) {
    return (
        <div className="break-inside-avoid">
            <div className="flex flex-col md:flex-row justify-between mb-1 print:flex-row print:justify-between print:mb-0">
                <h3 className="font-bold text-gray-800">{company}</h3>
                <span className="text-gray-600 italic print:text-[9px]">{duration}</span>
            </div>
            <ul className="list-disc list-inside text-gray-700 ml-4 print:text-gray-900">
                {points.map((point, index) => (
                    <li key={index} dangerouslySetInnerHTML={{ __html: point }} />
                ))}
            </ul>
        </div>
    );
}
