import { filter, pluck, switchMap, catchError, map } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import { of } from 'rxjs';
import { combineEpics } from 'redux-observable';

import { Epic } from 'common/models/epicModel';
import { HttpError } from 'common/models/HttpError';
import * as actions from './actions';
import { HeroesService } from './services';

export const heroesEpicFactory = (heroesService: HeroesService): Epic => {
    const getHero: Epic = action$ =>
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

    return combineEpics(getHero);
};
