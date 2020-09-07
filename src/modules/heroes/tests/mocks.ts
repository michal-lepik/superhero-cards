import { Hero, HeroResponse } from '../models/Hero';
import { SearchedHeroes } from '../models/SearchedHeroes';
import { HttpError } from 'common/models/HttpError';

export const heroMock: Hero = {
    response: HeroResponse.Success,
    id: 655,
    name: 'Thanos',
    powerstats: {
        intelligence: 100,
        strength: 100,
        speed: 33,
        durability: 100,
        power: 100,
        combat: 80,
    },
    appearance: {
        gender: 'Male',
        race: 'Eternal',
        height: ["6'7", '201 cm'],
        weight: ['985 lb', '443 kg'],
        eyeColor: 'Red',
        hairColor: 'No Hair',
    },
    image: {
        url: 'https://www.superherodb.com/pictures2/portraits/10/100/1305.jpg',
    },
};

export const secondHeroMock: Hero = {
    response: HeroResponse.Success,
    id: 69,
    name: 'Batman',
    powerstats: {
        intelligence: 81,
        strength: 40,
        speed: 29,
        durability: 55,
        power: 63,
        combat: 90,
    },
    appearance: {
        gender: 'Male',
        race: 'Human',
        height: ["5'10", '178 cm'],
        weight: ['170 lb', '77 kg'],
        eyeColor: 'Blue',
        hairColor: 'Black',
    },
    image: {
        url: 'https://www.superherodb.com/pictures2/portraits/10/100/10441.jpg',
    },
};

export const searchedHeroesMock: SearchedHeroes = {
    response: HeroResponse.Success,
    resultsFor: 'thanos',
    results: [heroMock],
};

export const errorMock = new HttpError('error', 403);
