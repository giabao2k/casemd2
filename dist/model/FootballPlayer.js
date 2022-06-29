"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FootballPlayer = void 0;
class FootballPlayer {
    constructor($namePlayer, $clothersNumber, $phoneNumber, $location, $age, $teamPlayer) {
        this.id = 1;
        this._role = 0;
        this.namePlayer = $namePlayer;
        this.clothersNumber = $clothersNumber;
        this.phoneNumber = $phoneNumber;
        this.location = $location;
        this.age = $age;
        this.teamPlayer = $teamPlayer;
    }
    get role() {
        return this._role;
    }
    get $id() {
        return this.id;
    }
    get $namePlayer() {
        return this.namePlayer;
    }
    get $clothersNumber() {
        return this.clothersNumber;
    }
    get $phoneNumber() {
        return this.phoneNumber;
    }
    get $location() {
        return this.location;
    }
    get $age() {
        return this.age;
    }
    get $teamPlayer() {
        return this.teamPlayer;
    }
    set role(value) {
        this._role = value;
    }
    set $id(value) {
        this.id = value;
    }
    set $namePlayer(value) {
        this.namePlayer = value;
    }
    set $clothersNumber(value) {
        this.clothersNumber = value;
    }
    set $phoneNumber(value) {
        this.phoneNumber = value;
    }
    set $location(value) {
        this.location = value;
    }
    set $age(value) {
        this.age = value;
    }
    set $teamPlayer(value) {
        this.teamPlayer = value;
    }
}
exports.FootballPlayer = FootballPlayer;
