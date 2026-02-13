export default function EducationItem({ level, details, score, isItalic = false }) {
    return (
        <div>
            <h3 className="font-bold text-lg text-teal-200">{level}</h3>
            {details.map((detail, index) => (
                <p key={index} className={index === 0 && isItalic ? "italic text-teal-100" : ""}>
                    {detail}
                </p>
            ))}
            <p className="text-sm mt-1">{score}</p>
        </div>
    );
}
