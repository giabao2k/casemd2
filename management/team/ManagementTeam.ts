import { Role } from "../../enum/role";
import { FootballTeam } from "../../model/FootballTeam";
import { IManagementTeam } from "./I-ManagementTeam";

export class ManagementTeam implements IManagementTeam{
    private static footballTeams:FootballTeam[] = [];
    private static id: number = 0;
    // tìm kiếm theo tên câu lạc bộ
    findByTeamname(nameTeam: string): FootballTeam | null {
        for(let i = 0; i< ManagementTeam.footballTeams.length;i++){
            if(nameTeam === ManagementTeam.footballTeams[i].$nameTeam){
                return ManagementTeam.footballTeams[i];
            }
          }
            return null;
    }
    // tìm kiếm theo tên chủ tịch
    findByPresident(president: string): FootballTeam | null {
        for(let i = 0; i< ManagementTeam.footballTeams.length;i++){
            if(president === ManagementTeam.footballTeams[i].$president){
                return ManagementTeam.footballTeams[i];
            }
          }
            return null;
    }
        // hiển thị tất cả
    getAll(): FootballTeam[] {
        return ManagementTeam.footballTeams;
    }
     // tạo mới
    createNew(t: FootballTeam): void {
        ManagementTeam.id++
        t.$id = ManagementTeam.id;
        t.role = Role.ADMIN
       ManagementTeam.footballTeams.push(t);
    }


    addUserTopListPlayer(user: any) {
        ManagementTeam.footballTeams.push(user);
    }

    // cập nhật theo id
    updateById(id: number, t: FootballTeam): void {
       let index = this.findById(id);
       if(index != -1){
        ManagementTeam.footballTeams[index] = t;
       }
    }
    // loại bỏ theo id
    removeById(id: number, t: FootballTeam): void {
        let index = this.findById(id);
        if(index != -1){
         ManagementTeam.footballTeams.splice(index, 1);
        }
    }
    // tìm theo id
    findById(id: number): number {
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