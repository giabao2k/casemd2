import { FootballPlayer } from "./FootballPlayer";
export class FootballTeam {
    private id: number = 1;
    private _role: number = 2;
    private nameTeam: string;               // tên đội bóng
    private homeShirtColor: string;         // màu áo sân nhà
    private awayShirtColor: string;         // màu áo sân khách
    private coach: string;                  // huấn luyện viên
    private president: string;              // chủ tịch
    private footballPlayer: FootballPlayer[] = []  //danh sách cầu thủ

	constructor($nameTeam: string, $homeShirtColor: string, $awayShirtColor: string, $coach: string, $president: string) {
		this.nameTeam = $nameTeam;
		this.homeShirtColor = $homeShirtColor;
		this.awayShirtColor = $awayShirtColor;
		this.coach = $coach;
		this.president = $president;
	}
	public get $id(): number  {
		return this.id;
	}
	public get role(): number  {
		return this._role;
	}
	public get $nameTeam(): string {
		return this.nameTeam;
	}
	public get $homeShirtColor(): string {
		return this.homeShirtColor;
	}
	public get $awayShirtColor(): string {
		return this.awayShirtColor;
	}
	public get $coach(): string {
		return this.coach;
	}
	public get $president(): string {
		return this.president;
	}
	public get $footballPlayer(): FootballPlayer[]  {
		return this.footballPlayer;
	}
	public set $id(value: number ) {
		this.id = value;
	}
	public set role(value: number ) {
		this._role = value;
	}
	public set $nameTeam(value: string) {
		this.nameTeam = value;
	}
	public set $homeShirtColor(value: string) {
		this.homeShirtColor = value;
	}
	public set $awayShirtColor(value: string) {
		this.awayShirtColor = value;
	}
	public set $coach(value: string) {
		this.coach = value;
	}
	public set $president(value: string) {
		this.president = value;
	}
	public set $footballPlayer(value: FootballPlayer[] ) {
		this.footballPlayer = value;
	}
   
}
