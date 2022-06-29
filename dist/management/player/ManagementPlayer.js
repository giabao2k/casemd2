"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManagementPlayer = void 0;
const role_1 = require("../../enum/role");
class ManagementPlayer {
    // tìm kiếm theo tên cầu thủ
    findByNamePlayer(namePlayer) {
        for (let i = 1; i < ManagementPlayer.footballPlayers.length; i++) {
            if (namePlayer === ManagementPlayer.footballPlayers[i].$namePlayer) {
                return ManagementPlayer.footballPlayers[i];
            }
        }
        return null;
    }
    // tìm kiếm theo số điện thoại cầu thủ
    findByPhoneNumber(phoneNumber) {
        for (let i = 1; i < ManagementPlayer.footballPlayers.length; i++) {
            if (phoneNumber === ManagementPlayer.footballPlayers[i].$phoneNumber) {
                return ManagementPlayer.footballPlayers[i];
            }
        }
        return null;
    }
    // hiển thị tất cả
    getAll() {
        return ManagementPlayer.footballPlayers;
    }
    // tạo mới
    createNew(t) {
        ManagementPlayer.id++;
        t.$id = ManagementPlayer.id;
        t.role = role_1.Role.COATCH;
        ManagementPlayer.footballPlayers.push(t);
    }
    // cập nhật theo id
    updateById(id, t) {
        let index = this.findById(id);
        if (index != -1) {
            ManagementPlayer.footballPlayers[index] = t;
        }
    }
    // loại bỏ theo id
    removeById(id, t) {
        let index = this.findById(id);
        if (index != -1) {
            ManagementPlayer.footballPlayers.splice(index, 1);
        }
    }
    // tìm theo id
    findById(id) {
        let index = -1;
        for (let i = 0; i < ManagementPlayer.footballPlayers.length; i++) {
            if (ManagementPlayer.footballPlayers[i].$id == id) {
                index = i;
                break;
            }
        }
        return index;
    }
}
exports.ManagementPlayer = ManagementPlayer;
ManagementPlayer.footballPlayers = [];
ManagementPlayer.id = 1;
