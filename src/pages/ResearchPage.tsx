import { ExternalLinkIcon, CalendarIcon, UserIcon, FileTextIcon, DownloadIcon } from 'lucide-react';

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
                      <iframe
                        width="100%"
                        height="256"
                        src="https://www.youtube.com/embed/g1YeDiA6_Zg"
                        title="State-Level Impacts of Exchange Rate Fluctuations"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-64"
                      ></iframe>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* First Research Paper */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
              {/* Thumbnail Section */}
              <div className="h-48 overflow-hidden bg-gray-100 relative group">
                <img 
                  src="/SURE_thumbnail.png" 
                  alt="SURE Research Thumbnail"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-0 right-0 bg-[#243975] text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  2023
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                  <UserIcon className="w-3 h-3" />
                  <span>Andrew Wright</span>
                  <span>•</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">SURE Program</span>
                </div>
                
                <h3 className="text-xl font-bold text-[#243975] mb-3 line-clamp-2">
                  State-Level Impacts of Exchange Rate Fluctuations
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                  This research examines how exchange rate fluctuations affect different U.S. states differently based on their economic composition, trade relationships, and industrial focus.
                </p>

                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  <span className="bg-[#008080]/10 text-[#008080] px-2 py-1 rounded text-xs font-medium">
                    Exchange Rates
                  </span>
                  <span className="bg-[#d7c770]/20 text-[#243975] px-2 py-1 rounded text-xs font-medium">
                    Regional Economics
                  </span>
                  <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                    SURE Program
                  </span>
                </div>

                <div className="flex gap-3 pt-4 border-t border-gray-100">
                  <a 
                    href="/Wright_SURE_2023.pdf" 
                    download="Wright_SURE_2023.pdf"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-[#008080] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#006666] transition-colors"
                  >
                    <DownloadIcon className="w-3 h-3" />
                    <span>PDF</span>
                  </a>
                  <a 
                    href="/Wright_SURE_2023.pdf" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 border border-[#008080] text-[#008080] px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#008080] hover:text-white transition-colors"
                  >
                    <FileTextIcon className="w-3 h-3" />
                    <span>View</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Second Research Paper */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
              {/* Thumbnail Section */}
              <div className="h-48 overflow-hidden bg-gray-100 relative group">
                <img 
                  src="/australia_thumbnail.jpeg" 
                  alt="Australia Trade Research Thumbnail"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-0 right-0 bg-[#243975] text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  2022
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                  <UserIcon className="w-3 h-3" />
                  <span>Andrew Wright</span>
                  <span>•</span>
                  <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded-full">ECON-4740</span>
                </div>
                
                <h3 className="text-xl font-bold text-[#243975] mb-3 line-clamp-2">
                  Inernational Economics: Australia's trade position.
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                  Academic research assignment exploring Australia's position in the international trade arena.
                </p>

                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  <span className="bg-[#008080]/10 text-[#008080] px-2 py-1 rounded text-xs font-medium">
                    Economic Theory
                  </span>
                  <span className="bg-[#d7c770]/20 text-[#243975] px-2 py-1 rounded text-xs font-medium">
                    Research Methods
                  </span>
                  <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                    Academic Study
                  </span>
                </div>

                <div className="flex gap-3 pt-4 border-t border-gray-100">
                  <a 
                    href="/Wright ECON-4740 M12 Research Assignment.pdf" 
                    download="Wright_ECON-4740_M12_Research_Assignment.pdf"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-[#008080] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#006666] transition-colors"
                  >
                    <DownloadIcon className="w-3 h-3" />
                    <span>PDF</span>
                  </a>
                  <a 
                    href="/Wright ECON-4740 M12 Research Assignment.pdf" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 border border-[#008080] text-[#008080] px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#008080] hover:text-white transition-colors"
                  >
                    <FileTextIcon className="w-3 h-3" />
                    <span>View</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Third Research Paper */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
              {/* Thumbnail Section */}
              <div className="h-48 overflow-hidden bg-gray-100 relative group">
                <img 
                  src="/usmca_thumbnail.png" 
                  alt="USMCA Research Thumbnail"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-0 right-0 bg-[#243975] text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  2022
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                  <UserIcon className="w-3 h-3" />
                  <span>Andrew Wright</span>
                  <span>•</span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full">Trade Policy</span>
                </div>
                
                <h3 className="text-xl font-bold text-[#243975] mb-3 line-clamp-2">
                  USMCA Research Report
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                  Comprehensive analysis of the United States-Mexico-Canada Agreement (USMCA) and its economic implications for North American trade relationships.
                </p>

                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  <span className="bg-[#008080]/10 text-[#008080] px-2 py-1 rounded text-xs font-medium">
                    Trade Policy
                  </span>
                  <span className="bg-[#d7c770]/20 text-[#243975] px-2 py-1 rounded text-xs font-medium">
                    USMCA
                  </span>
                  <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                    North America
                  </span>
                </div>

                <div className="flex gap-3 pt-4 border-t border-gray-100">
                  <a 
                    href="/Wright USMCA Research Report.pdf" 
                    download="Wright_USMCA_Research_Report.pdf"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-[#008080] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#006666] transition-colors"
                  >
                    <DownloadIcon className="w-3 h-3" />
                    <span>PDF</span>
                  </a>
                  <a 
                    href="/Wright USMCA Research Report.pdf" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 border border-[#008080] text-[#008080] px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#008080] hover:text-white transition-colors"
                  >
                    <FileTextIcon className="w-3 h-3" />
                    <span>View</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Fourth Research Paper */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
              {/* Thumbnail Section */}
              <div className="h-48 overflow-hidden bg-gray-100 relative group">
                <img 
                  src="/Wright Econ 5040 Paper Extension Thumbnail.png" 
                  alt="Wind Turbine Research Thumbnail"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-0 right-0 bg-[#243975] text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  2024
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                  <UserIcon className="w-3 h-3" />
                  <span>Andrew Wright</span>
                  <span>•</span>
                  <span className="bg-orange-100 text-orange-800 px-2 py-0.5 rounded-full">ECON-5040</span>
                </div>
                
                <h3 className="text-xl font-bold text-[#243975] mb-3 line-clamp-2">
                  Negative Externalities of Wind Turbines
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                  Extension of Krekel et al., 2017 examining negative externalities of living near wind turbines.
                </p>

                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  <span className="bg-[#008080]/10 text-[#008080] px-2 py-1 rounded text-xs font-medium">
                    Environmental
                  </span>
                  <span className="bg-[#d7c770]/20 text-[#243975] px-2 py-1 rounded text-xs font-medium">
                    Externalities
                  </span>
                  <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                    Wind Energy
                  </span>
                </div>

                <div className="flex gap-3 pt-4 border-t border-gray-100">
                  <a 
                    href="/Wright Econ 5040 Paper Extension.pdf" 
                    download="Wright_Econ_5040_Paper_Extension.pdf"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-[#008080] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#006666] transition-colors"
                  >
                    <DownloadIcon className="w-3 h-3" />
                    <span>PDF</span>
                  </a>
                  <a 
                    href="/Wright Econ 5040 Paper Extension.pdf" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 border border-[#008080] text-[#008080] px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#008080] hover:text-white transition-colors"
                  >
                    <FileTextIcon className="w-3 h-3" />
                    <span>View</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Fifth Research Paper */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
              {/* Thumbnail Section */}
              <div className="h-48 overflow-hidden bg-gray-100 relative group">
                <img 
                  src="/Wright Econ-5390 Final Paper Thumbnail.png" 
                  alt="Unstable Preferences Research Thumbnail"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-0 right-0 bg-[#243975] text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  2024
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                  <UserIcon className="w-3 h-3" />
                  <span>Andrew Wright</span>
                  <span>•</span>
                  <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded-full">ECON-5390</span>
                </div>
                
                <h3 className="text-xl font-bold text-[#243975] mb-3 line-clamp-2">
                  Decision-Making with Unstable Consumption Preferences
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                  A Paper looking at how an economic agent makes decisions when their consumption preferences may not be stable.
                </p>

                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  <span className="bg-[#008080]/10 text-[#008080] px-2 py-1 rounded text-xs font-medium">
                    Behavioral Economics
                  </span>
                  <span className="bg-[#d7c770]/20 text-[#243975] px-2 py-1 rounded text-xs font-medium">
                    Decision Theory
                  </span>
                  <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                    Preferences
                  </span>
                </div>

                <div className="flex gap-3 pt-4 border-t border-gray-100">
                  <a 
                    href="/Wright ECON-5390 Final Paper.pdf" 
                    download="Wright_ECON-5390_Final_Paper.pdf"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-[#008080] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#006666] transition-colors"
                  >
                    <DownloadIcon className="w-3 h-3" />
                    <span>PDF</span>
                  </a>
                  <a 
                    href="/Wright ECON-5390 Final Paper.pdf" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 border border-[#008080] text-[#008080] px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#008080] hover:text-white transition-colors"
                  >
                    <FileTextIcon className="w-3 h-3" />
                    <span>View</span>
                  </a>
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