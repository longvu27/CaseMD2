"use strict";
exports.__esModule = true;
exports.ManageAccount = void 0;
var ManageAccount = /** @class */ (function () {
    function ManageAccount() {
        this.listAccount = [];
    }
    ManageAccount.prototype.add = function (t) {
        this.listAccount.push(t);
    };
    ManageAccount.prototype["delete"] = function () {
    };
    ManageAccount.prototype.edit = function () {
    };
    ManageAccount.prototype.showAll = function () {
    };
    ManageAccount.prototype.findByName = function (name, password) {
        for (var i = 0; i < this.listAccount.length; i++) {
            if (this.listAccount[i].name == name && this.listAccount[i].password == password) {
                return i;
            }
        }
        return -1;
    };
    return ManageAccount;
}());
exports.ManageAccount = ManageAccount;
