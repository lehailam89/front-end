import { sum } from "./sum.js";
 
import {a, b} from "./constant.js";
// import { hieu, thuong, tich, tong } from "./tinhToan.js";

import thongBao, {hieu as hi,thuong as th,tich as ti,tong as to } from "./tinhToan.js";   
let c = sum(a, b);

console.log(c);

// console.log(tong(a,b));

// console.log(hieu(a,b));

// console.log(tichch(a,b));

// console.log(thuong(a,b));

console.log(to(a,b));

console.log(hi(a,b));

console.log(ti(a,b));

console.log(th(a,b));

console.log(thongBao());

