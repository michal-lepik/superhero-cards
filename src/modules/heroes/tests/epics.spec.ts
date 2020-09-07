import { Subject, of, throwError } from 'rxjs';
import { StateObservable, ActionsObservable } from 'redux-observable';

import { AppState } from 'common/models/appStateModel';
import * as actions from '../actions';
import { heroesEpicFactory } from '../epics';
import { defaultHeroesState } from '../reducers';
import { HeroesService } from '../services';

import { heroMock, errorMock, searchedHeroesMock } from './mocks';

describe('heroesEpics', () => {
    const heroesServiceMock = HeroesService as jest.Mock<HeroesService>;
    const mockState = new StateObservable<AppState>(new Subject(), {
        heroes: defaultHeroesState,
    });
    let heroesService: HeroesService;

    beforeEach(() => {
        heroesService = new heroesServiceMock();
    });

    describe('getHeroEpic', () => {
        it('should fetch hero', done => {
            jest.spyOn(heroesService, 'getHero').mockImplementation(() => of(heroMock));

            const heroesEpicFactoryInstance = heroesEpicFactory(heroesService);
            const action$ = of(actions.getHeroAsync.request(655));

            heroesEpicFactoryInstance(new ActionsObservable(action$), mockState, null).subscribe(res => {
                expect(res).toMatchObject(actions.getHeroAsync.success(heroMock));

                done();
            });
        });

        it('should handle error', done => {
            jest.spyOn(heroesService, 'getHero').mockImplementation(() => throwError(errorMock));

            const heroesEpicFactoryInstance = heroesEpicFactory(heroesService);
            const action$ = of(actions.getHeroAsync.request(655));

            heroesEpicFactoryInstance(new ActionsObservable(action$), mockState, null).subscribe(res => {
                expect(res).toMatchObject(actions.getHeroAsync.failure(errorMock));

                done();
            });
        });
    });

    describe('searchHeroesEpics', () => {
        it('should search for heroes with given name', done => {
            jest.spyOn(heroesService, 'searchHero').mockImplementation(() => of(searchedHeroesMock));

            const heroesEpicFactoryInstance = heroesEpicFactory(heroesService);
            const action$ = of(actions.searchHeroesAsync.request('thanos'));

            heroesEpicFactoryInstance(new ActionsObservable(action$), mockState, null).subscribe(res => {
                expect(res).toMatchObject(actions.searchHeroesAsync.success(searchedHeroesMock));

                done();
            });
        });

        it('should handle error', done => {
            jest.spyOn(heroesService, 'searchHero').mockImplementation(() => throwError(errorMock));

            const heroesEpicFactoryInstance = heroesEpicFactory(heroesService);
            const action$ = of(actions.searchHeroesAsync.request('thanos'));

            heroesEpicFactoryInstance(new ActionsObservable(action$), mockState, null).subscribe(res => {
                expect(res).toMatchObject(actions.searchHeroesAsync.failure(errorMock));

                done();
            });
        });
    });
});
