import { createReducer } from 'typesafe-actions';

import { AppAction } from 'common/models/actionModel';

import * as actions from './actions';
import { Hero } from './models/Hero';
import { SearchedHeroes } from './models/SearchedHeroes';
import { handleNewRandomHero } from './helpers/handleNewRandomHero';

export interface HeroesState {
    isFetching: boolean;
    isSearching: boolean;
    selectedHero?: Hero;
    searchedHeroes?: SearchedHeroes;
    randomHeroes: Hero[];
}

export const defaultHeroesState: HeroesState = {
    isFetching: false,
    isSearching: false,
    randomHeroes: [],
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
    .handleAction(actions.searchHeroesAsync.failure, state => ({ ...state, isSearching: false }))
    .handleAction(actions.getRandomHero, (state, action) => ({
        ...state,
        randomHeroes: handleNewRandomHero(action.payload, state.randomHeroes),
    }));
