import {Account} from "../model/account";
import {ManageAccount} from "../sevice/manageAccount";
import {ManageAlbum} from "../sevice/manageAlbum";
import {Album} from "../model/album";
import {ManageSong} from "../sevice/manageSong";
import {Song} from "../model/song";
import {ManageSongOfAlbum} from "../sevice/manageSongOfAlbum";


let input = require('readline-sync');

let listAccount: ManageAccount = new ManageAccount();

let arrManageAlbum: ManageAlbum[] = [];

let userCheck = null;

function menuLogin() {
    let menu = `------Menu-----\n1.Dang nhap\n2.Dang ky`;
    let choice;
    do {
        console.log(menu);
        choice = +input.question('Nhap lua chon cua ban: ');
        switch (choice) {
            case 1:
                login()
                break;
            case 2:
                signUp()
                break;
        }
    } while (choice != 0);
}

function login() {
    console.log(`<<< Bạn Đang Ở Phần Đăng Nhập >>>`);
    console.log(`Bạn phải nhập id đủ 5 chữ số và không có chữ cái và ký tứ đặc biệt nào mới được`)
    let id = input.question('Nhap id: ');
    let idRegex = /^([0-9]){5,}$/;
    let testId = idRegex.test(id);
    if(testId ==false) {
        console.log(` Nhập lại đê`);
        login();
    }

    console.log(`Nhập tên đăng nhập phải đủ 8 ký tự, chỉ chứa chữ cái thôi mới được cơ`);
    let name = input.question('Nhap ten dang nhap cua ban: ');
    let nameRegex = /^([A-Za-z]){8,}$/;
    let testName = nameRegex.test(name);
    if(testName == false) {
        console.log(` Đã bảo nhập cho đúng rồi không nghe, nhập lại cả Id nhé`);
        login();
    }

    console.log(` Chỉ được nhập số thôi, 8 số nhé`);
    let password = input.question('Nhap mat khau: ');
    let passwordRegex = /^([0-9]){8,}$/;
    let testPass = passwordRegex.test(password);
    if(testPass == false) {
        console.log('Nhập sai rồi, nhập lại từ đầu nhé, ai bảo nhập sai chiiiiii');
    }


    if (listAccount.listAccount.length == 0) {
        console.log('<<<Dang nhap that bai, vui long nhap lai hoac tao tai khoan moi>>>');
    }

    for (let i = 0; i < listAccount.listAccount.length; i++) {
        if (listAccount.findByName(name, password) == i) {
            console.log('<<<Dang nhap thanh cong!>>>');
            userCheck = listAccount.listAccount[i];
            menuAlbum();
        } else {
            console.log('<<<Dang nhap that bai, vui long nhap lai hoac tao tai khoan moi>>>');
        }
    }
}

function signUp() {
    console.log(`<<<Bạn Đang Ở Phần Đăng Ký>>>`);
    console.log(`Bạn phải nhập id đủ 5 chữ số và không có chữ cái và ký tứ đặc biệt nào mới được`)
    let id = input.question('Nhap id: ');
    let idRegex = /^([0-9]){5,}$/;
    let testId = idRegex.test(id);
    if(testId ==false) {
        console.log(` Nhập lại đê`);
        login();
    }

    for (let i = 0; i < listAccount.listAccount.length; i++) {
        if (listAccount.listAccount[i].id == id) {
            console.log('<<<Id Da Ton Tai, Moi Ban Nhap Lai>>>');
            signUp();
        } else {
        }
    }

    console.log(`Nhập tên đăng nhập phải đủ 8 ký tự, chỉ chứa chữ cái thôi mới được cơ`);
    let name = input.question('Nhap ten dang nhap cua ban: ');
    let nameRegex = /^([A-Za-z]){8,}$/;
    let testName = nameRegex.test(name);
    if(testName == false) {
        console.log(` Đã bảo nhập cho đúng rồi không nghe, nhập lại cả Id nhé`);
        login();
    }

    console.log(` Chỉ được nhập số thôi, 8 số nhé`);
    let password = input.question('Nhap mat khau: ');
    let passwordRegex = /^([0-9]){8,}$/;
    let testPass = passwordRegex.test(password);
    if(testPass == false) {
        console.log('Nhập sai rồi, nhập lại từ đầu nhé, ai bảo nhập sai chiiiiii');
    }

    let newUser = new Account(id, name, password);
    listAccount.add(newUser);

    let manageAlbum = new ManageAlbum(newUser);
    arrManageAlbum.push(manageAlbum);
    console.log('do dai mang acc: ' + listAccount.listAccount.length);
}

function menuAlbum() {
    let manageAlbumOneUser: ManageAlbum;
    for (let i = 0; i < arrManageAlbum.length; i++) {
        if (arrManageAlbum[i].user == userCheck) {
            manageAlbumOneUser = arrManageAlbum[i];
        }
    }
    let menu = `-----Menu Album-----\n1.Them Album\n2.Chon Album\n3.Xoa Album\n4.Sua Album\n5.Thoat `;
    let choice;

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
        }
    } while (choice != 0)
}

function addAlbum(manageAlbumOneUser: ManageAlbum) {
    console.log(`<<<Bạn Đang Ở Phần Thêm Album>>>`)
    let name = input.question('Nhap ten Album: ');
    let album = new Album(name);
    manageAlbumOneUser.add(album);
}

function showAlbumOfUser(manageAlbumOneUser: ManageAlbum) {
    console.log(`<<<Bạn Đang Ở Phần Chọn Album>>>`)
    if (manageAlbumOneUser.listAlbum.length == 0) {
        console.log('Khong co Album nao');
        menuAlbum();
    }
    for (let i = 0; i < manageAlbumOneUser.listAlbum.length; i++) {
        console.log(`STT: ${i + 1} --- Tên Album: ${manageAlbumOneUser.listAlbum[i].name}`)
    }

    let choiceAlbum = +input.question('Nhap stt ban Album ban muon: ')
    let menu = `---Menu Bai Hat---\n1.Them Bai Hat\n2.Chon Bai Hat De Tuong Tac\n3.Tro Ve`
    let choice
    do {
        console.log(menu);
        choice = +input.question('Nhap lua chon cua ban: ');
        switch (choice) {
            case 1:
                addSong(manageAlbumOneUser, choiceAlbum)
                break;
            case 2:
                showSong(manageAlbumOneUser, choiceAlbum)
                break;
            case 3:
                menuAlbum();
        }
    } while (choice != 0);
}

function deleteAlbum(manageAlbumOneUser: ManageAlbum) {
    console.log(`<<<Bạn Đang Ở Phần Xóa Album>>>`)
    if (manageAlbumOneUser.listAlbum.length == 0) {
        console.log('Khong co Album nao');
        menuAlbum();
    }
    let name = input.question('Nhap ten Album ban muon xoa: ');
    manageAlbumOneUser.delete(name);
    console.log(` Bạn Đã Xóa Album: ${name}`)
}

function editAlbum(manageAlbumOneUser: ManageAlbum) {
    console.log(`<<<Bạn Đang Ở Phần Sửa Album>>>`);
    if (manageAlbumOneUser.listAlbum.length == 0) {
        console.log('Khong co Album nao');
        menuAlbum();
    }
    let name = input.question('Nhap ten album muon sua: ');
    if (manageAlbumOneUser.findByName(name) == -1) {
        console.log('Khong có Album nay');
    } else {
        let newName = input.question('Nhap ten moi: ');
        let newAlbum = new Album(newName);
        manageAlbumOneUser.edit(newName, newAlbum)
    }
}

function addSong(manageAlbumOneUser: ManageAlbum, choiceAlbum) {
    console.log(`<<<Bạn Đang Ở Phần Thêm Bài Hát>>>`);
    let name = input.question('Nhap ten bai hat: ');
    let author = input.question('Nhap ten tac gia: ');
    let singer = input.question('Nhap ten ca si: ');

    let newSong = new Song(name, author, singer);
    manageAlbumOneUser.listAlbum[choiceAlbum - 1].listSong.push(newSong);
}

function showSong(manageAlbumOneUser: ManageAlbum, choiceAlbum) {
    console.log(`<<<Bạn Đang Ở Phần Tương Tác Với Bài Hát>>>`);

    if(manageAlbumOneUser.listAlbum[choiceAlbum-1].listSong.length == 0) {
        console.log('<<<Khong co bai hat nao>>>');
        showAlbumOfUser(manageAlbumOneUser);
    }

    for (let i = 0; i < manageAlbumOneUser.listAlbum[choiceAlbum - 1].listSong.length; i++) {
        console.log(`STT: ${i + 1} --- Ten bai hat: ${manageAlbumOneUser.listAlbum[choiceAlbum - 1].listSong[i].name}`);
    }
    let choiceSong = +input.question('Nhap stt bai hat ban muon tuong tac: ');

    let menu = `---Menu Tuong Tac Voi Bai Hat---\n1.Sua\n2.Xoa\n3.Tro Ve`;
    let choice;
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
        }
    } while (choice != 0)
}

function editSong(manageAlbumOneUser: ManageAlbum, choiceAlbum, choiceSong) {
    console.log(`<<<Bạn Đang Ở Phần Sửa Bài Hát>>>`);

    let newName = input.question('Nhap ten moi: ');
    let newAuthor = input.question('Nhap ten tac gia moi: ');
    let newSinger = input.question('Nhap ten ca si moi: ');

    manageAlbumOneUser.listAlbum[choiceAlbum - 1].listSong[choiceSong - 1].name = newName;
    manageAlbumOneUser.listAlbum[choiceAlbum - 1].listSong[choiceSong - 1].author = newAuthor;
    manageAlbumOneUser.listAlbum[choiceAlbum - 1].listSong[choiceSong - 1].singer = newSinger;

    showAlbumOfUser(manageAlbumOneUser);
}

function deleteSong(manageAlbumOneUser: ManageAlbum, choiceAlbum, choiceSong) {
    console.log(`<<<Bạn Đang Ở Phần Xóa Bài Hát>>>`);

    console.log(`<<<Bạn Đã Xóa Bài Hát: ${manageAlbumOneUser.listAlbum[choiceAlbum - 1].listSong[choiceSong - 1].name}`);

    manageAlbumOneUser.listAlbum[choiceAlbum - 1].listSong.splice(choiceSong - 1, 1);

    showAlbumOfUser(manageAlbumOneUser);
}


menuLogin();