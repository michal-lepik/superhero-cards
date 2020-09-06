import { heroesIds } from 'config/variables';

const randomInteger = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

export const getRandomHeroId = () => randomInteger(1, heroesIds);

export const getRandomIdArray = (length = 3): number[] =>
    Array.from(Array(length).keys()).map(getRandomHeroId);
