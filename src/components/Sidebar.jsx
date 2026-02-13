import { Phone, Mail, MapPin, Calendar, Download } from 'lucide-react';
import profileImage from '../assets/profile.png';
import { resumeData } from '../data/resumeData';
import SidebarItem from './SidebarItem';
import EducationItem from './EducationItem';

export default function Sidebar() {
    const { profile, education } = resumeData;

    return (
        <aside className="bg-teal-700 text-white p-8 w-full md:w-1/4 print:w-1/4 min-h-screen print:text-[10px] print:p-4 print:min-h-0">
            <div className="mb-8 flex justify-center print:mb-4">
                <img
                    src={profileImage}
                    alt={profile.name}
                    className="w-64 h-64 rounded-full object-cover border-4 border-white shadow-lg print:w-24 print:h-24 print:border-2"
                />
            </div>
            <div className="mb-8 print:mb-2">
                <h2 className="text-2xl font-bold border-b-2 border-white/30 pb-2 mb-4 print:text-sm print:mb-1 print:pb-0.5">PROFILE</h2>
                <div className="space-y-4 print:space-y-1">
                    <SidebarItem title="Father's Name">
                        <p>{profile.fatherName}</p>
                    </SidebarItem>
                    <SidebarItem title="Date of Birth" icon={Calendar}>
                        <span>{profile.dob}</span>
                    </SidebarItem>
                </div>
            </div>

            <div className="mb-8 print:mb-2">
                <h2 className="text-2xl font-bold border-b-2 border-white/30 pb-2 mb-4 print:text-sm print:mb-1 print:pb-0.5">CONTACT</h2>
                <div className="space-y-4 print:space-y-1">
                    <SidebarItem title="Phone" icon={Phone}>
                        <a href={`tel:${profile.contact.phone}`} className="hover:text-teal-200 transition-colors">{profile.contact.phone}</a>
                    </SidebarItem>
                    <SidebarItem title="Email" icon={Mail}>
                        <a href={`mailto:${profile.contact.email}`} className="hover:text-teal-200 transition-colors break-all">{profile.contact.email}</a>
                    </SidebarItem>
                    <SidebarItem
                        title="Permanent Address"
                        icon={MapPin}
                        className="items-start"
                        iconClassName="w-5 h-5 mt-0.5"
                    >
                        <p>{profile.contact.address}</p>
                    </SidebarItem>
                </div>
            </div>

            <div className="mb-8 print:mb-2">
                <h2 className="text-2xl font-bold border-b-2 border-white/30 pb-2 mb-4 print:text-sm print:mb-1 print:pb-0.5">ACADEMIC PROFILE</h2>
                <div className="space-y-6 print:space-y-2">
                    {education.map((edu, index) => (
                        <EducationItem
                            key={index}
                            level={edu.level}
                            details={edu.details}
                            score={edu.score}
                            isItalic={edu.isItalic}
                        />
                    ))}
                </div>
            </div>
            <div className="mt-8 pt-8 border-t border-white/30 print:hidden">
                <button
                    onClick={() => window.print()}
                    className="w-full bg-white text-teal-700 font-bold py-2 px-4 rounded hover:bg-teal-50 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                    <Download size={20} />
                    Download PDF
                </button>
            </div>
        </aside>
    );
}
