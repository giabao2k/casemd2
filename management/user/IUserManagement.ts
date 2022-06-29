import { User } from "../../model/user";
import { IManagement } from "../I-Management";

export interface IUserManagement extends IManagement<User> {
    findByUsername(username: string): User | null; // tìm kiếm theo tên người dùng

    findByEmail(email: string): User | null;       // tìm kiếm theo email

    login(username: string, password: string): User | null;  // đăng nhập
}