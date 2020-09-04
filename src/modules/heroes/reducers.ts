import { createReducer } from 'typesafe-actions';

import { AppAction } from 'common/models/actionModel';

import * as actions from './actions';
import { Hero } from './models/Hero';
import { SearchedHeroes } from './models/SearchedHeroes';

export interface HeroesState {
    isFetching: boolean;
    isSearching: boolean;
    selectedHero?: Hero;
    searchedHeroes?: SearchedHeroes;
}

export const defaultHeroesState: HeroesState = {
    isFetching: false,
    isSearching: false,
};

export const heroesReducer = createReducer<HeroesState, AppAction>(defaultHeroesState)
    .handleAction(actions.getHeroAsync.request, state => ({ ...state, isFetching: true }))
    .handleAction(actions.getHeroAsync.success, (state, action) => ({
        ...state,
        isFetching: false,
        selectedHero: action.payload,
    }))
    .handleAction(actions.getHeroAsync.failure, state => ({ ...state, isFetching: false }))
    .handleAction(actions.searchHeroesAsync.request, state => ({ ...state, isSearching: true }))
    .handleAction(actions.searchHeroesAsync.success, (state, action) => ({
        ...state,
        isSearching: false,
        searchedHeroes: action.payload,
    }))
    .handleAction(actions.searchHeroesAsync.failure, state => ({ ...state, isSearching: false }));
