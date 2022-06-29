"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginMenu = void 0;
const rl = __importStar(require("readline-sync"));
const role_1 = require("../enum/role");
const UserManagement_1 = require("../management/user/UserManagement");
const user_1 = require("../model/user");
const admin_menu_1 = require("./admin-menu");
const coatch_menu_1 = require("./coatch-menu");
const user_menu_1 = require("./user-menu");
var LoginChoice;
(function (LoginChoice) {
    LoginChoice[LoginChoice["LOGIN"] = 1] = "LOGIN";
    LoginChoice[LoginChoice["REGISTER"] = 2] = "REGISTER";
})(LoginChoice || (LoginChoice = {}));
class LoginMenu {
    constructor() {
        this.userManagement = new UserManagement_1.UserManagement();
        this.adminMenu = new admin_menu_1.AdminMenu();
        this.coatchMenu = new coatch_menu_1.CoatchMenu();
        this.userMenu = new user_menu_1.UserMenu();
    }
    run() {
        let choice = -1;
        do {
            console.log('-------Hệ thống quản lí các CLB bóng đá--------');
            console.log('1. Đăng Nhập');
            console.log('2. Đăng ký');
            console.log('0.Thoát');
            choice = +rl.question('Nhập lựa chọn của bạn:');
            switch (choice) {
                case LoginChoice.LOGIN: {
                    console.log('-----Đăng nhập------');
                    this.loginFrom();
                    break;
                }
                case LoginChoice.REGISTER: {
                    console.log('-------Đăng ký tài khoản---------');
                    this.registerFrom();
                    break;
                }
            }
        } while (choice != 0);
    }
    registerFrom() {
        let user = this.inputUser();
        this.userManagement.createNew(user);
        console.log('Đăng kí thành công');
    }
    loginFrom() {
        let username = rl.question('Nhập tài khoản:');
        let password = rl.question('Nhập mật khẩu:');
        let currentUser = this.userManagement.login(username, password);
        if (currentUser) {
            if (currentUser.role == role_1.Role.ADMIN) {
                this.adminMenu.run();
            }
            else if (currentUser.role == role_1.Role.COATCH) {
                this.coatchMenu.run();
            }
            else {
                this.userMenu.run();
            }
        }
        else {
            console.log('Tài khoản hoặc mật khẩu không đúng.');
        }
    }
    inputUser() {
        let username = this.inputUsername();
        let regexForPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/g;
        let password = this.inputPassword(regexForPassword);
        this.inputconfirmPassword(password);
        let name = rl.question('Nhập họ tên:');
        let email = this.inputEmail();
        let user = new user_1.User(username, password, email, name);
        return user;
    }
    inputEmail() {
        let email = '';
        let isValidEmail = true;
        do {
            email = rl.question('Nhập email (abc@gmail.com):');
            let regexForEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
            if (!regexForEmail.test(email)) {
                isValidEmail = false;
                console.log('Định dạng email không hợp lệ');
            }
            else {
                isValidEmail = true;
                let currentUser = this.userManagement.findByEmail(email);
                if (currentUser) {
                    console.log('Email đã tồn tại');
                    isValidEmail = false;
                }
                else {
                    isValidEmail = true;
                }
            }
        } while (!isValidEmail);
        return email;
    }
    inputconfirmPassword(password) {
        let confirmPassword = '';
        do {
            confirmPassword = rl.question('Nhập lại password:');
            if (confirmPassword != password) {
                console.log('Mật khẩu nhập lại không khớp !!!');
            }
        } while (confirmPassword != password);
    }
    inputPassword(regexForPassword) {
        let password = '';
        let isValidPassword = true;
        do {
            password = rl.question('Nhập mật khẩu (Có 1 ký tự viết hoa, 1 viết thường, 1 ký tự đặc biệt và 1 số):');
            if (!regexForPassword.test(password)) {
                isValidPassword = false;
                console.log('Password nhập vào phải có ít nhất 1 ký tự thường 1 hoa 1 đặc biệt 1 số!');
            }
            else {
                isValidPassword = true;
            }
        } while (!isValidPassword);
        return password;
    }
    inputUsername() {
        let username = '';
        let isvalidUsername = true;
        do {
            username = rl.question('Nhập username:');
            let currentUser = this.userManagement.findByUsername(username);
            if (currentUser) {
                isvalidUsername = false;
                console.log('Tên tài khoản đã tồn tại.!!');
            }
            else {
                isvalidUsername = true;
            }
        } while (!isvalidUsername);
        return username;
    }
}
exports.LoginMenu = LoginMenu;
