"use strict";
exports.__esModule = true;
exports.ManageSong = void 0;
var ManageSong = /** @class */ (function () {
    function ManageSong() {
        this.listSong = [];
    }
    ManageSong.prototype.add = function (t) {
        this.listSong.push(t);
    };
    ManageSong.prototype["delete"] = function () {
    };
    ManageSong.prototype.edit = function () {
    };
    ManageSong.prototype.showAll = function () {
        return this.listSong;
    };
    return ManageSong;
}());
exports.ManageSong = ManageSong;
