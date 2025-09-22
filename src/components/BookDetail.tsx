import React, { useEffect, useState, Component } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeftIcon, BookOpenIcon, PlayIcon, ChevronRightIcon, LightbulbIcon, QuoteIcon, BrainIcon, ScaleIcon, LayersIcon } from 'lucide-react';
// Mock data for book details
const booksData = {
  'wealth-of-nations': {
    title: 'The Wealth of Nations',
    author: 'Adam Smith',
    year: 1776,
    coverColor: '#8B4513',
    summary: 'A foundational text in classical economics that explains how nations build wealth through productivity, free markets, and division of labor.',
    concepts: [{
      id: 'invisible-hand',
      name: 'Invisible Hand',
      description: 'The unintended social benefits of individual self-interested actions in a free market that lead to an efficient allocation of resources.',
      quote: 'It is not from the benevolence of the butcher, the brewer, or the baker that we expect our dinner, but from their regard to their own interest.',
      applications: 'Modern market economies rely on this principle to allocate resources efficiently without central planning.',
      icon: 'ScaleIcon'
    }, {
      id: 'division-of-labor',
      name: 'Division of Labor',
      description: 'Breaking down production into specialized tasks to increase efficiency and productivity.',
      quote: 'The greatest improvement in the productive powers of labour... have been the effects of the division of labour.',
      applications: 'Modern manufacturing, assembly lines, and specialized job roles in organizations.',
      icon: 'LayersIcon'
    }, {
      id: 'free-market',
      name: 'Free Market Economy',
      description: 'An economic system based on supply and demand with little government control.',
      quote: 'Every individual necessarily labours to render the annual revenue of the society as great as he can.',
      applications: 'Basis for capitalism and trade policies promoting economic liberalization.',
      icon: 'ScaleIcon'
    }, {
      id: 'productivity',
      name: 'Productivity',
      description: 'The efficiency of production processes, leading to greater output and economic growth.',
      quote: 'The annual produce of the land and labour of any nation can be increased in its value by no other means but by increasing either the number of its productive labourers, or the productive powers of those labourers.',
      applications: 'Key metric for measuring economic performance and growth potential.',
      icon: 'LayersIcon'
    }, {
      id: 'self-interest',
      name: 'Self-Interest',
      description: 'The motivation of individuals to act in their own economic interest, which drives market behavior.',
      quote: 'It is not from the benevolence of the butcher, the brewer, or the baker that we expect our dinner, but from their regard to their own interest.',
      applications: 'Foundation of economic incentive structures and business strategy.',
      icon: 'BrainIcon'
    }],
    videoReviewUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  'general-theory': {
    title: 'The General Theory of Employment, Interest, and Money',
    author: 'John Maynard Keynes',
    year: 1936,
    coverColor: '#2E8B57',
    summary: 'A revolutionary work that challenged classical economic thinking and introduced the concept of government intervention to stabilize economies during recessions.',
    concepts: [{
      id: 'aggregate-demand',
      name: 'Aggregate Demand',
      description: 'The total demand for goods and services in an economy at a given time and price level.',
      quote: 'Consumption—to repeat the obvious—is the sole end and object of all economic activity.',
      applications: 'Central to macroeconomic policy decisions and economic forecasting.',
      icon: 'ScaleIcon'
    }, {
      id: 'fiscal-policy',
      name: 'Fiscal Policy',
      description: 'Government use of spending and taxation to influence the economy.',
      quote: 'The boom, not the slump, is the right time for austerity at the Treasury.',
      applications: 'Government stimulus packages, tax cuts during recessions, infrastructure spending.',
      icon: 'LayersIcon'
    }, {
      id: 'multiplier-effect',
      name: 'Multiplier Effect',
      description: 'How an initial increase in spending leads to even greater increases in national income.',
      quote: 'If the Treasury were to fill old bottles with banknotes, bury them at suitable depths in disused coalmines which are then filled up to the surface with town rubbish, and leave it to private enterprise...to dig the notes up again...there need be no more unemployment.',
      applications: 'Basis for government stimulus spending during economic downturns.',
      icon: 'BrainIcon'
    }, {
      id: 'liquidity-preference',
      name: 'Liquidity Preference',
      description: 'The desire to hold cash rather than other assets, affecting interest rates.',
      quote: "The rate of interest is not the 'price' which brings into equilibrium the demand for resources to invest with the readiness to abstain from present consumption. It is the 'price' which equilibrates the desire to hold wealth in the form of cash with the available quantity of cash.",
      applications: 'Central bank monetary policy and financial market behavior.',
      icon: 'ScaleIcon'
    }, {
      id: 'government-intervention',
      name: 'Government Intervention',
      description: 'The role of government in managing economic downturns through spending.',
      quote: 'The long run is a misleading guide to current affairs. In the long run we are all dead.',
      applications: 'Economic stimulus packages, public works projects, countercyclical spending.',
      icon: 'LayersIcon'
    }],
    videoReviewUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  capital: {
    title: 'Das Kapital',
    author: 'Karl Marx',
    year: 1867,
    coverColor: '#8B0000',
    summary: 'A critical analysis of political economy, particularly capitalism, arguing that the exploitation of labor is fundamental to the capitalist mode of production.',
    concepts: [{
      id: 'surplus-value',
      name: 'Surplus Value',
      description: 'The difference between the value workers create and the wages they receive, claimed as profit by capitalists.',
      quote: 'The rate of surplus-value is therefore an exact expression for the degree of exploitation of labour-power by capital, or of the worker by the capitalist.',
      applications: 'Analysis of profit margins, labor compensation, and economic inequality.',
      icon: 'ScaleIcon'
    }, {
      id: 'labor-theory',
      name: 'Labor Theory of Value',
      description: 'The theory that the value of goods comes from the labor needed to produce them.',
      quote: 'A use-value, or useful article, therefore, has value only because abstract human labour is objectified or materialized in it.',
      applications: 'Foundation for understanding exploitation and class struggle in Marxist theory.',
      icon: 'LayersIcon'
    }, {
      id: 'class-struggle',
      name: 'Class Struggle',
      description: 'The conflict between social classes, particularly the working class and capitalist class.',
      quote: 'The history of all hitherto existing society is the history of class struggles.',
      applications: 'Analysis of labor movements, revolutions, and social change.',
      icon: 'BrainIcon'
    }, {
      id: 'exploitation',
      name: 'Exploitation',
      description: 'The extraction of surplus value from workers by capitalists who own the means of production.',
      quote: 'Capital is dead labour, that, vampire-like, only lives by sucking living labour, and lives the more, the more labour it sucks.',
      applications: 'Analysis of working conditions, wages, and labor rights.',
      icon: 'ScaleIcon'
    }, {
      id: 'alienation',
      name: 'Alienation',
      description: "Workers' disconnection from the products they create, their work activity, their human potential, and from other people.",
      quote: 'The worker becomes all the poorer the more wealth he produces, the more his production increases in power and size.',
      applications: 'Analysis of job satisfaction, workplace culture, and mental health.',
      icon: 'BrainIcon'
    }, {
      id: 'commodity-fetishism',
      name: 'Commodity Fetishism',
      description: 'The perception of social relationships between people as economic relationships between things.',
      quote: 'A commodity appears at first sight an extremely obvious, trivial thing. But its analysis brings out that it is a very strange thing, abounding in metaphysical subtleties and theological niceties.',
      applications: 'Analysis of consumer culture, advertising, and market behavior.',
      icon: 'LayersIcon'
    }],
    videoReviewUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  }
  // Additional books would be defined here...
};
const BookDetail = () => {
  const {
    bookId
  } = useParams<{
    bookId: string;
  }>();
  const [selectedConceptIndex, setSelectedConceptIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const book = bookId ? booksData[bookId as keyof typeof booksData] : null;
  useEffect(() => {
    // Reset selected concept when book changes
    setSelectedConceptIndex(0);
    setShowVideo(false);
  }, [bookId]);
  if (!book) {
    return <div className="flex flex-col items-center justify-center min-h-[70vh]">
        <BookOpenIcon size={64} className="text-gray-400 mb-4" />
        <h2 className="text-2xl font-bold text-gray-700">Book not found</h2>
        <Link to="/library" className="mt-4 text-[#008080] hover:underline">
          Return to library
        </Link>
      </div>;
  }
  const selectedConcept = book.concepts[selectedConceptIndex];
  // Get icon component based on string name
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'LightbulbIcon':
        return <LightbulbIcon size={24} />;
      case 'BrainIcon':
        return <BrainIcon size={24} />;
      case 'ScaleIcon':
        return <ScaleIcon size={24} />;
      case 'LayersIcon':
        return <LayersIcon size={24} />;
      default:
        return <LightbulbIcon size={24} />;
    }
  };
  return <div className="w-full bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back button */}
        <Link to="/library" className="inline-flex items-center text-[#243975] hover:text-[#243975]/80 mb-8">
          <ArrowLeftIcon size={16} className="mr-2" />
          Back to Library
        </Link>
        {/* Book header */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
          <div className="h-2 w-full" style={{
          backgroundColor: book.coverColor
        }}></div>
          <div className="p-8 flex flex-col md:flex-row gap-8">
            {/* Book color block */}
            <div className="w-32 h-48 flex-shrink-0 shadow-lg rounded-md flex items-center justify-center" style={{
            backgroundColor: book.coverColor
          }}>
              <BookOpenIcon size={48} className="text-white/80" />
            </div>
            {/* Book info */}
            <div>
              <h1 className="text-3xl font-bold text-[#243975] mb-2">
                {book.title}
              </h1>
              <p className="text-xl text-gray-700 mb-4">
                {book.author}, {book.year}
              </p>
              <p className="text-gray-600 mb-6 max-w-2xl">{book.summary}</p>
              <button onClick={() => setShowVideo(!showVideo)} className="inline-flex items-center px-4 py-2 bg-[#d7c770] text-[#243975] rounded-md hover:bg-[#d7c770]/90 transition-colors">
                <PlayIcon size={16} className="mr-2" />
                {showVideo ? 'Hide Video Review' : 'Watch Video Review'}
              </button>
            </div>
          </div>
        </div>
        {/* Video review section */}
        {showVideo && <div className="mb-12 bg-white rounded-xl shadow-md overflow-hidden">
            <div className="h-2 w-full" style={{
          backgroundColor: book.coverColor
        }}></div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-[#243975] mb-4">
                Video Review
              </h2>
              <div className="aspect-w-16 aspect-h-9">
                <iframe src={book.videoReviewUrl} title={`Video review of ${book.title}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-[400px] rounded-md"></iframe>
              </div>
            </div>
          </div>}
        {/* Key Concepts Section */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
          <div className="h-2 w-full" style={{
          backgroundColor: book.coverColor
        }}></div>
          <div className="p-6">
            <h2 className="text-2xl font-bold text-[#243975] mb-6">
              Key Concepts
            </h2>
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Concept navigation */}
              <div className="w-full lg:w-64 flex-shrink-0">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-medium text-gray-700 mb-3">Core Ideas</h3>
                  <div className="space-y-2">
                    {book.concepts.map((concept, index) => <button key={concept.id} onClick={() => setSelectedConceptIndex(index)} className={`w-full text-left px-3 py-2 rounded-md flex items-center justify-between transition-colors ${index === selectedConceptIndex ? 'bg-[#243975] text-white' : 'hover:bg-gray-100 text-gray-700'}`}>
                        <span>{concept.name}</span>
                        <ChevronRightIcon size={16} className={index === selectedConceptIndex ? 'text-white' : 'text-gray-400'} />
                      </button>)}
                  </div>
                </div>
              </div>
              {/* Concept detail */}
              <div className="flex-grow">
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3" style={{
                    backgroundColor: book.coverColor
                  }}>
                      {getIconComponent(selectedConcept.icon)}
                    </div>
                    <h3 className="text-xl font-bold text-[#243975]">
                      {selectedConcept.name}
                    </h3>
                  </div>
                  {/* Concept details in cards */}
                  <div className="space-y-6">
                    {/* Description */}
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="text-sm font-semibold text-[#008080] uppercase tracking-wider mb-2">
                        Concept Overview
                      </h4>
                      <p className="text-gray-700">
                        {selectedConcept.description}
                      </p>
                    </div>
                    {/* Quote */}
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="text-sm font-semibold text-[#008080] uppercase tracking-wider mb-2 flex items-center">
                        <QuoteIcon size={14} className="mr-1" /> Key Quote
                      </h4>
                      <blockquote className="pl-4 border-l-2 border-[#d7c770] italic text-gray-700">
                        "{selectedConcept.quote}"
                      </blockquote>
                    </div>
                    {/* Applications */}
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="text-sm font-semibold text-[#008080] uppercase tracking-wider mb-2">
                        Modern Applications
                      </h4>
                      <p className="text-gray-700">
                        {selectedConcept.applications}
                      </p>
                    </div>
                    {/* Navigation buttons */}
                    <div className="flex justify-between pt-4">
                      <button onClick={() => setSelectedConceptIndex(prev => Math.max(0, prev - 1))} disabled={selectedConceptIndex === 0} className={`px-4 py-2 rounded-md flex items-center ${selectedConceptIndex === 0 ? 'text-gray-400 cursor-not-allowed' : 'text-[#243975] hover:bg-[#243975]/10'}`}>
                        <ArrowLeftIcon size={16} className="mr-1" />
                        Previous Concept
                      </button>
                      <button onClick={() => setSelectedConceptIndex(prev => Math.min(book.concepts.length - 1, prev + 1))} disabled={selectedConceptIndex === book.concepts.length - 1} className={`px-4 py-2 rounded-md flex items-center ${selectedConceptIndex === book.concepts.length - 1 ? 'text-gray-400 cursor-not-allowed' : 'text-[#243975] hover:bg-[#243975]/10'}`}>
                        Next Concept
                        <ChevronRightIcon size={16} className="ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default BookDetail;