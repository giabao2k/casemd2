import { FootballTeam } from "../../model/FootballTeam";
import { IManagement } from "../I-Management";
export interface IManagementTeam extends IManagement<FootballTeam>{
    findByTeamname(nameTeam: string): FootballTeam | null; // tìm kiếm theo tên câu lạc bộ
    findByPresident(president: string): FootballTeam | null; // tìm kiếm theo tên chủ tịch
}