import { tong } from "./helpers/tong.js";
import { kiemTraChanLe } from "./helpers/kiemTraChanLe.js";
import { kiemTraSoDuong} from "./helpers/kiemTraSoDuong.js";
// Ví dụ 1: Dạng thường
// ham1();
// ham2();
// function ham1(){
//     console.log("Hàm 1");
// }
// function ham2(){
//     console.log("Hàm 2");
// }



//Ví dụ 2: Dạng callback
// function ham1(callback){
//     console.log("Hàm 1");
//     callback();
// }
// function ham2(){
//     console.log("Hàm 2");
// }
// ham1(ham2);


//Ví dụ 3: 

tong(10, 100, kiemTraChanLe);