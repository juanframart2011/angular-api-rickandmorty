import { Character } from './character';

export interface Episode {

    id: String;
    name: String;
    air_date: String;
    episode: String;
    characters?: Character[];
    created: String;
}

export interface FilterEpisode {
    name: String;
    episode: String;
}