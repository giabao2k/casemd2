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
exports.AdminMenu = void 0;
const rl = __importStar(require("readline-sync"));
const ManagementPlayer_1 = require("../management/player/ManagementPlayer");
const ManagementTeam_1 = require("../management/team/ManagementTeam");
const FootballPlayer_1 = require("../model/FootballPlayer");
const FootballTeam_1 = require("../model/FootballTeam");
var adminMenuchoice;
(function (adminMenuchoice) {
    adminMenuchoice[adminMenuchoice["MANAGAMENT_TEAM"] = 1] = "MANAGAMENT_TEAM";
    adminMenuchoice[adminMenuchoice["ROLE_LEVER"] = 2] = "ROLE_LEVER";
    adminMenuchoice[adminMenuchoice["MANAGAMENT_PLAYER"] = 3] = "MANAGAMENT_PLAYER";
})(adminMenuchoice || (adminMenuchoice = {}));
let managementTeams = new ManagementTeam_1.ManagementTeam();
let managementPlayers = new ManagementPlayer_1.ManagementPlayer();
class AdminMenu {
    run() {
        let choice = -1;
        do {
            console.log('---Ứng dụng quản lí giải đấu---');
            console.log('1. Quản lí đội bóng');
            console.log('2. Cấp role cho user');
            console.log('3. Quản lí cầu thủ');
            console.log('0. Đăng xuất');
            choice = +rl.question('Nhập lựa chọn của bạn');
            switch (choice) {
                case adminMenuchoice.MANAGAMENT_TEAM: {
                    console.log('---Quản lí đội bóng---');
                    managementTeam();
                    break;
                }
                case adminMenuchoice.ROLE_LEVER: {
                    console.log('---Cấp role cho user---');
                    break;
                }
                case adminMenuchoice.MANAGAMENT_PLAYER: {
                    console.log('---Quản lí cầu thủ---');
                    managementPlayer();
                    break;
                }
            }
        } while (choice != 0);
        function managementPlayer() {
            let choice2 = -1;
            do {
                console.log('1.Hiển thị danh sách cầu thủ');
                console.log('2.Thêm cầu thủ mới');
                console.log('3.Xoá cầu thủ');
                console.log('4.Sửa cầu thủ');
                console.log('0.Quay lại');
                choice2 = +rl.question('Nhập lựa chọn của bạn');
                switch (choice2) {
                    case 1: {
                        console.log('---Danh sách cầu thủ---');
                        console.log(managementPlayers.getAll());
                        break;
                    }
                    case 2: {
                        let namePlayer = rl.question('Nhập tên cầu thủ:');
                        let clothersNumber = +rl.question('Nhập số áo:');
                        let phoneNumber = rl.question('Nhập số điện thoại cầu thủ:');
                        let location = rl.question('Nhập vị trí đá trên sân:');
                        let age = +rl.question('Nhập tuổi của cầu thủ:');
                        let teamPlayer = rl.question('Nhập đội bóng cầu thủ đá:');
                        let player = new FootballPlayer_1.FootballPlayer(namePlayer, clothersNumber, phoneNumber, location, age, teamPlayer);
                        managementPlayers.createNew(player);
                        break;
                    }
                }
            } while (choice2 != 0);
        }
        function managementTeam() {
            let choice1 = -1;
            do {
                console.log('1.Hiển thị danh sách đội bóng');
                console.log('2.Thêm đội bóng mới');
                console.log('3.Xoá đội bóng');
                console.log('4.Sửa đội bóng');
                console.log('0.Quay lại');
                choice1 = +rl.question('Nhập lựa chọn của bạn');
                switch (choice1) {
                    case 1: {
                        console.log("---Danh sách đội bóng---");
                        console.log(managementTeams.getAll());
                        break;
                    }
                    case 2: {
                        let nameTeam = rl.question('Nhập tên đội bóng:');
                        let homeShirtColor = rl.question('Nhập màu áo sân nhà:');
                        let awayShirtColor = rl.question('Nhập màu áo sân khách:');
                        let coatch = rl.question('Nhập tên huấn luyện viên:');
                        let president = rl.question('Nhập tên chủ tịch:');
                        let team = new FootballTeam_1.FootballTeam(nameTeam, homeShirtColor, awayShirtColor, coatch, president);
                        managementTeams.createNew(team);
                        let player = managementPlayers.getAll();
                        let teamPlayer = managementTeams.getAll();
                        // tim doi bong co ten = nameTeam trong danh sach doi bong
                        // thu hien push cau thu 
                        /// managementTeams.addUserTopListPlayer(player[i])
                        //    team.$footballPlayer.push(player[i]);
                        break;
                    }
                }
            } while (choice1 != 0);
        }
    }
}
exports.AdminMenu = AdminMenu;
