import { Character } from './character';

export interface Location {
    id: String;
    name: String;
    type: String;
    dimension: String;
    residents?: Character[];
    created: String;
}

export interface FilterLocation {
    name: String;
    type: String;
    dimension: String;
}