// const c = 10;

const tinhToan = () => {
    const c = 20;
    const tong = (a, b) => {
        const c = 30;
        return a + b + c;
    }

    const hieu = (a, b) =>{
        return a - b;        
    }

    const tich = (a, b) => {
        return a * b;
    }
    const thuong = (a, b) =>{
        return a / b;
    }

    return{
        tong: tong,
        hieu: hieu,
        tich: tich,
        thuong: thuong,
    }
};

// const tt = tinhToan();
// console.log(tt);
// console.log(tt.tich(10, 20));


const info = () => {
    let = fullName = "Lê Hải Lâm";

    const getfullName = () => {
        return fullName;
    }
    const setfullName = (string) => {
        fullName = string;
    }

    return {
        get: getfullName,
        set: setfullName,
    };
}

const inforUser =info();

console.log(inforUser);
console.log(inforUser.get());
console.log(inforUser.set("Lâm đẹp trai"));
console.log(inforUser.get());


//template string

const a = 10;
const b = 20;
const c = a + b;

const string = `Kết quả của ${a} + ${b} = ${c}`;

console.log(string);

