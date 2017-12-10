import { getCharacters, getWorlds, getVehicles, getFilmCrawl } from './apiCalls';
import { mockPlanetApiResponse, mockVehicleApiResponse, mockPeopleApiResponse } from './__mocks__/mockApiResponse';

describe('fetch characters tests',() => {
	beforeEach(() => {
		window.fetch = 
			jest.fn().mockImplementation(() =>
			Promise.resolve({
				status: 200,
				json: () => Promise.resolve(
					{results: mockPeopleApiResponse.results}
				),
			}))
	})

	it('fetch characters is called with the correct params', async () => {
		const expected = [
			'https://swapi.co/api/people/'
		];
		await getCharacters();
		expect(window.fetch).toHaveBeenCalledWith(...expected);
	})
})

describe('fetch worlds tests',() => {
	beforeEach(() => {
		window.fetch = 
			jest.fn().mockImplementation(() =>
			Promise.resolve({
				status: 200,
				json: () => Promise.resolve(
					{results: mockPlanetApiResponse.results}
				),
			}))
	})

	it('fetch worlds is called with the correct params', async () => {
		const expected = [
			'https://swapi.co/api/planets/'
		];
		await getWorlds();
		expect(window.fetch).toHaveBeenCalledWith(...expected);
	})
})

describe('fetch worlds tests',() => {
	beforeEach(() => {
		window.fetch = 
			jest.fn().mockImplementation(() =>
			Promise.resolve({
				status: 200,
				json: () => Promise.resolve(
					{results: mockVehicleApiResponse.results}
				),
			}))
	})

	it('fetch worlds is called with the correct params', async () => {
		const expected = [
			'https://swapi.co/api/vehicles/'
		];
		await getVehicles();
		expect(window.fetch).toHaveBeenCalledWith(...expected);
	})
})

describe('error handling tests',() => {
	it('should throw an error if fetch is rejected', async () => {
		window.fetch = jest.fn().mockImplementation(() => Promise.reject({
			status: 500,
		}));
		const expectedError = Error('Fetch failed');
		const getCharacterData = await getCharacters();
		const getWorldData = await getWorlds();
		const getVehicleData = await getVehicles();
		const getFilmData = await getFilmCrawl();

		expect(getCharacterData).toEqual(expectedError);
		expect(getWorldData).toEqual(expectedError);
		expect(getVehicleData).toEqual(expectedError);
		expect(getFilmData).toEqual(expectedError);
	})
})