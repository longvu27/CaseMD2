import {Manage} from "./manage";
import {Account} from "../model/account";
import {ManageAlbum} from "./manageAlbum";
import {Song} from "../model/song";

export class ManageAccount implements Manage<Account> {
    listAccount: Account[] = [];

    add(t: Account) {
        this.listAccount.push(t);
    }

    delete() {
    }

    edit() {
    }

    showAll() {

    }

    findByName(name: string, password: number) {
        for (let i = 0; i < this.listAccount.length; i++) {
            if (this.listAccount[i].name == name && this.listAccount[i].password == password) {
                return i;
            }
        }
        return -1;
    }
}