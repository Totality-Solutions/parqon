import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { search } from '../../data/search';
import { Highlight } from './Highlight';

interface SearchBoxProps {
  initialQuery?: string;
  autoFocus?: boolean;
  placeholder?: string;
  // compact = smaller box (e.g. the products sidebar)
  compact?: boolean;
  // called after the visitor goes somewhere (to close an overlay)
  onNavigate?: () => void;
}

const SUGGESTION_LIMIT = 6;

// Google-style search box: rounded field, live suggestions, keyboard navigation, Enter -> results page
export const SearchBox: React.FC<SearchBoxProps> = ({ initialQuery = '', autoFocus, placeholder = 'Search products, wood species, patterns…', compact, onNavigate }) => {
  const navigate = useNavigate();
  const [query, setQuery] = useState(initialQuery);
  const [open, setOpen] = useState(false);
  const [highlighted, setHighlighted] = useState(-1);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => setQuery(initialQuery), [initialQuery]);

  const suggestions = useMemo(() => search(query, SUGGESTION_LIMIT), [query]);

  // Close the dropdown when clicking outside
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!wrapperRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  const go = (url: string) => {
    setOpen(false);
    navigate(url);
    onNavigate?.();
  };

  const submit = () => {
    if (highlighted >= 0 && suggestions[highlighted]) return go(suggestions[highlighted].url);
    if (query.trim()) go(`/search?q=${encodeURIComponent(query.trim())}`);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setOpen(true);
      setHighlighted((h) => Math.min(h + 1, suggestions.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlighted((h) => Math.max(h - 1, -1));
    } else if (e.key === 'Escape') {
      setOpen(false);
    }
  };

  const showDropdown = open && query.trim().length > 0;

  return (
    <div ref={wrapperRef} className="relative w-full">
      <form
        role="search"
        onSubmit={(e) => {
          e.preventDefault();
          submit();
        }}
        className={`flex items-center gap-3 w-full bg-white border border-gray-200 transition-shadow hover:shadow-md focus-within:shadow-md ${
          showDropdown && suggestions.length ? 'rounded-t-3xl border-b-transparent shadow-md' : 'rounded-full'
        } ${compact ? 'h-11 px-4' : 'h-14 px-5'}`}
      >
        <Search size={compact ? 16 : 20} className="text-gray-400 shrink-0" />
        <input
          type="search"
          value={query}
          autoFocus={autoFocus}
          placeholder={placeholder}
          aria-label="Search the site"
          aria-autocomplete="list"
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
            setHighlighted(-1);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={onKeyDown}
          className={`flex-1 min-w-0 bg-transparent outline-none text-gray-900 placeholder:text-gray-400 [&::-webkit-search-cancel-button]:hidden ${compact ? 'text-sm' : 'text-base'}`}
        />
        {query && (
          <button type="button" aria-label="Clear search" onClick={() => { setQuery(''); setHighlighted(-1); }} className="text-gray-400 hover:text-gray-700 shrink-0">
            <X size={compact ? 16 : 20} />
          </button>
        )}
      </form>

      {/* Suggestions */}
      {showDropdown && (
        <div className="absolute left-0 right-0 top-full z-50 bg-white border border-t-0 border-gray-200 rounded-b-3xl shadow-md overflow-hidden">
          {suggestions.length ? (
            <ul role="listbox" className="py-2 border-t border-gray-100 mx-4">
              {suggestions.map((s, i) => (
                <li key={s.url} role="option" aria-selected={i === highlighted}>
                  <button
                    type="button"
                    onMouseEnter={() => setHighlighted(i)}
                    onClick={() => go(s.url)}
                    className={`w-full flex items-center gap-3 px-2 py-2 text-left rounded-lg ${i === highlighted ? 'bg-gray-100' : ''}`}
                  >
                    {s.image ? (
                      <img src={s.image} alt="" className="w-10 h-10 object-cover rounded shrink-0 bg-gray-100" />
                    ) : (
                      <span className="w-10 h-10 rounded shrink-0 bg-gray-100 flex items-center justify-center"><Search size={14} className="text-gray-400" /></span>
                    )}
                    <span className="min-w-0">
                      <span className="block text-sm text-gray-600 truncate"><Highlight text={s.title} query={query} /></span>
                      <span className="block text-[11px] text-gray-400 truncate">{s.breadcrumb.slice(1).join(' › ')}</span>
                    </span>
                  </button>
                </li>
              ))}
              <li>
                <button type="button" onClick={() => go(`/search?q=${encodeURIComponent(query.trim())}`)} className="w-full text-left px-2 py-2 text-sm text-[#924321] font-semibold hover:underline">
                  See all results for “{query.trim()}”
                </button>
              </li>
            </ul>
          ) : (
            <p className="px-6 py-4 text-sm text-gray-500 border-t border-gray-100">No matches for “{query.trim()}”</p>
          )}
        </div>
      )}
    </div>
  );
};
