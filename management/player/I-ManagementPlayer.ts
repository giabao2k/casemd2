import { FootballPlayer } from "../../model/FootballPlayer";
import { IManagement} from "../I-Management";

export interface IManagementPlayer extends IManagement<FootballPlayer>{
    findByNamePlayer(namePlayer: string): FootballPlayer | null; // tìm kiếm theo tên cầu thủ
    findByPhoneNumber(phoneNumber: string): FootballPlayer | null; // tìm kiếm theo số điện thoại cầu thủ
}