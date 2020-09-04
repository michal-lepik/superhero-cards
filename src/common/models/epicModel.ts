import { Epic as _Epic } from 'redux-observable';

import { AppAction } from './actionModel';
import { AppState } from './appStateModel';

export type Epic = _Epic<AppAction, AppAction, AppState>;
