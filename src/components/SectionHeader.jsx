export default function SectionHeader({ title, className = "" }) {
    return (
        <h2 className={`text-xl font-bold text-teal-700 uppercase border-b-2 border-teal-700 pb-1 mb-4 print:text-sm print:mb-1 print:pb-0.5 ${className}`}>
            {title}
        </h2>
    );
}
