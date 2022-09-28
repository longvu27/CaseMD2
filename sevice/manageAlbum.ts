import {Manage} from "./manage";
import {Album} from "../model/album";
import {Account} from "../model/account";

export class ManageAlbum implements Manage<Album> {
    private _user: Account;


    constructor(user: Account) {
        this._user = user;
    }

    listAlbum: Album[] = [];

    add(t: Album) {
        this.listAlbum.push(t);
    }

    delete(name: string) {
        let index = this.findByName(name);
        this.listAlbum.splice(index,1);
    }

    edit(name: string, t: Album) {
        let index = this.findByName(name);
        this.listAlbum[index] = t;
    }

    showAll() {
        return this.listAlbum;
    }

    findByName(name: string) {
        for (let i = 0; i < this.listAlbum.length; i++) {
            if (this.listAlbum[i].name == name) {
                return i;
            }
        }
        return -1;
    }


    get user(): Account {
        return this._user;
    }

    set user(value: Account) {
        this._user = value;
    }
}