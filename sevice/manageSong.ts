import {Manage} from "./manage";
import {Song} from "../model/song";
import {Album} from "../model/album";

export class ManageSong implements Manage<Song> {
    listSong: Song[] = [];

    add(t: Song) {
        this.listSong.push(t);
    }

    delete() {
    }

    edit() {
    }

    showAll() {
        return this.listSong;
    }


}