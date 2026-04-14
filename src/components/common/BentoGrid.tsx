// src/components/common/BentoGrid.tsx
import React from 'react';

export type BentoBlock = 
  | { type: 'text'; title: string; body: string }
  | { type: 'image'; url: string }
  | { type: 'video'; url: any };

export const BentoGrid: React.FC<{ blocks: BentoBlock[] }> = ({ blocks }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-gray-100">
      {blocks.map((block, index) => (
        <div 
          key={index} 
          /* The 'h-[550px]' creates the vertical rectangle shape */
          className="relative border-r border-b border-gray-100 overflow-hidden flex flex-col h-[450px] md:h-[550px]"
        >
          {block.type === 'text' && (
            <div className="p-10 md:p-14 h-full flex flex-col justify-center bg-white">
              <h3 className="text-2xl font-bold mb-5 leading-tight text-gray-900 tracking-tight">
                {block.title}
              </h3>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed font-medium">
                {block.body}
              </p>
            </div>
          )}

          {block.type === 'image' && (
            <img 
              src={block.url} 
              className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" 
              alt="Gallery" 
            />
          )}

          {block.type === 'video' && (
            <video
              src={block.url}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          )}
        </div>
      ))}
    </div>
  );
};