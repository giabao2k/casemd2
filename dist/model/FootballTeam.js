"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FootballTeam = void 0;
class FootballTeam {
    constructor($nameTeam, $homeShirtColor, $awayShirtColor, $coach, $president) {
        this.id = 1;
        this._role = 2;
        this.footballPlayer = []; //danh sách cầu thủ
        this.nameTeam = $nameTeam;
        this.homeShirtColor = $homeShirtColor;
        this.awayShirtColor = $awayShirtColor;
        this.coach = $coach;
        this.president = $president;
    }
    get $id() {
        return this.id;
    }
    get role() {
        return this._role;
    }
    get $nameTeam() {
        return this.nameTeam;
    }
    get $homeShirtColor() {
        return this.homeShirtColor;
    }
    get $awayShirtColor() {
        return this.awayShirtColor;
    }
    get $coach() {
        return this.coach;
    }
    get $president() {
        return this.president;
    }
    get $footballPlayer() {
        return this.footballPlayer;
    }
    set $id(value) {
        this.id = value;
    }
    set role(value) {
        this._role = value;
    }
    set $nameTeam(value) {
        this.nameTeam = value;
    }
    set $homeShirtColor(value) {
        this.homeShirtColor = value;
    }
    set $awayShirtColor(value) {
        this.awayShirtColor = value;
    }
    set $coach(value) {
        this.coach = value;
    }
    set $president(value) {
        this.president = value;
    }
    set $footballPlayer(value) {
        this.footballPlayer = value;
    }
}
exports.FootballTeam = FootballTeam;
