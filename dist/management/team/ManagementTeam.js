"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManagementTeam = void 0;
const role_1 = require("../../enum/role");
class ManagementTeam {
    // tìm kiếm theo tên câu lạc bộ
    findByTeamname(nameTeam) {
        for (let i = 0; i < ManagementTeam.footballTeams.length; i++) {
            if (nameTeam === ManagementTeam.footballTeams[i].$nameTeam) {
                return ManagementTeam.footballTeams[i];
            }
        }
        return null;
    }
    // tìm kiếm theo tên chủ tịch
    findByPresident(president) {
        for (let i = 0; i < ManagementTeam.footballTeams.length; i++) {
            if (president === ManagementTeam.footballTeams[i].$president) {
                return ManagementTeam.footballTeams[i];
            }
        }
        return null;
    }
    // hiển thị tất cả
    getAll() {
        return ManagementTeam.footballTeams;
    }
    // tạo mới
    createNew(t) {
        ManagementTeam.id++;
        t.$id = ManagementTeam.id;
        t.role = role_1.Role.ADMIN;
        ManagementTeam.footballTeams.push(t);
    }
    addUserTopListPlayer(user) {
        ManagementTeam.footballTeams.push(user);
    }
    // cập nhật theo id
    updateById(id, t) {
        let index = this.findById(id);
        if (index != -1) {
            ManagementTeam.footballTeams[index] = t;
        }
    }
    // loại bỏ theo id
    removeById(id, t) {
        let index = this.findById(id);
        if (index != -1) {
            ManagementTeam.footballTeams.splice(index, 1);
        }
    }
    // tìm theo id
    findById(id) {
        let index = -1;
        for (let i = 0; i < ManagementTeam.footballTeams.length; i++) {
            if (ManagementTeam.footballTeams[i].$id == id) {
                index = i;
                break;
            }
        }
        return index;
    }
}
exports.ManagementTeam = ManagementTeam;
ManagementTeam.footballTeams = [];
ManagementTeam.id = 0;
