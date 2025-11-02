import { PlayIcon, ExternalLinkIcon, CalendarIcon, UserIcon, FileTextIcon, DownloadIcon } from 'lucide-react';

const ResearchPage = () => {
  return (
    <div className="w-full bg-gray-50">
      {/* Hero Section */}
      <div className="bg-[#243975] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Research
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Exploring the intersection of economics, policy, and data analysis through rigorous research and analysis.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Research */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#243975] mb-4">
              Featured Research
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Current research examining how economic policies and global factors impact different regions and states.
            </p>
          </div>

          {/* Exchange Rate Research Card */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
              <div className="p-8">
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Video Section */}
                  <div className="lg:w-1/2">
                    <div className="relative bg-gray-100 rounded-lg overflow-hidden">
                      <video 
                        controls 
                        className="w-full h-64 object-cover"
                        poster="/video-poster.jpg"
                      >
                        <source src="/Wright SURE Video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 hover:bg-opacity-10 transition-all duration-200">
                        <PlayIcon className="w-16 h-16 text-white opacity-80" />
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="lg:w-1/2">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <CalendarIcon className="w-4 h-4" />
                      <span>2024</span>
                      <span>•</span>
                      <UserIcon className="w-4 h-4" />
                      <span>Andrew Wright</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-[#243975] mb-4">
                      State-Level Impacts of Exchange Rate Fluctuations
                    </h3>
                    
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      This research examines how exchange rate fluctuations affect different U.S. states 
                      differently based on their economic composition, trade relationships, and industrial focus. 
                      Through data analysis and economic modeling, we explore the heterogeneous impacts of 
                      currency movements across state economies.
                    </p>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-[#008080] rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">Analysis of state-level trade dependencies and currency exposure</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-[#008080] rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">Economic modeling of exchange rate transmission mechanisms</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-[#008080] rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">Policy implications for state and federal economic strategies</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <span className="bg-[#008080] text-white px-3 py-1 rounded-full text-sm">
                        Exchange Rates
                      </span>
                      <span className="bg-[#d7c770] text-[#243975] px-3 py-1 rounded-full text-sm">
                        State Economics
                      </span>
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        Trade Analysis
                      </span>
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        Economic Modeling
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Research Publications */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#243975] mb-4">
              Research Studies
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Access personal unpublished research papers on different policies and economic theories.
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-8">
            {/* First Research Paper */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* PDF Thumbnail Section */}
                  <div className="md:w-1/4 flex justify-center">
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 w-full max-w-48">
                      <div className="w-full overflow-hidden">
                        <img 
                          src="/SURE_thumbnail.png" 
                          alt="SURE Research Thumbnail"
                          className="w-full h-auto object-cover"
                        />
                      </div>
                      <div className="p-3 bg-gradient-to-br from-[#243975] to-[#008080]">
                        <p className="text-sm text-white text-center font-medium">Research Paper</p>
                        <p className="text-xs text-gray-200 text-center">PDF Download</p>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="md:w-3/4">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <CalendarIcon className="w-4 h-4" />
                      <span>2023</span>
                      <span>•</span>
                      <UserIcon className="w-4 h-4" />
                      <span>Andrew Wright</span>
                      <span>•</span>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">SURE Program</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-[#243975] mb-4">
                      State-Level Impacts of Exchange Rate Fluctuations
                    </h3>
                    
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      This research examines how exchange rate fluctuations affect different U.S. states 
                      differently based on their economic composition, trade relationships, and industrial focus. 
                      Through data analysis and economic modeling, we explore the heterogeneous impacts of 
                      currency movements across state economies.
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="bg-[#008080] text-white px-3 py-1 rounded-full text-sm">
                        Exchange Rates
                      </span>
                      <span className="bg-[#d7c770] text-[#243975] px-3 py-1 rounded-full text-sm">
                        Regional Economics
                      </span>
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        Econometric Analysis
                      </span>
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        SURE Program
                      </span>
                    </div>

                    <div className="flex gap-4">
                      <a 
                        href="/Wright_SURE_2023.pdf" 
                        download="Wright_SURE_2023.pdf"
                        className="inline-flex items-center gap-2 bg-[#008080] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#006666] transition-colors"
                      >
                        <DownloadIcon className="w-4 h-4" />
                        <span>Download PDF</span>
                      </a>
                      <a 
                        href="/Wright_SURE_2023.pdf" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 border border-[#008080] text-[#008080] px-6 py-3 rounded-lg font-medium hover:bg-[#008080] hover:text-white transition-colors"
                      >
                        <FileTextIcon className="w-4 h-4" />
                        <span>View PDF</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Research Paper */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* PDF Thumbnail Section */}
                  <div className="md:w-1/4 flex justify-center">
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 w-full max-w-48">
                      <div className="w-full h-48 overflow-hidden">
                        <img 
                          src="/australia_thumbnail.jpeg" 
                          alt="Australia Trade Research Thumbnail"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-3 bg-gradient-to-br from-[#243975] to-[#008080]">
                        <p className="text-sm text-white text-center font-medium">Research Paper</p>
                        <p className="text-xs text-gray-200 text-center">PDF Download</p>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="md:w-3/4">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <CalendarIcon className="w-4 h-4" />
                      <span>2022</span>
                      <span>•</span>
                      <UserIcon className="w-4 h-4" />
                      <span>Andrew Wright</span>
                      <span>•</span>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">ECON-4740</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-[#243975] mb-4">
                      Inernational Economics: Australia's trade position.
                    </h3>
                    
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      Academic research assignment exploring Australia's position in the international trade arena.
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="bg-[#008080] text-white px-3 py-1 rounded-full text-sm">
                        Economic Theory
                      </span>
                      <span className="bg-[#d7c770] text-[#243975] px-3 py-1 rounded-full text-sm">
                        Research Methods
                      </span>
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        Academic Study
                      </span>
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        ECON-4740
                      </span>
                    </div>

                    <div className="flex gap-4">
                      <a 
                        href="/Wright ECON-4740 M12 Research Assignment.pdf" 
                        download="Wright_ECON-4740_M12_Research_Assignment.pdf"
                        className="inline-flex items-center gap-2 bg-[#008080] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#006666] transition-colors"
                      >
                        <DownloadIcon className="w-4 h-4" />
                        <span>Download PDF</span>
                      </a>
                      <a 
                        href="/Wright ECON-4740 M12 Research Assignment.pdf" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 border border-[#008080] text-[#008080] px-6 py-3 rounded-lg font-medium hover:bg-[#008080] hover:text-white transition-colors"
                      >
                        <FileTextIcon className="w-4 h-4" />
                        <span>View PDF</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Third Research Paper */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* PDF Thumbnail Section */}
                  <div className="md:w-1/4 flex justify-center">
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 w-full max-w-48">
                      <div className="w-full overflow-hidden">
                        <img 
                          src="/usmca_thumbnail.png" 
                          alt="USMCA Research Thumbnail"
                          className="w-full h-auto object-cover"
                        />
                      </div>
                      <div className="p-3 bg-gradient-to-br from-[#243975] to-[#008080]">
                        <p className="text-sm text-white text-center font-medium">Research Paper</p>
                        <p className="text-xs text-gray-200 text-center">PDF Download</p>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="md:w-3/4">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <CalendarIcon className="w-4 h-4" />
                      <span>2022</span>
                      <span>•</span>
                      <UserIcon className="w-4 h-4" />
                      <span>Andrew Wright</span>
                      <span>•</span>
                      <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">Trade Policy</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-[#243975] mb-4">
                      USMCA Research Report
                    </h3>
                    
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      Comprehensive analysis of the United States-Mexico-Canada Agreement (USMCA) and its economic 
                      implications for North American trade relationships. This research examines the agreement's 
                      impact on trade flows, economic integration, and policy outcomes across the three nations.
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="bg-[#008080] text-white px-3 py-1 rounded-full text-sm">
                        Trade Policy
                      </span>
                      <span className="bg-[#d7c770] text-[#243975] px-3 py-1 rounded-full text-sm">
                        USMCA
                      </span>
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        North America
                      </span>
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        Economic Integration
                      </span>
                    </div>

                    <div className="flex gap-4">
                      <a 
                        href="/Wright USMCA Research Report.pdf" 
                        download="Wright_USMCA_Research_Report.pdf"
                        className="inline-flex items-center gap-2 bg-[#008080] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#006666] transition-colors"
                      >
                        <DownloadIcon className="w-4 h-4" />
                        <span>Download PDF</span>
                      </a>
                      <a 
                        href="/Wright USMCA Research Report.pdf" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 border border-[#008080] text-[#008080] px-6 py-3 rounded-lg font-medium hover:bg-[#008080] hover:text-white transition-colors"
                      >
                        <FileTextIcon className="w-4 h-4" />
                        <span>View PDF</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Research Areas */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#243975] mb-4">
              Research Areas
            </h2>
            <p className="text-lg text-gray-600">
              Exploring diverse topics at the intersection of economics and technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#243975] mb-3">
                International Economics
              </h3>
              <p className="text-gray-600">
                Exchange rates, trade flows, and global economic interconnections
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#243975] mb-3">
                Regional Economic Analysis
              </h3>
              <p className="text-gray-600">
                State and local economic impacts of national and global policies
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#243975] mb-3">
                Economic Data Science
              </h3>
              <p className="text-gray-600">
                Applying computational methods to economic research and analysis
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#243975] mb-3">
                Policy Analysis
              </h3>
              <p className="text-gray-600">
                Evaluating the economic impacts of public policies and regulations
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#243975] mb-3">
                Financial Markets
              </h3>
              <p className="text-gray-600">
                Market dynamics, asset pricing, and financial system analysis
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#243975] mb-3">
                Economic Development
              </h3>
              <p className="text-gray-600">
                Growth patterns, development strategies, and economic transitions
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#243975] mb-4">
            Collaborate on Research
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Interested in collaborating on economic research or have questions about ongoing projects? 
            Let's explore how we can work together.
          </p>
          <a 
            href="mailto:contact@rockota.com" 
            className="inline-flex items-center gap-2 bg-[#008080] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#006666] transition-colors"
          >
            <span>Get in Touch</span>
            <ExternalLinkIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResearchPage;