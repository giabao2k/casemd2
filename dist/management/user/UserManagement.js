"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserManagement = void 0;
const role_1 = require("../../enum/role");
const user_1 = require("../../model/user");
class UserManagement {
    constructor() {
        let admin = new user_1.User('admin', '123456', 'admin@gmail.com', 'Admin');
        admin.id = UserManagement.id;
        admin.role = role_1.Role.ADMIN;
        UserManagement.users.push(admin);
    }
    // tìm kiếm theo tên người dùng
    findByUsername(username) {
        for (let i = 0; i < UserManagement.users.length; i++) {
            if (username === UserManagement.users[i].username) {
                return UserManagement.users[i];
            }
        }
        return null;
    }
    // tìm kiếm theo email
    findByEmail(email) {
        for (let i = 0; i < UserManagement.users.length; i++) {
            if (UserManagement.users[i].email === email) {
                return UserManagement.users[i];
            }
        }
        return null;
    }
    // đăng nhập
    login(username, password) {
        // for(let i = 0; i <= UserManagement.users.length; i++){
        //     if(UserManagement.users[i].username == username && UserManagement.users[i].password == password){
        //         return UserManagement.users[i];
        //     }
        // }
        for (const item of UserManagement.users) {
            if (item.username == username && item.password == password) {
                return item;
            }
        }
        return null;
    }
    // hiển thị tất cả
    getAll() {
        return UserManagement.users;
    }
    // tạo mới
    createNew(t) {
        UserManagement.id++;
        t.id = UserManagement.id;
        t.role = role_1.Role.USER;
        UserManagement.users.push(t);
    }
    // cập nhật theo id
    updateById(id, t) {
        let index = this.findById(id);
        if (index != -1) {
            UserManagement.users[index] = t;
        }
    }
    // loại bỏ theo id
    removeById(id, t) {
        let index = this.findById(id);
        if (index != -1) {
            UserManagement.users.splice(index, 1);
        }
    }
    // tìm theo id
    findById(id) {
        let index = -1;
        for (let i = 0; i < UserManagement.users.length; i++) {
            if (UserManagement.users[i].id == id) {
                index = i;
                break;
            }
        }
        return index;
    }
}
exports.UserManagement = UserManagement;
UserManagement.users = [];
UserManagement.id = 1;
