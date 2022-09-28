"use strict";
exports.__esModule = true;
exports.ManageAlbum = void 0;
var ManageAlbum = /** @class */ (function () {
    function ManageAlbum(user) {
        this.listAlbum = [];
        this._user = user;
    }
    ManageAlbum.prototype.add = function (t) {
        this.listAlbum.push(t);
    };
    ManageAlbum.prototype["delete"] = function (name) {
        var index = this.findByName(name);
        this.listAlbum.splice(index, 1);
    };
    ManageAlbum.prototype.edit = function (name, t) {
        var index = this.findByName(name);
        this.listAlbum[index] = t;
    };
    ManageAlbum.prototype.showAll = function () {
        return this.listAlbum;
    };
    ManageAlbum.prototype.findByName = function (name) {
        for (var i = 0; i < this.listAlbum.length; i++) {
            if (this.listAlbum[i].name == name) {
                return i;
            }
        }
        return -1;
    };
    Object.defineProperty(ManageAlbum.prototype, "user", {
        get: function () {
            return this._user;
        },
        set: function (value) {
            this._user = value;
        },
        enumerable: false,
        configurable: true
    });
    return ManageAlbum;
}());
exports.ManageAlbum = ManageAlbum;
