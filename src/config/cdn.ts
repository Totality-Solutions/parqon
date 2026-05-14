export const CDN_BASE_URL = 'https://dueyys3d8qg20.cloudfront.net';

export const cdn = (path: string): string => `${CDN_BASE_URL}${path}`;
