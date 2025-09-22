import React from 'react';
import { BookOpenIcon, CodeIcon, DatabaseIcon, GraduationCapIcon, BriefcaseIcon, ChartBarIcon, MailIcon } from 'lucide-react';
const AboutPage = () => {
  return <div className="w-full bg-gray-50">
      {/* Hero Section */}
      <div className="bg-[#243975] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Hi, I'm Andrew Wright, and this is Rockota
              </h1>
              <h2 className="text-2xl md:text-3xl font-medium mb-4 text-[#d7c770]">
                Bridging Economics & Technology
              </h2>
              <p className="text-xl text-gray-200 mb-6">
                I'm a developer, economist, and data analyst passionate about
                using computational tools to solve economic problems and spread
                knowledge.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-[#008080] px-4 py-2 rounded-full text-sm font-medium">
                  Full-Stack Development
                </span>
                <span className="bg-[#d7c770] text-[#243975] px-4 py-2 rounded-full text-sm font-medium">
                  Data Analysis
                </span>
                <span className="bg-white text-[#243975] px-4 py-2 rounded-full text-sm font-medium">
                  Economics
                </span>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-[#d7c770] blur-lg opacity-30 transform -translate-x-4 translate-y-4"></div>
                <img src="image2.jpg" alt="Andrew Wright standing in front of Adam Smith statue" className="rounded-lg shadow-xl relative z-10 max-w-full h-auto border-4 border-white" style={{
                maxHeight: '500px'
              }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About Rockota Project */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#243975] mb-4">
              The Rockota Project
            </h2>
            <div className="w-24 h-1 bg-[#d7c770] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I founded Rockota in 2025 to combine my passion for economics and
              technology to create tools that make economic concepts accessible
              and applicable.
            </p>
            <p className="text-md text-gray-500 mt-3 max-w-2xl mx-auto">
              Rockota is in its early stages of development as I build out the
              platform to bridge the gap between economic theory and practical
              applications through modern technology.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 shadow-md border border-gray-100">
              <div className="bg-[#243975]/10 p-4 rounded-full inline-flex items-center justify-center mb-4">
                <BookOpenIcon size={28} className="text-[#243975]" />
              </div>
              <h3 className="text-xl font-semibold text-[#243975] mb-3">
                Economic Library
              </h3>
              <p className="text-gray-600">
                A curated collection of economic texts and concepts, made
                accessible through modern digital interfaces and explanations.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 shadow-md border border-gray-100">
              <div className="bg-[#243975]/10 p-4 rounded-full inline-flex items-center justify-center mb-4">
                <DatabaseIcon size={28} className="text-[#243975]" />
              </div>
              <h3 className="text-xl font-semibold text-[#243975] mb-3">
                Data Repository
              </h3>
              <p className="text-gray-600">
                Organized economic datasets and visualization tools to help
                students and researchers explore economic trends and patterns.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 shadow-md border border-gray-100">
              <div className="bg-[#243975]/10 p-4 rounded-full inline-flex items-center justify-center mb-4">
                <CodeIcon size={28} className="text-[#243975]" />
              </div>
              <h3 className="text-xl font-semibold text-[#243975] mb-3">
                Projects Portfolio
              </h3>
              <p className="text-gray-600">
                Practical applications of economic theory through computational
                models, simulations, and real-world problem-solving.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Professional Experience */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#243975] mb-4">
              My Professional Experience
            </h2>
            <div className="w-24 h-1 bg-[#d7c770] mx-auto mb-6"></div>
          </div>
          <div className="flex flex-col md:flex-row gap-8 mb-12">
            <div className="md:w-1/3">
              <div className="sticky top-6">
                <img src="image1.jpg" alt="Me working at desk with multiple monitors" className="rounded-lg shadow-lg mb-6" />
                <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100">
                  <h3 className="text-xl font-semibold text-[#243975] mb-4">
                    Technical Skills
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">
                          Full-Stack Development
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-[#008080] h-2 rounded-full" style={{
                        width: '90%'
                      }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">
                          Data Analysis
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-[#008080] h-2 rounded-full" style={{
                        width: '95%'
                      }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">
                          Economics Research
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-[#008080] h-2 rounded-full" style={{
                        width: '85%'
                      }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">
                          Python
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-[#008080] h-2 rounded-full" style={{
                        width: '90%'
                      }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">
                          Node.js & React
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-[#008080] h-2 rounded-full" style={{
                        width: '85%'
                      }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">
                          SQL & Databases
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-[#008080] h-2 rounded-full" style={{
                        width: '80%'
                      }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-2/3 space-y-8">
              <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100">
                <div className="flex items-start">
                  <div className="bg-[#243975]/10 p-3 rounded-full inline-flex items-center justify-center mr-4">
                    <BriefcaseIcon size={24} className="text-[#243975]" />
                  </div>
                  <div>
                    <div className="flex flex-wrap justify-between items-center mb-2">
                      <h3 className="text-xl font-semibold text-[#243975]">
                        Libertas - Developer
                      </h3>
                      <span className="text-sm text-gray-500">
                        Dec 2024 – Present
                      </span>
                    </div>
                    <ul className="list-disc ml-5 space-y-2 text-gray-700">
                      <li>
                        Lead full-stack developer for the Marion family of
                        companies, specializing in Node.js and React
                        applications to build custom modular-software.
                      </li>
                      <li>
                        Lead developer on the National Pitching Association's
                        new athlete management platform, revamping outdated
                        software to an innovative, data-intensive solution.
                      </li>
                      <li>
                        Completed contract work in Ruby on Rails for businesses
                        focused on RFID technology and retail theft prevention.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100">
                <div className="flex items-start">
                  <div className="bg-[#243975]/10 p-3 rounded-full inline-flex items-center justify-center mr-4">
                    <ChartBarIcon size={24} className="text-[#243975]" />
                  </div>
                  <div>
                    <div className="flex flex-wrap justify-between items-center mb-2">
                      <h3 className="text-xl font-semibold text-[#243975]">
                        Libertas - Data Analyst
                      </h3>
                      <span className="text-sm text-gray-500">
                        May 2024 – Dec 2024
                      </span>
                    </div>
                    <ul className="list-disc ml-5 space-y-2 text-gray-700">
                      <li>
                        Developed a Python application to automate PDF report
                        generation for the construction division of Marion
                        companies.
                      </li>
                      <li>
                        Established an internal database structure using
                        PostgreSQL for advanced data analysis, reporting, and
                        dashboard creation.
                      </li>
                      <li>
                        Maintained internal dashboards for financial and
                        economic insights used regularly by executive
                        leadership.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100">
                <div className="flex items-start">
                  <div className="bg-[#243975]/10 p-3 rounded-full inline-flex items-center justify-center mr-4">
                    <DatabaseIcon size={24} className="text-[#243975]" />
                  </div>
                  <div>
                    <div className="flex flex-wrap justify-between items-center mb-2">
                      <h3 className="text-xl font-semibold text-[#243975]">
                        Center for Business and Economic Analysis - Graduate
                        Assistant
                      </h3>
                      <span className="text-sm text-gray-500">
                        Jan 2024 – Present
                      </span>
                    </div>
                    <ul className="list-disc ml-5 space-y-2 text-gray-700">
                      <li>
                        Built econometric and machine learning models to
                        forecast enrollment and retention for university
                        applicants.
                      </li>
                      <li>
                        Integrated scenario analysis and cash flow-style
                        projections to evaluate different outcomes.
                      </li>
                      <li>
                        Contributed to ongoing academic research projects and
                        papers.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Education */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#243975] mb-4">
              My Education
            </h2>
            <div className="w-24 h-1 bg-[#d7c770] mx-auto mb-6"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 shadow-md border border-gray-100">
              <div className="flex items-start">
                <div className="bg-[#243975]/10 p-3 rounded-full inline-flex items-center justify-center mr-4">
                  <GraduationCapIcon size={24} className="text-[#243975]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#243975] mb-1">
                    Master of Science, Economics
                  </h3>
                  <p className="text-gray-600 mb-3">
                    University of Wyoming, Laramie, WY | May 2023 – May 2024
                  </p>
                  <ul className="list-disc ml-5 space-y-2 text-gray-700">
                    <li>
                      Defended a master's paper on the regional effects of
                      exchange rate fluctuations on U.S. exports.
                    </li>
                    <li>
                      Recipient of the 2023 Summer Undergraduate in Economics
                      grant.
                    </li>
                    <li>
                      Research interests: Macroeconomics and international
                      trade.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 shadow-md border border-gray-100">
              <div className="flex items-start">
                <div className="bg-[#243975]/10 p-3 rounded-full inline-flex items-center justify-center mr-4">
                  <GraduationCapIcon size={24} className="text-[#243975]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#243975] mb-1">
                    Bachelor of Science, Economics
                  </h3>
                  <p className="text-gray-600 mb-1">
                    Minor in Statistics; Quantitative Concentration
                  </p>
                  <p className="text-gray-600 mb-3">
                    University of Wyoming, Laramie, WY | Aug 2019 – May 2023
                  </p>
                  <ul className="list-disc ml-5 space-y-2 text-gray-700">
                    <li>Graduated with a 4.0 GPA, Summa Cum Laude.</li>
                    <li>President's List (Fall 2019–Spring 2023).</li>
                    <li>
                      Awards: Outstanding Junior in Economics (2022),
                      Outstanding Senior in Economics (2023).
                    </li>
                    <li>
                      Served as President of the Economics Club (2021–2023).
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Vision Section */}
      <div className="bg-[#243975] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">My Vision for Rockota</h2>
            <div className="w-24 h-1 bg-[#d7c770] mx-auto mb-6"></div>
          </div>
          <div className="bg-[#243975]/40 p-8 rounded-lg border border-[#243975]/60 shadow-xl">
            <p className="text-xl text-gray-100 mb-6">
              I believe that economic knowledge should be accessible to
              everyone, not just those with formal education in the field. With
              Rockota, I aim to:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-[#243975]/60 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#d7c770] mb-3">
                  Democratize Economics
                </h3>
                <p className="text-gray-200">
                  Make complex economic concepts accessible and understandable
                  to everyone through interactive visualizations and plain
                  language explanations.
                </p>
              </div>
              <div className="bg-[#243975]/60 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#d7c770] mb-3">
                  Bridge Theory & Practice
                </h3>
                <p className="text-gray-200">
                  Connect academic economic theory with real-world applications
                  and data to demonstrate how economics shapes our daily lives.
                </p>
              </div>
              <div className="bg-[#243975]/60 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#d7c770] mb-3">
                  Build Problem-Solving Tools
                </h3>
                <p className="text-gray-200">
                  Develop computational tools that leverage economic principles
                  to address practical challenges in business, policy, and
                  everyday decision-making.
                </p>
              </div>
            </div>
            <p className="text-xl text-center text-[#d7c770] italic">
              "By combining my passion for economics with my technical skills, I
              hope to create a platform that inspires others to explore the
              fascinating world of economic thought and its applications."
            </p>
          </div>
        </div>
      </div>
      {/* Contact Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#243975] mb-4">
              Connect with Me
            </h2>
            <div className="w-24 h-1 bg-[#d7c770] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Have questions about Rockota or interested in collaborating? I'd
              love to hear from you.
            </p>
            <div className="bg-gray-50 rounded-lg p-8 shadow-md border border-gray-100 max-w-xl mx-auto">
              <div className="flex flex-col items-center">
                <div className="bg-[#243975]/10 p-4 rounded-full inline-flex items-center justify-center mb-6">
                  <MailIcon size={32} className="text-[#243975]" />
                </div>
                <h3 className="text-xl font-semibold text-[#243975] mb-4">
                  Get in Touch
                </h3>
                <p className="text-gray-600 mb-6 text-center">
                  Click the button below to send me an email. I'll get back to
                  you as soon as possible.
                </p>
                <a href="mailto:andrewwright2023@outlook.com?subject=Rockota%20Inquiry" className="inline-flex items-center px-6 py-3 bg-[#243975] text-white rounded-md hover:bg-[#243975]/90 transition-colors">
                  <MailIcon size={18} className="mr-2" />
                  Email Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default AboutPage;