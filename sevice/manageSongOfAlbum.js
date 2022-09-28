"use strict";
exports.__esModule = true;
exports.ManageSongOfAlbum = void 0;
var ManageSongOfAlbum = /** @class */ (function () {
    function ManageSongOfAlbum() {
        this.listSongOfAlbum = [];
    }
    ManageSongOfAlbum.prototype.add = function (t, id) {
        this.listSongOfAlbum.push(t);
    };
    ManageSongOfAlbum.prototype["delete"] = function () {
    };
    ManageSongOfAlbum.prototype.edit = function () {
    };
    ManageSongOfAlbum.prototype.showAll = function () {
        return this.listSongOfAlbum;
    };
    return ManageSongOfAlbum;
}());
exports.ManageSongOfAlbum = ManageSongOfAlbum;
