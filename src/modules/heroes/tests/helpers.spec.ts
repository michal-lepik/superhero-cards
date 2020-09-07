import { handleNewRandomHero } from '../helpers/handleNewRandomHero';

import { heroMock, secondHeroMock } from './mocks';

describe('handleNewRandomHero', () => {
    it('should add hero if arrays lengths is less than 3', () => {
        const result = handleNewRandomHero(heroMock, [heroMock]);

        expect(result).toMatchObject([heroMock, heroMock]);
    });

    it('should remove first element of the array if the length is 3', () => {
        const result = handleNewRandomHero(heroMock, [secondHeroMock, heroMock, heroMock]);

        expect(result).toMatchObject([heroMock, heroMock, heroMock]);
    });
});
