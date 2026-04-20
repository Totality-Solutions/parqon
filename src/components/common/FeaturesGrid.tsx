import React from 'react';

const FEATURES = [
  { title: 'Waterproof' },
  { title: 'Termite Resistant' },
  { title: 'Flooring In Less Than A Day' },
  { title: 'Made In India' }
];

export const FeaturesGrid: React.FC = () => {
  return (
    <div className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* The Container */}
        <div className="grid grid-cols-1 md:grid-cols-4 relative">
          
          {/* THE TOP CONTINUOUS LINE */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gray-200" />

          {FEATURES.map((feature, index) => (
            <div 
              key={index} 
              className={`relative py-14 px-6 flex flex-col items-center justify-center min-h-[160px]
                ${index !== 0 ? 'md:border-l border-gray-100' : ''} 
                border-b md:border-b-0 border-gray-100`}
            >
              {/* THE DOT (Placed exactly on the line) */}
              <div className="absolute -top-[4px] left-0 md:left-0 flex items-center justify-center">
                 <div className="w-[8px] h-[8px] rounded-full bg-[#D4B9A0] opacity-60" />
              </div>

              {/* THE TEXT */}
              <h3 className="text-gray-700  font-bold text-center  text-base md:text-lg tracking-wide leading-snug max-w-[180px]">
                {feature.title}
              </h3>
            </div>
          ))}
          
          {/* Right-end decorative line for the last item if needed */}
          <div className="absolute top-0 right-0 h-[1px] w-4 bg-gray-200 hidden md:block" />
        </div>
      </div>
    </div>
  );
};