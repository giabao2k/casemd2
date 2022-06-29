export class FootballPlayer{
    private id: number = 1;
	private _role: number = 0;
    private namePlayer:string;                // tên cầu thủ
    private clothersNumber: number;           // số áo
    private phoneNumber: string;              // số điện thoại(10 số)
    private location: string;                 // vị trí đá trên sân
    private age: number;                      // tuổi
	private teamPlayer : string;


	constructor($namePlayer: string, $clothersNumber: number, $phoneNumber: string, $location: string, $age: number,$teamPlayer:string) {
		this.namePlayer = $namePlayer;
		this.clothersNumber = $clothersNumber;
		this.phoneNumber = $phoneNumber;
		this.location = $location;
		this.age = $age;
		this.teamPlayer = $teamPlayer;
	}
	public get role(): number  {
		return this._role;
	}
    public get $id(): number {
		return this.id;
	}
	public get $namePlayer(): string {
		return this.namePlayer;
	}
	public get $clothersNumber(): number {
		return this.clothersNumber;
	}
	public get $phoneNumber(): string {
		return this.phoneNumber;
	}
	public get $location(): string {
		return this.location;
	}
	public get $age(): number {
		return this.age;
	}
	public get $teamPlayer(): string {
		return this.teamPlayer;
	}
	public set role(value: number ) {
		this._role = value;
	}
    public set $id(value: number) {
		this.id = value;
	}
	public set $namePlayer(value: string) {
		this.namePlayer = value;
	}
	public set $clothersNumber(value: number) {
		this.clothersNumber = value;
	}
	public set $phoneNumber(value: string) {
		this.phoneNumber = value;
	}
	public set $location(value: string) {
		this.location = value;
	}
	public set $age(value: number) {
		this.age = value;
	}
	public set $teamPlayer(value: string) {
		this.teamPlayer = value;
	}
	
}