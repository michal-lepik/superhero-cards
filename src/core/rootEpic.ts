import { combineEpics } from 'redux-observable';

import { heroesEpicFactory } from 'modules/heroes/epics';
import { heroesService } from './rootService';

export const rootEpic = combineEpics(heroesEpicFactory(heroesService));
