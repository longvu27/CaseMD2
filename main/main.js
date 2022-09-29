"use strict";
exports.__esModule = true;
var account_1 = require("../model/account");
var manageAccount_1 = require("../sevice/manageAccount");
var manageAlbum_1 = require("../sevice/manageAlbum");
var album_1 = require("../model/album");
var song_1 = require("../model/song");
var input = require('readline-sync');
var listAccount = new manageAccount_1.ManageAccount();
var arrManageAlbum = [];
var userCheck = null;
function menuLogin() {
    var menu = "------Menu-----\n1.\u0110\u0103ng Nh\u1EADp\n2.\u0110\u0103ng K\u00FD";
    var choice;
    do {
        console.log(menu);
        choice = +input.question("Nhap lua chon cua ban: ");
        switch (choice) {
            case 1:
                login();
                break;
            case 2:
                signUp();
                break;
            default: {
                console.log("!!!B\u1EA1n v\u1EEBa nh\u1EADp c\u00E1i g\u00EC \u0111\u1EA5y!!!");
            }
        }
    } while (choice != 0);
}
function login() {
    console.log("<<< B\u1EA1n \u0110ang \u1EDE Ph\u1EA7n \u0110\u0103ng Nh\u1EADp >>>");
    console.log("-- B\u1EA1n ph\u1EA3i nh\u1EADp id \u0111\u1EE7 3 ch\u1EEF s\u1ED1 v\u00E0 kh\u00F4ng c\u00F3 ch\u1EEF c\u00E1i ho\u1EB7c k\u00FD t\u1EE9 \u0111\u1EB7c bi\u1EC7t n\u00E0o m\u1EDBi \u0111\u01B0\u1EE3c --");
    var id = input.question('Nhap id: ');
    var idRegex = /^([0-9]){3,}$/;
    var testId = idRegex.test(id);
    if (testId == false) {
        console.log(" Nh\u1EADp l\u1EA1i \u0111\u00EA");
        menuLogin();
    }
    console.log("-- Nh\u1EADp t\u00EAn \u0111\u0103ng nh\u1EADp ph\u1EA3i \u0111\u1EE7 5 k\u00FD t\u1EF1, ch\u1EC9 ch\u1EE9a ch\u1EEF c\u00E1i th\u00F4i m\u1EDBi \u0111\u01B0\u1EE3c c\u01A1 --");
    var name = input.question('Nhap ten dang nhap cua ban: ');
    var nameRegex = /^([A-Za-z]){5,}$/;
    var testName = nameRegex.test(name);
    if (testName == false) {
        console.log("-- \u0110\u00E3 b\u1EA3o nh\u1EADp cho \u0111\u00FAng r\u1ED3i kh\u00F4ng nghe, nh\u1EADp l\u1EA1i c\u1EA3 Id nh\u00E9 --");
        menuLogin();
    }
    console.log("-- Ch\u1EC9 \u0111\u01B0\u1EE3c nh\u1EADp s\u1ED1 th\u00F4i, 4 s\u1ED1 nh\u00E9 --");
    var password = input.question('Nhap mat khau: ');
    var passwordRegex = /^([0-9]){4,}$/;
    var testPass = passwordRegex.test(password);
    if (testPass == false) {
        console.log('-- Nhập sai rồi, nhập lại từ đầu nhé, ai bảo nhập sai chiiiiii --');
    }
    if (listAccount.listAccount.length == 0) {
        console.log('!!!Dang nhap that bai, vui long nhap lai hoac tao tai khoan moi!!!');
    }
    for (var i = 0; i < listAccount.listAccount.length; i++) {
        if (listAccount.findByName(name, password) == i) {
            console.log('<<<Dang nhap thanh cong!>>>');
            userCheck = listAccount.listAccount[i];
            menuAlbum();
        }
        else {
            console.log('!!!Dang nhap that bai, vui long nhap lai hoac tao tai khoan moi!!!');
        }
    }
}
function signUp() {
    console.log("<<<B\u1EA1n \u0110ang \u1EDE Ph\u1EA7n \u0110\u0103ng K\u00FD>>>");
    console.log("-- B\u1EA1n ph\u1EA3i nh\u1EADp id \u0111\u1EE7 3 ch\u1EEF s\u1ED1 v\u00E0 kh\u00F4ng c\u00F3 ch\u1EEF c\u00E1i ho\u1EB7c k\u00FD t\u1EE9 \u0111\u1EB7c bi\u1EC7t n\u00E0o m\u1EDBi \u0111\u01B0\u1EE3c --");
    var id = input.question('Nhap id: ');
    var idRegex = /^([0-9]){3,}$/;
    var testId = idRegex.test(id);
    if (testId == false) {
        console.log("- Nh\u1EADp l\u1EA1i \u0111\u00EA -");
        menuLogin();
    }
    for (var i = 0; i < listAccount.listAccount.length; i++) {
        if (listAccount.listAccount[i].id == id) {
            console.log('<<<Id Da Ton Tai, Moi Ban Nhap Lai>>>');
            menuLogin();
        }
        else {
        }
    }
    console.log("-- Nh\u1EADp t\u00EAn \u0111\u0103ng nh\u1EADp ph\u1EA3i \u0111\u1EE7 5 k\u00FD t\u1EF1, ch\u1EC9 ch\u1EE9a ch\u1EEF c\u00E1i th\u00F4i m\u1EDBi \u0111\u01B0\u1EE3c c\u01A1 --");
    var name = input.question('Nhap ten dang nhap cua ban: ');
    var nameRegex = /^([A-Za-z]){5,}$/;
    var testName = nameRegex.test(name);
    if (testName == false) {
        console.log("-- \u0110\u00E3 b\u1EA3o nh\u1EADp cho \u0111\u00FAng r\u1ED3i kh\u00F4ng nghe, nh\u1EADp l\u1EA1i c\u1EA3 Id nh\u00E9 --");
        menuLogin();
    }
    console.log("-- Ch\u1EC9 \u0111\u01B0\u1EE3c nh\u1EADp s\u1ED1 th\u00F4i, 4 s\u1ED1 nh\u00E9 --");
    var password = input.question('Nhap mat khau: ');
    var passwordRegex = /^([0-9]){4,}$/;
    var testPass = passwordRegex.test(password);
    if (testPass == false) {
        console.log('-- Nhập sai rồi, nhập lại từ đầu nhé, ai bảo nhập sai chiiiiii --');
        menuLogin();
    }
    var newUser = new account_1.Account(id, name, password);
    listAccount.add(newUser);
    var manageAlbum = new manageAlbum_1.ManageAlbum(newUser);
    arrManageAlbum.push(manageAlbum);
    console.log("<<<\u0110\u0103ng K\u00FD Th\u00E0nh C\u00F4ng>>>");
    // console.log('do dai mang acc: ' + listAccount.listAccount.length);
}
function menuAlbum() {
    var manageAlbumOneUser;
    for (var i = 0; i < arrManageAlbum.length; i++) {
        if (arrManageAlbum[i].user == userCheck) {
            manageAlbumOneUser = arrManageAlbum[i];
        }
    }
    var menu = "-----Menu Album-----\n1.Them Album\n2.Chon Album\n3.Xoa Album\n4.Sua Album\n5.Dang Xuat ";
    var choice;
    do {
        console.log(menu);
        choice = +input.question('Nhap lua chon cua ban: ');
        switch (choice) {
            case 1:
                addAlbum(manageAlbumOneUser);
                break;
            case 2:
                showAlbumOfUser(manageAlbumOneUser);
                break;
            case 3:
                deleteAlbum(manageAlbumOneUser);
                break;
            case 4:
                editAlbum(manageAlbumOneUser);
                break;
            case 5:
                menuLogin();
                break;
            default: {
                console.log("!!!B\u1EA1n v\u1EEBa nh\u1EADp c\u00E1i g\u00EC \u0111\u1EA5y!!!");
            }
        }
    } while (choice != 0);
}
function addAlbum(manageAlbumOneUser) {
    console.log("<<<B\u1EA1n \u0110ang \u1EDE Ph\u1EA7n Th\u00EAm Album>>>");
    var name = input.question('Nhap ten Album: ');
    var album = new album_1.Album(name);
    manageAlbumOneUser.add(album);
}
function showAlbumOfUser(manageAlbumOneUser) {
    console.log("<<<B\u1EA1n \u0110ang \u1EDE Ph\u1EA7n Ch\u1ECDn Album>>>");
    if (manageAlbumOneUser.listAlbum.length == 0) {
        console.log('Khong co Album nao');
        menuAlbum();
    }
    for (var i = 0; i < manageAlbumOneUser.listAlbum.length; i++) {
        console.log("STT: ".concat(i + 1, " - T\u00EAn Album: ").concat(manageAlbumOneUser.listAlbum[i].name));
    }
    var choiceAlbum = +input.question('Nhap stt ban Album ban muon: ');
    var menu = "---Menu Bai Hat---\n1.Them Bai Hat\n2.Chon Bai Hat De Tuong Tac\n3.Tro Ve";
    var choice;
    do {
        console.log(menu);
        choice = +input.question('Nhap lua chon cua ban: ');
        switch (choice) {
            case 1:
                addSong(manageAlbumOneUser, choiceAlbum);
                break;
            case 2:
                showSong(manageAlbumOneUser, choiceAlbum);
                break;
            case 3:
                menuAlbum();
                break;
            // case 4:
            //     searchSong(manageAlbumOneUser);
            //     break;
            default: {
                console.log("!!!B\u1EA1n v\u1EEBa nh\u1EADp c\u00E1i g\u00EC \u0111\u1EA5y!!!");
            }
        }
    } while (choice != 0);
}
function deleteAlbum(manageAlbumOneUser) {
    console.log("<<<B\u1EA1n \u0110ang \u1EDE Ph\u1EA7n X\u00F3a Album>>>");
    if (manageAlbumOneUser.listAlbum.length == 0) {
        console.log('!!!Khong co Album nao!!!');
        menuAlbum();
    }
    for (var i = 0; i < manageAlbumOneUser.listAlbum.length; i++) {
        console.log("STT: ".concat(i + 1, " - T\u00EAn Album: ").concat(manageAlbumOneUser.listAlbum[i].name));
    }
    var name = input.question('Nhap ten Album ban muon xoa: ');
    manageAlbumOneUser["delete"](name);
    console.log("- B\u1EA1n \u0110\u00E3 X\u00F3a Album: ".concat(name));
}
function editAlbum(manageAlbumOneUser) {
    console.log("<<<B\u1EA1n \u0110ang \u1EDE Ph\u1EA7n S\u1EEDa Album>>>");
    if (manageAlbumOneUser.listAlbum.length == 0) {
        console.log('!!!Khong co Album nao!!!');
        menuAlbum();
    }
    // showAlbumOfUser(manageAlbumOneUser);
    var name = input.question('Nhap ten album muon sua: ');
    if (manageAlbumOneUser.findByName(name) == -1) {
        console.log('!!!Khong có Album nay!!!');
    }
    else {
        var newName = input.question('Nhap ten moi: ');
        var newAlbum = new album_1.Album(newName);
        manageAlbumOneUser.edit(name, newAlbum);
        // console.log('aaaaaa')
    }
}
function addSong(manageAlbumOneUser, choiceAlbum) {
    console.log("<<<B\u1EA1n \u0110ang \u1EDE Ph\u1EA7n Th\u00EAm B\u00E0i H\u00E1t>>>");
    var name = input.question('Nhap ten bai hat: ');
    var author = input.question('Nhap ten tac gia: ');
    var singer = input.question('Nhap ten ca si: ');
    var newSong = new song_1.Song(name, author, singer);
    manageAlbumOneUser.listAlbum[choiceAlbum - 1].listSong.push(newSong);
}
function showSong(manageAlbumOneUser, choiceAlbum) {
    console.log("<<<B\u1EA1n \u0110ang \u1EDE Ph\u1EA7n T\u01B0\u01A1ng T\u00E1c V\u1EDBi B\u00E0i H\u00E1t>>>");
    if (manageAlbumOneUser.listAlbum[choiceAlbum - 1].listSong.length == 0) {
        console.log('<<<Khong co bai hat nao>>>');
        showAlbumOfUser(manageAlbumOneUser);
    }
    for (var i = 0; i < manageAlbumOneUser.listAlbum[choiceAlbum - 1].listSong.length; i++) {
        console.log("STT: ".concat(i + 1, " - Ten bai hat: ").concat(manageAlbumOneUser.listAlbum[choiceAlbum - 1].listSong[i].name, " - S\u00E1ng T\u00E1c: ").concat(manageAlbumOneUser.listAlbum[choiceAlbum - 1].listSong[i].author, " - Ca S\u0129: ").concat(manageAlbumOneUser.listAlbum[choiceAlbum - 1].listSong[i].singer));
    }
    var choiceSong = +input.question('Nhap stt bai hat ban muon tuong tac: ');
    var menu = "---Menu Tuong Tac Voi Bai Hat---\n1.Sua\n2.Xoa\n3.Tro Ve\n";
    var choice;
    do {
        console.log(menu);
        choice = +input.question('Nhap lua chon cua ban: ');
        switch (choice) {
            case 1:
                editSong(manageAlbumOneUser, choiceAlbum, choiceSong);
                break;
            case 2:
                deleteSong(manageAlbumOneUser, choiceAlbum, choiceSong);
                break;
            case 3:
                menuAlbum();
                break;
            default: {
                console.log("!!!B\u1EA1n v\u1EEBa nh\u1EADp c\u00E1i g\u00EC \u0111\u1EA5y!!!");
            }
        }
    } while (choice != 0);
}
function editSong(manageAlbumOneUser, choiceAlbum, choiceSong) {
    console.log("<<<B\u1EA1n \u0110ang \u1EDE Ph\u1EA7n S\u1EEDa B\u00E0i H\u00E1t>>>");
    var newName = input.question('Nhap ten moi: ');
    var newAuthor = input.question('Nhap ten tac gia moi: ');
    var newSinger = input.question('Nhap ten ca si moi: ');
    manageAlbumOneUser.listAlbum[choiceAlbum - 1].listSong[choiceSong - 1].name = newName;
    manageAlbumOneUser.listAlbum[choiceAlbum - 1].listSong[choiceSong - 1].author = newAuthor;
    manageAlbumOneUser.listAlbum[choiceAlbum - 1].listSong[choiceSong - 1].singer = newSinger;
    showAlbumOfUser(manageAlbumOneUser);
}
function deleteSong(manageAlbumOneUser, choiceAlbum, choiceSong) {
    console.log("<<<B\u1EA1n \u0110ang \u1EDE Ph\u1EA7n X\u00F3a B\u00E0i H\u00E1t>>>");
    console.log("<<<B\u1EA1n \u0110\u00E3 X\u00F3a B\u00E0i H\u00E1t: ".concat(manageAlbumOneUser.listAlbum[choiceAlbum - 1].listSong[choiceSong - 1].name, ">>>"));
    manageAlbumOneUser.listAlbum[choiceAlbum - 1].listSong.splice(choiceSong - 1, 1);
    showAlbumOfUser(manageAlbumOneUser);
}
// function searchSong(manageAlbumOneUser: ManageAlbum, choiceAlbum ) {
//     let search = input.question('Nhap');
//     let name = new RegExp(search);
//
//     if(search.length == 0) {
//         console.log(` Chưa nhập gì`)}
//     else{
//         let sum = 0;
//         for (let i = 0; i < manageAlbumOneUser.listAlbum[choiceAlbum-1].listSong.length; i++) {
//             let test = name.test(manageAlbumOneUser.listAlbum[choiceAlbum-1].listSong[i].name);
//             if(test == true) {
//                 sum++;
//                 console.log(` Tên bài hát: ${manageAlbumOneUser.listAlbum[choiceAlbum-1].listSong[i].name}`)
//             }
//
//         }if(sum==0) {
//             console.log(`Khong có`);
//         }
//     }
//     // console.log(manageAlbumOneUser.listAlbum.filter(item => item.name.includes(search)))
//
// }
menuLogin();
