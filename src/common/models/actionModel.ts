import { ActionType } from 'typesafe-actions';

import * as heroesActions from 'modules/heroes/actions';

const rootAction = {
    heroes: heroesActions,
};

export type AppAction = ActionType<typeof rootAction>;
