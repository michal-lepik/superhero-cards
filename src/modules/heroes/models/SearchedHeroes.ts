import { Hero, HeroResponse } from './Hero';

export interface SearchedHeroes {
    response: HeroResponse;
    resultsFor: string;
    results?: Hero[];
}
