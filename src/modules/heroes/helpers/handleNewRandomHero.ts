import { Hero } from '../models/Hero';

export const handleNewRandomHero = (newHero: Hero, heroes: Hero[]): Hero[] =>
    heroes.length < 3 ? [...heroes, newHero] : [...heroes.slice(-2), newHero];
