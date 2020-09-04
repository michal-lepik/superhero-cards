import { createReducer } from 'typesafe-actions';

import { AppAction } from 'common/models/actionModel';

import * as actions from './actions';
import { Hero } from './models/Hero';

export interface HeroesState {
    isFetching: boolean;
    selectedHero?: Hero;
}

export const defaultHeroesState: HeroesState = {
    isFetching: false,
};

export const heroesReducer = createReducer<HeroesState, AppAction>(defaultHeroesState)
    .handleAction(actions.getHeroAsync.request, state => ({ ...state, isFetching: true }))
    .handleAction(actions.getHeroAsync.success, (state, action) => ({
        ...state,
        isFetching: false,
        selectedHero: action.payload,
    }))
    .handleAction(actions.getHeroAsync.failure, state => ({ ...state, isFetching: false }));
