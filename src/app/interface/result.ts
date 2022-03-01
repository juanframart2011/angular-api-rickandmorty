import { Info } from './info';

export interface Result<T> {

    info: Info;
    results:T[];
}