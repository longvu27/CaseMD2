import {Account} from "./account";

export class Song {
    private _name: string;
    private _author: string;
    private _singer: string;

    constructor( name: string, author: string, singer: string) {

        this._name = name;
        this._author = author;
        this._singer = singer;
    }


    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get author(): string {
        return this._author;
    }

    set author(value: string) {
        this._author = value;
    }

    get singer(): string {
        return this._singer;
    }

    set singer(value: string) {
        this._singer = value;
    }

}