import { Episode } from './episode';

export interface Character {
    id: String;
    name: String;
    status: String;
    species: String;
    type: String;
    gender: String;
    origin: Location;
    location: Location;
    image: String
    episode?: Episode[];
    created: String;
}

export interface FilterCharacter {
    name: String;
    status: String;
    species: String;
    type: String;
    gender: String;
}