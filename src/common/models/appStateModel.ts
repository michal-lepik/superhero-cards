import { StateType } from 'typesafe-actions';

import { rootReducer } from 'core/rootReducer';

export type AppState = StateType<typeof rootReducer>;
