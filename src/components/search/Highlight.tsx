import React from 'react';
import { queryTerms } from '../../data/search';

// Bolds the searched words inside a text, like Google's result snippets
export const Highlight: React.FC<{ text: string; query: string }> = ({ text, query }) => {
  const terms = queryTerms(query);
  if (!terms.length) return <>{text}</>;
  const pattern = new RegExp(`(${terms.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'gi');
  return (
    <>
      {text.split(pattern).map((part, i) =>
        i % 2 === 1 ? <strong key={i} className="font-bold text-gray-900">{part}</strong> : <React.Fragment key={i}>{part}</React.Fragment>
      )}
    </>
  );
};
