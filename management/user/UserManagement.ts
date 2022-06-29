import { mkdirSync } from "fs";
import { Role } from "../../enum/role";
import { User } from "../../model/user";
import { IUserManagement } from "./IUserManagement";

export class UserManagement implements IUserManagement{
    private static users: User[] = [];
    private static id: number = 1;

    constructor(){
     let admin = new User('admin','123456','admin@gmail.com','Admin');
     admin.id = UserManagement.id;
     admin.role = Role.ADMIN;
     UserManagement.users.push(admin);
    }

    // tìm kiếm theo tên người dùng
    findByUsername(username: string): User | null {
      for(let i = 0; i< UserManagement.users.length;i++){
        if(username === UserManagement.users[i].username){
            return UserManagement.users[i]
        }
      }
        return null;
    }

    // tìm kiếm theo email
    findByEmail(email: string): User | null {
        for(let i = 0; i < UserManagement.users.length; i++){
            if(UserManagement.users[i].email === email){
                return UserManagement.users[i];
            }
        }
        return null;
    }

    // đăng nhập
    login(username: string, password: string): User | null {
        // for(let i = 0; i <= UserManagement.users.length; i++){
        //     if(UserManagement.users[i].username == username && UserManagement.users[i].password == password){
        //         return UserManagement.users[i];
        //     }
        // }
        for (const item of UserManagement.users) {
            if(item.username == username && item.password == password){
                return item;
            }
        }
        return null;
    }

    // hiển thị tất cả
    getAll(): User[] {
       return UserManagement.users;
    }
    
    // tạo mới
    createNew(t: User): void {
        UserManagement.id++;
        t.id = UserManagement.id;
        t.role = Role.USER;
        UserManagement.users.push(t);
    }

    // cập nhật theo id
    updateById(id: number, t: User): void {
        let index = this.findById(id);
        if (index != -1) {
            UserManagement.users[index] = t;
        }
    }

    // loại bỏ theo id
    removeById(id: number, t: User): void {
        let index = this.findById(id);
        if (index != -1) {
            UserManagement.users.splice(index, 1);
        }
    }

    // tìm theo id
    findById(id: number): number {
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