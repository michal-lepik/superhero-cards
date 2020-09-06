import {
    catchError,
    debounceTime,
    filter,
    flatMap,
    map,
    mergeMap,
    pluck,
    switchMap,
    takeUntil,
    startWith,
} from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import { of, interval } from 'rxjs';
import { combineEpics } from 'redux-observable';

import { Epic } from 'common/models/epicModel';
import { HttpError } from 'common/models/HttpError';
import * as actions from './actions';
import { HeroesService } from './services';
import { getRandomIdArray } from 'common/helpers/getRandomHeroId';

export const heroesEpicFactory = (heroesService: HeroesService): Epic => {
    const getHeroEpic: Epic = action$ =>
        action$.pipe(
            filter(isActionOf(actions.getHeroAsync.request)),
            pluck('payload'),
            switchMap(heroId =>
                heroesService.getHero(heroId).pipe(
                    map(actions.getHeroAsync.success),
                    catchError((err: HttpError) => of(actions.getHeroAsync.failure(err))),
                ),
            ),
        );

    const searchHeroesEpic: Epic = action$ =>
        action$.pipe(
            filter(isActionOf(actions.searchHeroesAsync.request)),
            debounceTime(500),
            pluck('payload'),
            switchMap(name =>
                heroesService.searchHero(name).pipe(
                    map(actions.searchHeroesAsync.success),
                    catchError((err: HttpError) => of(actions.searchHeroesAsync.failure(err))),
                ),
            ),
        );

    const randomHeroesEpic: Epic = action$ => {
        const stopRandom$ = action$.pipe(filter(isActionOf(actions.stopRandomHeroes)));

        return action$.pipe(
            filter(isActionOf(actions.startRandomHeroes)),
            switchMap(() =>
                interval(1000 * 15).pipe(
                    startWith(0),
                    takeUntil(stopRandom$),
                    mergeMap(() =>
                        getRandomIdArray().map(heroId =>
                            heroesService.getHero(heroId).pipe(
                                map(actions.getRandomHero),
                                catchError((err: HttpError) => of(actions.getHeroAsync.failure(err))),
                            ),
                        ),
                    ),
                ),
            ),
            flatMap(value => value),
        );
    };

    return combineEpics(getHeroEpic, searchHeroesEpic, randomHeroesEpic);
};
