import { createAsyncAction } from 'typesafe-actions';

import { HttpError } from 'common/models/HttpError';
import { Hero } from './models/Hero';

export const getHeroAsync = createAsyncAction('GET_HERO_REQUEST', 'GET_HERO_SUCCESS', 'GET_HERO_FAIL')<
    number,
    Hero,
    HttpError
>();
