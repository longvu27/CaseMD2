export class Account {
    private _id: number;
    private _name: string;
    private _password: number;

    constructor(id: number, name: string, password: number) {
        this._id = id;
        this._name = name;
        this._password = password;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get password(): number {
        return this._password;
    }

    set password(value: number) {
        this._password = value;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }
}