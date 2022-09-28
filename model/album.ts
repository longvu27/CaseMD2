import {Song} from "./song";

export class Album {
    private _name: string;
    private _listSong: Song[] = [];

    constructor( name: string) {
        this._name = name;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }


    get listSong(): Song[] {
        return this._listSong;
    }

    set listSong(value: Song[]) {
        this._listSong = value;
    }
}