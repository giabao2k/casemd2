export interface IManagement<T>{
    getAll(): T[]; // hiển thị tất cả

    createNew(t: T): void; // tạo mới

    updateById(id:number, t: T):void; // cập nhật theo id

    removeById(id:number, t: T):void; // loại bỏ theo id
    
    findById(id:number): number; // tìm theo id
}