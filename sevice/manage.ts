import {Album} from "../model/album";

export interface Manage<T> {
    add(t: T, id: number);
    showAll();
    delete(name: string);
    edit(name: string, t: T);
}