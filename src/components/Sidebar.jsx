import { Phone, Mail, MapPin, Calendar, User, Briefcase, GraduationCap, Code, Download } from 'lucide-react';
import profileImage from '../assets/profile.png';

export default function Sidebar() {
    return (
        <aside className="bg-teal-700 text-white p-8 w-full md:w-1/4 print:w-1/4 min-h-screen print:text-[10px] print:p-4 print:min-h-0">
            <div className="mb-8 flex justify-center print:mb-4">
                <img
                    src={profileImage}
                    alt="Divyesh Lunagariya"
                    className="w-64 h-64 rounded-full object-cover border-4 border-white shadow-lg print:w-24 print:h-24 print:border-2"
                />
            </div>
            <div className="mb-8 print:mb-2">
                <h2 className="text-2xl font-bold border-b-2 border-white/30 pb-2 mb-4 print:text-sm print:mb-1 print:pb-0.5">PROFILE</h2>
                <div className="space-y-4 print:space-y-1">
                    <div>
                        <h3 className="font-semibold text-teal-200">Father's Name</h3>
                        <p>Amitbhai Lunagariya</p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-teal-200">Date of Birth</h3>
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>November 14, 1994</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mb-8 print:mb-2">
                <h2 className="text-2xl font-bold border-b-2 border-white/30 pb-2 mb-4 print:text-sm print:mb-1 print:pb-0.5">CONTACT</h2>
                <div className="space-y-4 print:space-y-1">
                    <div>
                        <h3 className="font-semibold text-teal-200">Phone</h3>
                        <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4" />
                            <a href="tel:7016697110" className="hover:text-teal-200 transition-colors">7016697110</a>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-semibold text-teal-200">Email</h3>
                        <div className="flex items-center gap-2">
                            <Mail className="w-4 h-4" />
                            <a href="mailto:divyeshlunagariya149@gmail.com" className="hover:text-teal-200 transition-colors break-all">divyeshlunagariya149@gmail.com</a>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-semibold text-teal-200">Permanent Address</h3>
                        <div className="flex items-start gap-2">
                            <MapPin className="w-4 h-4 mt-1 shrink-0" />
                            <p>301, Shantiniketan Apartment, R K Bunglows, Nr Shandar Residency-2, 80 feet road, Kuvadava Rd, Rajkot, Gujarat 360003</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mb-8 print:mb-2">
                <h2 className="text-2xl font-bold border-b-2 border-white/30 pb-2 mb-4 print:text-sm print:mb-1 print:pb-0.5">ACADEMIC PROFILE</h2>
                <div className="space-y-6 print:space-y-2">
                    <div>
                        <h3 className="font-bold text-lg text-teal-200">Graduation</h3>
                        <p className="italic text-teal-100">Pursued B.E in Information Science and Engineering</p>
                        <p>Acharya Institute of Technology, Bangalore</p>
                        <p>Affiliated to VTU</p>
                        <p>2012-2017</p>
                        <p className="text-sm mt-1">Aggregate: 53.3%</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg text-teal-200">Intermediate</h3>
                        <p>Genius English Medium School, Rajkot</p>
                        <p>2011-2012</p>
                        <p className="text-sm mt-1">Aggregate: 56%</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg text-teal-200">10th</h3>
                        <p>B.M. kiyada School, Rajkot</p>
                        <p>2009-2010</p>
                        <p className="text-sm mt-1">Aggregate: 54%</p>
                    </div>
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
