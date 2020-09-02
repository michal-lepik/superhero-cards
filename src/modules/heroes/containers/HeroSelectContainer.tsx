import React from 'react';

import { HeroesCards } from 'modules/heroes/components/HeroesCards';
import { HeroSearch } from 'modules/heroes/components/HeroSearch';

export const HeroSelectContainer = () => (
    <main>
        <HeroSearch />
        <HeroesCards />
    </main>
);
