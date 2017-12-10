import pullOpeningCrawl from './helper';
import { mockFilmApiResponse } from './__mocks__/mockApiResponse';

describe('Helper data cleaning tests', () => {
  it('should return cleaned data in the needed format', () => {
    const rawData = mockFilmApiResponse;
		
    expect(pullOpeningCrawl(rawData)).toHaveProperty('title', 'RETURN OF THE JEDI');
    expect(pullOpeningCrawl(rawData)).toHaveProperty('date', 'May 25, 1983');
    expect(pullOpeningCrawl(rawData)).toHaveProperty('episode', 'VI');
  });
});