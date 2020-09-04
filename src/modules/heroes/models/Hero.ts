export enum HeroResponse {
    Error = 'error',
    Success = 'success',
}

export interface Hero {
    id: number;
    name: string;
    response: HeroResponse;
    powerstats: Powerstats;
    appearance: Appearance;
    image: Image;
}

interface Powerstats {
    intelligence: number;
    strength: number;
    speed: number;
    durability: number;
    power: number;
    combat: number;
}

interface Appearance {
    gender: string;
    race: string;
    height: string[];
    weight: string[];
    eyeColor: string;
    hairColor: string;
}

interface Image {
    url: string;
}
