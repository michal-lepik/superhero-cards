import { createSelector } from 'reselect';

import { AppState } from 'common/models/appStateModel';

export const getHeroesState = (state: AppState) => state.heroes;
export const getIsFetching = createSelector(getHeroesState, state => state.isFetching);
export const getSelectedHero = createSelector(getHeroesState, state => state.selectedHero);
export const getIsSearching = createSelector(getHeroesState, state => state.isSearching);
export const getSearchedHeroes = createSelector(getHeroesState, state => state.searchedHeroes);
