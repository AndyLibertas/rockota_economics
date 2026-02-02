import React from 'react';
import { BookOpenIcon, ExternalLinkIcon, UserIcon } from 'lucide-react';
const LibraryPage = () => {
  return <div className="w-full min-h-screen bg-gray-50 px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="bg-[#243975]/10 p-6 rounded-full inline-flex items-center justify-center mb-6">
            <BookOpenIcon size={48} className="text-[#243975]" />
          </div>
          <h1 className="text-4xl font-bold text-[#243975] mb-4">
            Economic Library
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Foundational texts and alternative economic frameworks for a sustainable future.
          </p>
        </div>

        {/* Featured Books Section */}
        <div className="grid md:grid-cols-1 gap-8 mb-12">
          {/* Doughnut Economics */}
          <div className="bg-white rounded-lg shadow-lg border border-[#d7c770]/30 overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 bg-gradient-to-br from-[#008080]/10 to-[#243975]/10 p-8 flex flex-col items-center justify-center">
                <img
                  src="/doughnut_economics.jpg"
                  alt="Doughnut Economics Book Cover"
                  className="w-full h-3/4 object-cover rounded-md shadow-md mb-4"
                />
                <div className="text-sm text-gray-600 font-medium">Book Cover</div>
              </div>
              <div className="md:w-2/3 p-8 flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-3xl font-bold text-[#243975] mb-2">
                      Doughnut Economics
                    </h2>
                    <div className="flex items-center text-gray-600 mb-4">
                      <UserIcon size={16} className="mr-2" />
                      <span className="text-lg">Kate Raworth</span>
                    </div>
                  </div>
                  <div className="bg-[#008080]/10 px-3 py-1 rounded-full">
                    <span className="text-[#008080] font-medium text-sm">Alternative Economics</span>
                  </div>
                </div>

                <div className="mb-6">
                  <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/bmkVjGGisa0"
                    title="Doughnut Economics Video Review"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-lg shadow-md mb-4"
                  ></iframe>
                  <p className="text-gray-700 leading-relaxed">
                    A brief video review of Kate Raworth's Doughnut Economics, including her "doughnut" graph of the economy indicating where we must aim to be in a "safe and just operating space".
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-[#243975] mb-3">Key Concepts:</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-[#008080] rounded-full mr-3"></div>
                      <span className="text-gray-700">Social Foundation</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-[#008080] rounded-full mr-3"></div>
                      <span className="text-gray-700">Ecological Ceiling</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-[#008080] rounded-full mr-3"></div>
                      <span className="text-gray-700">Regenerative Design</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-[#008080] rounded-full mr-3"></div>
                      <span className="text-gray-700">Distributive Design</span>
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>

          {/* The Shortest History of Economics */}
          <div className="bg-white rounded-lg shadow-lg border border-[#d7c770]/30 overflow-hidden">
            <div className="md:flex">
                <div className="md:w-1/3 bg-gradient-to-br from-[#008080]/10 to-[#243975]/10 p-8 flex flex-col items-center justify-center">
                <img
                    src="/Image (20).jpg"
                    alt="The Shortest History of Economics Book Cover"
                    className="w-full h-auto object-cover rounded-md shadow-md mb-4"
                />
                <div className="text-sm text-gray-600 font-medium">Book Cover</div>
                </div>
                <div className="md:w-2/3 p-8 flex flex-col">
                <div className="flex items-start justify-between mb-4">
                    <div>
                    <h2 className="text-3xl font-bold text-[#243975] mb-2">
                        The Shortest History of Economics
                    </h2>
                    <div className="flex items-center text-gray-600 mb-4">
                        <UserIcon size={16} className="mr-2" />
                        <span className="text-lg">Andrew Leigh</span>
                    </div>
                    </div>
                    <div className="bg-[#008080]/10 px-3 py-1 rounded-full">
                    <span className="text-[#008080] font-medium text-sm">Economic History</span>
                    </div>
                </div>

                <div className="mb-6">
                    <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/2y9JrWJZdnE"
                    title="The Shortest History of Economics Video Review"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-lg shadow-md mb-4"
                    ></iframe>
                    <p className="text-gray-700 leading-relaxed">
                    A brief recap of the main events in Andrew Leigh's history of economic development from the early world to the COVID pandemic.
                    </p>
                </div>

                <div className="mb-6">
                    <h3 className="text-lg font-semibold text-[#243975] mb-3">Key Concepts:</h3>
                    <div className="grid md:grid-cols-2 gap-3">
                    <div className="flex items-center">
                        <div className="w-2 h-2 bg-[#008080] rounded-full mr-3"></div>
                        <span className="text-gray-700">Geographic Formation</span>
                    </div>
                    <div className="flex items-center">
                        <div className="w-2 h-2 bg-[#008080] rounded-full mr-3"></div>
                        <span className="text-gray-700">Trade Barriers</span>
                    </div>
                    <div className="flex items-center">
                        <div className="w-2 h-2 bg-[#008080] rounded-full mr-3"></div>
                        <span className="text-gray-700">Monetary Policy</span>
                    </div>
                    <div className="flex items-center">
                        <div className="w-2 h-2 bg-[#008080] rounded-full mr-3"></div>
                        <span className="text-gray-700">Future of Capitalism</span>
                    </div>
                    </div>
                </div>
                </div>
            </div>
          </div>

        </div>

        {/* Coming Soon Section */}
        <div className="text-center">
          <div className="p-6 bg-white rounded-lg shadow-lg border border-[#d7c770]/30 max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-[#008080] mb-4">
              More Books Coming Soon
            </h2>
            <p className="text-gray-600 mb-6">
              We're expanding our library with more foundational texts on alternative economics, 
              ecological economics, and sustainable development frameworks.
            </p>
            <div className="inline-flex items-center px-4 py-2 border border-[#d7c770] rounded-md text-[#243975] bg-[#d7c770]/10">
              <span className="mr-2">●</span>
              <span>In Development</span>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default LibraryPage;