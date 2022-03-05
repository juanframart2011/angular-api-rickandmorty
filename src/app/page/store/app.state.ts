import { Result } from 'src/app/interface/result';
import { Character } from '../../interface/character';
import { Episode } from '../../interface/episode';
import { Location } from '../../interface/location';

export const characterFeatureName = 'CHARACTER';
export const episodeFeatureName = 'EPISODE';
export const locationFeatureName = 'LOCATION';

export interface CharacterState {
	getAllCharacter?: Result<Character[]>;
	getDetailCharacter?: Character;
	errorMessage?: string | undefined;
}

export interface EpisodeState {
	getAllEpisode?: Result<Episode[]>;
	errorMessage?: string | undefined;
}

export interface LocationState {
	getAllLocation?: Result<Location[]>;
	errorMessage?: string | undefined;
}