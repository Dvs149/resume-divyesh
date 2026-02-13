
export default function MainContent() {
    return (
        <main className="flex-1 p-8 md:p-12 text-gray-800 bg-white print:p-4 print:text-[10px] print:leading-tight">
            <header className="mb-10 text-center md:text-left print:mb-2">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 tracking-tight mb-2 uppercase print:text-2xl print:mb-1">DIVYESH LUNAGARIYA</h1>
            </header>

            <section className="mb-8 print:mb-2">
                <h2 className="text-xl font-bold text-teal-700 uppercase border-b-2 border-teal-700 pb-1 mb-4 print:text-sm print:mb-1 print:pb-0.5">OBJECTIVE</h2>
                <p className="text-gray-700 leading-relaxed print:text-gray-900">
                    Laravel Developer with 5+ years of experience in building ERP systems, CMS platforms, RESTful APIs, and scalable backend solutions. Strong expertise in Laravel, MySQL, and API development, with hands-on use of AI-assisted development tools for faster debugging, refactoring, and problem-solving.
                </p>
            </section>

            <section className="mb-8 print:mb-2">
                <h2 className="text-xl font-bold text-teal-700 uppercase border-b-2 border-teal-700 pb-1 mb-4 print:text-sm print:mb-1 print:pb-0.5">TECHNICAL SKILLS</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 print:gap-1 print:text-gray-900">
                    <ul className="list-disc list-inside space-y-1 print:space-y-0">
                        <li>PHP (Laravel framework)</li>
                        <li>Javascript (jQuery)</li>
                        <li>Git</li>
                    </ul>
                    <ul className="list-disc list-inside space-y-1 print:space-y-0">
                        <li>HTML, CSS (Bootstrap 5)</li>
                        <li>MySQL</li>
                        <li>ReactJS</li>
                    </ul>
                </div>
            </section>

            <section className="mb-8 print:mb-2">
                <h2 className="text-xl font-bold text-teal-700 uppercase border-b-2 border-teal-700 pb-1 mb-4 print:text-sm print:mb-1 print:pb-0.5">PROFESSIONAL SUMMARY</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700 print:space-y-0.5 print:text-gray-900">
                    <li><strong>5+ years of experience</strong> in back-end applications development using the <span className="text-red-600 font-semibold">Laravel framework</span>.</li>
                    <li>Write clean, efficient, and reusable code.</li>
                    <li>Good understanding of data modeling and RESTful APIs.</li>
                    <li>Strong analytical & and problem-solving skills, effective collaboration & communication skills.</li>
                </ul>
            </section>

            <section className="mb-8 print:mb-2">
                <h2 className="text-xl font-bold text-teal-700 uppercase border-b-2 border-teal-700 pb-1 mb-4 print:text-sm print:mb-1 print:pb-0.5">WORK EXPERIENCE</h2>
                <div className="space-y-6 print:space-y-2">
                    <div className="break-inside-avoid">
                        <div className="flex flex-col md:flex-row justify-between mb-1 print:flex-row print:justify-between print:mb-0">
                            <h3 className="font-bold text-gray-800">Axiever</h3>
                            <span className="text-gray-600 italic print:text-[9px]">May 2023 to Jan 2026 - Remote</span>
                        </div>
                        <ul className="list-disc list-inside text-gray-700 ml-4 print:text-gray-900">
                            <li>ERP System Development, Changes, and Testing. (PHP, Laravel, Jquery, HTML, CSS, MySQL).</li>
                        </ul>
                    </div>

                    <div className="break-inside-avoid">
                        <div className="flex flex-col md:flex-row justify-between mb-1 print:flex-row print:justify-between print:mb-0">
                            <h3 className="font-bold text-gray-800">21Twelve Interactive</h3>
                            <span className="text-gray-600 italic print:text-[9px]">Nov 2022 to Feb 2023- Remote</span>
                        </div>
                        <ul className="list-disc list-inside text-gray-700 ml-4 print:text-gray-900">
                            <li>Converting PSD to HTML-CSS using Bootstrap framework.</li>
                            <li>Creating <span className="text-red-600 font-semibold">React JS</span> components.</li>
                        </ul>
                    </div>

                    <div className="break-inside-avoid">
                        <div className="flex flex-col md:flex-row justify-between mb-1 print:flex-row print:justify-between print:mb-0">
                            <h3 className="font-bold text-gray-800">IIHGlobal</h3>
                            <span className="text-gray-600 italic print:text-[9px]">Jun 2021 to Oct 2021 - Remote</span>
                        </div>
                        <ul className="list-disc list-inside text-gray-700 ml-4 print:text-gray-900">
                            <li>Developed API for React Projects from scratch using the Laravel framework and created Admin Panel using the Laravel framework.</li>
                            <li><span className="text-red-600 font-semibold">Third-party API integration in Laravel</span>, like Login with Google, and Bitly for URL-shortener.</li>
                        </ul>
                    </div>

                    <div className="break-inside-avoid">
                        <div className="flex flex-col md:flex-row justify-between mb-1 print:flex-row print:justify-between print:mb-0">
                            <h3 className="font-bold text-gray-800">Webzexperts</h3>
                            <span className="text-gray-600 italic print:text-[9px]">Feb 2020 to Jun 2021 - Remote</span>
                        </div>
                        <ul className="list-disc list-inside text-gray-700 ml-4 print:text-gray-900">
                            <li>Developed multiple Projects from scratch using the Laravel framework, all projects were mostly CMS.</li>
                            <li>Worked on creating API using Laravel framework and tested using Postman tool for Mobile App.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 print:gap-4 print:mt-2">
                <section>
                    <h2 className="text-xl font-bold text-teal-700 uppercase border-b-2 border-teal-700 pb-1 mb-4 print:text-sm print:mb-1 print:pb-0.5">ADDITIONAL INFORMATION</h2>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 print:text-gray-900 print:space-y-0">
                        <li>Debugging Tool Chrome Inspector, Firefox Firebug.</li>
                        <li>IDE's and Developer Tools: Sublime Text, Visual Studio (VS).</li>
                        <li>Good knowledge of Postman tool for testing API.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-teal-700 uppercase border-b-2 border-teal-700 pb-1 mb-4 print:text-sm print:mb-1 print:pb-0.5">STRENGTH</h2>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 print:text-gray-900 print:space-y-0">
                        <li>Good communication skills</li>
                        <li>Eagerness to learn new things.</li>
                        <li>Optimistic attitude.</li>
                        <li>Self-motivated and energetic.</li>
                    </ul>
                </section>
            </div>

        </main>
    );
}
