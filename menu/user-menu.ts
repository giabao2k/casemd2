import * as rl from 'readline-sync'
export class UserMenu{
    run(){
        let choice = -1;
        do{
            console.log('---Chế độ người xem giải đấu---')
            console.log('1.Hiển thị danh sách câu lạc bộ.')
            console.log('0.Thoát')
            choice = +rl.question('Nhập lựa chọn của bạn.')
        }while(choice != 0)
    }
}