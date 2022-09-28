import {Manage} from "./manage";
import {Song} from "../model/song";

export class ManageSongOfAlbum implements Manage<Song> {
    listSongOfAlbum: Song[] = [];

    add(t: Song, id: number) {
        this.listSongOfAlbum.push(t);
    }

    delete() {
    }

    edit() {
    }

    showAll() {
        return this.listSongOfAlbum;
    }

}