"use strict";
exports.__esModule = true;
exports.Album = void 0;
var Album = /** @class */ (function () {
    function Album(name) {
        this._listSong = [];
        this._name = name;
    }
    Object.defineProperty(Album.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Album.prototype, "listSong", {
        get: function () {
            return this._listSong;
        },
        set: function (value) {
            this._listSong = value;
        },
        enumerable: false,
        configurable: true
    });
    return Album;
}());
exports.Album = Album;
