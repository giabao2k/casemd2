import { Role } from "../../enum/role";
import { FootballPlayer } from "../../model/FootballPlayer";
import { ManagementTeam } from "../team/ManagementTeam";
import { IManagementPlayer } from "./I-ManagementPlayer";

export class ManagementPlayer implements IManagementPlayer{
    private static footballPlayers: FootballPlayer[] = [];
    private static id: number = 0;
    // tìm kiếm theo tên cầu thủ
    findByNamePlayer(namePlayer: string): FootballPlayer | null {
        for(let i = 1; i < ManagementPlayer.footballPlayers.length;i++){
            if(namePlayer === ManagementPlayer.footballPlayers[i].$namePlayer){
                return ManagementPlayer.footballPlayers[i];
            }
        }return null;
    }
    // tìm kiếm theo số điện thoại cầu thủ
    findByPhoneNumber(phoneNumber: string): FootballPlayer | null {
        for(let i = 1; i < ManagementPlayer.footballPlayers.length;i++){
            if(phoneNumber === ManagementPlayer.footballPlayers[i].$phoneNumber){
                return ManagementPlayer.footballPlayers[i];
            }
        }return null;
    }
    // hiển thị tất cả
    getAll(): FootballPlayer[] {
        return ManagementPlayer.footballPlayers
    }
    // tạo mới
    createNew(t: FootballPlayer): void {
        ManagementPlayer.id++ ;
        t.$id = ManagementPlayer.id; 
        t.role = Role.COATCH;
       ManagementPlayer.footballPlayers.push(t);
    //    console.log(ManagementPlayer.footballPlayers);
    //    ManagementTeam.findByTeamname(t.$teamPlayer);

    }
    // cập nhật theo id
    updateById(id: number, t: FootballPlayer): void {
        let index = this.findById(id);
        if(index != -1){
         ManagementPlayer.footballPlayers[index] = t;
        }
    }
    // loại bỏ theo id
    removeById(id: number): void {
        let index = this.findById(id);
        if(index != -1){
         ManagementPlayer.footballPlayers.splice(index, 1);
        }
    }
    // tìm theo id
    findById(id: number): number {
        let index = -1;
        for (let i = 0; i < ManagementPlayer.footballPlayers.length; i++) {
            if (ManagementPlayer.footballPlayers[i].$id == id) {
                index = i;
                break;
            }
        }
        return index;
    }

    findByNameTeam(nameTeam: string): FootballPlayer[] {
        let rs = [];
        for (let i = 0; i < ManagementPlayer.footballPlayers.length; i++) {
            if (ManagementPlayer.footballPlayers[i].$teamPlayer == nameTeam ) {
                rs.push(ManagementPlayer.footballPlayers[i]);


            }
        }
        return rs;
    }
    resetPlayer(){
        return ManagementPlayer.footballPlayers = [];
    }

}