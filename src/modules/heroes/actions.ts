import { createAsyncAction } from 'typesafe-actions';

import { HttpError } from 'common/models/HttpError';
import { Hero } from './models/Hero';
import { SearchedHeroes } from './models/SearchedHeroes';

export const getHeroAsync = createAsyncAction('GET_HERO_REQUEST', 'GET_HERO_SUCCESS', 'GET_HERO_FAIL')<
    number,
    Hero,
    HttpError
>();

export const searchHeroesAsync = createAsyncAction(
    'SEARCH_HEROES_REQUEST',
    'SEARCH_HEROES_SUCCESS',
    'SEARCH_HEROES_FAILURE',
)<string, SearchedHeroes, HttpError>();
