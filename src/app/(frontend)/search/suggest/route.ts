// Live suggestions for the header search box: GET /search/suggest?q=oak
import { NextResponse } from 'next/server';
import { getCatalog } from '@/lib/catalog/server';
import { search } from '@/lib/catalog/search';

const LIMIT = 6;

export async function GET(request: Request) {
  const query = (new URL(request.url).searchParams.get('q') ?? '').slice(0, 100);
  const results = query.trim() ? search(await getCatalog(), query, LIMIT) : [];
  return NextResponse.json(results, { headers: { 'Cache-Control': 'public, max-age=60' } });
}
