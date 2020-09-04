import { combineReducers } from 'redux';

import { heroesReducer } from 'modules/heroes/reducers';

export const rootReducer = combineReducers({
    heroes: heroesReducer,
});
