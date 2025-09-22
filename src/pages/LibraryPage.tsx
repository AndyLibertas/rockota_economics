import React from 'react';
import { BookOpenIcon } from 'lucide-react';
const LibraryPage = () => {
  return <div className="w-full min-h-[70vh] flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-3xl mx-auto py-16">
        <div className="bg-[#243975]/10 p-6 rounded-full inline-flex items-center justify-center mb-6">
          <BookOpenIcon size={48} className="text-[#243975]" />
        </div>
        <h1 className="text-4xl font-bold text-[#243975] mb-4">
          Economic Library
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Our comprehensive collection of economic texts and key concepts is
          coming soon.
        </p>
        <div className="p-6 bg-white rounded-lg shadow-lg border border-[#d7c770]/30">
          <h2 className="text-2xl font-semibold text-[#008080] mb-4">
            Coming Soon
          </h2>
          <p className="text-gray-600">
            We're working on curating a digital library of foundational economic
            texts and creating interactive visualizations to make complex
            economic concepts more accessible.
          </p>
          <div className="mt-8 flex justify-center">
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