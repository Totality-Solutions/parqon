import React, { useEffect, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Container } from '../../components/common/Container';
import { SearchBox } from '../../components/search/SearchBox';
import { Highlight } from '../../components/search/Highlight';
import { search } from '../../data/search';

const PER_PAGE = 10;
const KIND_LABEL = { product: 'Product', category: 'Category', page: 'Page' } as const;

// Google-style results page: /search?q=...
export const SearchPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') ?? '';
  const [page, setPage] = useState(1);

  const startedAt = useMemo(() => performance.now(), [query]);
  const results = useMemo(() => search(query), [query]);
  const seconds = ((performance.now() - startedAt) / 1000).toFixed(2);

  useEffect(() => setPage(1), [query]);

  const totalPages = Math.ceil(results.length / PER_PAGE);
  const pageResults = results.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return (
    <section className="bg-white min-h-screen pt-10 pb-24">
      <Container>
        <div className="max-w-3xl">
          <SearchBox initialQuery={query} autoFocus={!query} />

          {query ? (
            <>
              <p className="mt-6 mb-8 text-sm text-gray-500">
                About {results.length} {results.length === 1 ? 'result' : 'results'} ({seconds} seconds)
              </p>

              {results.length ? (
                <ol className="space-y-8">
                  {pageResults.map((r) => (
                    <li key={r.url} className="flex gap-5">
                      <div className="flex-1 min-w-0">
                        {/* breadcrumb line, like Google's site path */}
                        <div className="flex items-center gap-2 text-xs text-gray-600 mb-1 min-w-0">
                          <span className="w-6 h-6 rounded-full bg-[#837B55]/15 text-[#837B55] text-[10px] font-bold flex items-center justify-center shrink-0">P</span>
                          <span className="truncate">{r.breadcrumb.join(' › ')}</span>
                          <span className="shrink-0 text-[10px] uppercase tracking-wider text-gray-400 border border-gray-200 px-1.5 py-px rounded">{KIND_LABEL[r.kind]}</span>
                        </div>
                        <Link to={r.url} className="block text-lg md:text-xl text-[#1a0dab] hover:underline visited:text-[#681da8] leading-snug">
                          <Highlight text={r.title} query={query} />
                        </Link>
                        <p className="mt-1 text-sm text-gray-600 leading-relaxed line-clamp-2">
                          <Highlight text={r.snippet} query={query} />
                        </p>
                      </div>
                      {r.image && (
                        <Link to={r.url} className="shrink-0" tabIndex={-1} aria-hidden="true">
                          <img src={r.image} alt="" className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-lg bg-gray-100" loading="lazy" />
                        </Link>
                      )}
                    </li>
                  ))}
                </ol>
              ) : (
                <div className="text-gray-700 space-y-3">
                  <p>Your search – <strong>{query}</strong> – did not match any products or pages.</p>
                  <p className="text-sm text-gray-500">Suggestions:</p>
                  <ul className="list-disc pl-6 text-sm text-gray-500 space-y-1">
                    <li>Make sure all words are spelled correctly.</li>
                    <li>Try a wood species (oak, walnut, teak), a pattern (herringbone, chevron) or a category (deck, cladding).</li>
                    <li>Try fewer words.</li>
                  </ul>
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <nav className="mt-12 flex items-center gap-2 text-sm" aria-label="Search result pages">
                  <button disabled={page === 1} onClick={() => { setPage(page - 1); window.scrollTo({ top: 0 }); }} className="px-3 py-2 text-[#1a0dab] disabled:text-gray-300 hover:underline">Previous</button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                    <button
                      key={n}
                      onClick={() => { setPage(n); window.scrollTo({ top: 0 }); }}
                      className={`w-9 h-9 rounded-full ${n === page ? 'bg-[#837B55] text-white font-bold' : 'text-[#1a0dab] hover:bg-gray-100'}`}
                    >
                      {n}
                    </button>
                  ))}
                  <button disabled={page === totalPages} onClick={() => { setPage(page + 1); window.scrollTo({ top: 0 }); }} className="px-3 py-2 text-[#1a0dab] disabled:text-gray-300 hover:underline">Next</button>
                </nav>
              )}
            </>
          ) : (
            <p className="mt-6 text-sm text-gray-500">Search across all Parqon products, categories and pages.</p>
          )}
        </div>
      </Container>
    </section>
  );
};

export default SearchPage;
