import * as rl from 'readline-sync';
import { Role } from '../enum/role';
import { UserManagement } from '../management/user/UserManagement';
import { User } from '../model/user';
import { AdminMenu } from './admin-menu';
import { CoatchMenu } from './coatch-menu';
import { UserMenu } from './user-menu';
enum LoginChoice {
    LOGIN = 1,
    REGISTER = 2
}
export class LoginMenu{
    private userManagement = new UserManagement();
    private adminMenu = new AdminMenu();
    private coatchMenu = new CoatchMenu()
    private userMenu = new UserMenu();
run():void{
    let choice = -1;
    do{
        console.log('-------Hệ thống quản lí các CLB bóng đá--------');
        console.log('1. Đăng Nhập');
        console.log('2. Đăng ký');
        console.log('0.Thoát');
        choice = +rl.question('Nhập lựa chọn của bạn:');
        switch (choice) {
            case LoginChoice.LOGIN:{
                console.log('-----Đăng nhập------')
                this.loginFrom();
                break;
            }
            case LoginChoice.REGISTER:{
                console.log('-------Đăng ký tài khoản---------');
                this.registerFrom();
                break;
            }
        }
    }while(choice != 0)
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
            if (currentUser.role == Role.ADMIN) {
                this.adminMenu.run();
            } else if (currentUser.role == Role.COATCH) {
                this.coatchMenu.run();
            } else {
                this.userMenu.run();
            }
        } else {
            console.log('Tài khoản hoặc mật khẩu không đúng.');
        }
    }

inputUser():User {
    let username = this.inputUsername();
    let regexForPassword: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/g;
    let password = this.inputPassword(regexForPassword);
    this.inputconfirmPassword(password);
    let name = rl.question('Nhập họ tên:');
    let email = this.inputEmail();
    let user = new User(username, password, email, name);
    return user;

}

inputEmail() {
    let email = '';
    let isValidEmail = true;
    do {
        email = rl.question('Nhập email (abc@gmail.com):');
        let regexForEmail: RegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        if (!regexForEmail.test(email)) {
            isValidEmail = false;
            console.log('Định dạng email không hợp lệ');
        } else {
            isValidEmail = true;
            let currentUser = this.userManagement.findByEmail(email);
            if (currentUser) {
                console.log('Email đã tồn tại');
                isValidEmail = false;
            } else {
                isValidEmail = true;
            }

        }
    } while (!isValidEmail);
    return email;
}

inputconfirmPassword(password:string):void  {
    let confirmPassword = '';
    do {
        confirmPassword = rl.question('Nhập lại password:');
        if (confirmPassword != password) {
            console.log('Mật khẩu nhập lại không khớp !!!');
        }

    } while (confirmPassword != password);
}

inputPassword(regexForPassword: RegExp) {
    let password = '';
    let isValidPassword = true;
    do {
        password = rl.question('Nhập mật khẩu (Có 1 ký tự viết hoa, 1 viết thường, 1 ký tự đặc biệt và 1 số):');
        if (!regexForPassword.test(password)) {
            isValidPassword = false;
            console.log('Password nhập vào phải có ít nhất 1 ký tự thường 1 hoa 1 đặc biệt 1 số!');
        } else {
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
        } else {
            isvalidUsername = true;
        }
    } while (!isvalidUsername);
    return username;
}
}