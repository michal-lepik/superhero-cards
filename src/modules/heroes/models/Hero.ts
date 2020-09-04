export interface Hero {
    id: number;
    name: string;
    powerstats: Powerstats;
    appearance: Appearance;
}

export interface Powerstats {
    intelligence: number;
    strength: number;
    speed: number;
    durability: number;
    power: number;
    combat: number;
}

export interface Appearance {
    gender: string;
    race: string;
    height: string[];
    weight: string[];
    eyeColor: string;
    hairColor: string;
}
