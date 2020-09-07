import { of } from 'rxjs';

import { HttpService } from 'common/services/httpService';
import { HttpMethod } from 'common/models/HttpModels';
import { HeroesService } from '../services';

import { heroMock, searchedHeroesMock } from './mocks';

describe('HeroesService', () => {
    const httpServiceMock = HttpService as jest.Mock<HttpService>;
    let httpService: HttpService;

    beforeEach(() => {
        httpService = new httpServiceMock();
    });

    describe('getHero', () => {
        it('should return hero with given id', done => {
            jest.spyOn(httpService, HttpMethod.GET).mockImplementation(() => of(heroMock));

            const heroesService = new HeroesService(httpService);

            heroesService.getHero(655).subscribe(res => {
                expect(res).toMatchObject(heroMock);

                done();
            });
        });
    });

    describe('searchHero', () => {
        it('should search for heroes with given name', done => {
            jest.spyOn(httpService, HttpMethod.GET).mockImplementation(() => of(searchedHeroesMock));

            const heroesService = new HeroesService(httpService);

            heroesService.searchHero('thanos').subscribe(res => {
                expect(res).toHaveProperty('resultsFor', 'thanos');

                done();
            });
        });
    });
});
