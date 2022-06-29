import * as rl from 'readline-sync'
export class CoatchMenu{
    run(){
        let choice = -1;
        do{
            console.log('---Huấn luyện viên quản lí cầu thủ---')
            console.log('---1. Thêm cầu thủ mới vào đội---')
            console.log('---2. Xoá cầu thủ ra khỏi đội---')
            console.log('---3. Hiển thị danh sách đội bóng---')
            console.log('---0.Thoát---')
            choice = +rl.question('Nhập lựa chọn của bạn')
        }while(choice != 0)
    }
}