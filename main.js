//JavaScript初級第1章 チェックテスト
//問1

let numbers = [2,5,12,13,15,18,22];

function isEven(num) {
    if(num %2 === 0){
        return console.log(num + 'は偶数です');}
}

for (let i = 0; i < numbers.length; i++) {
    isEven(numbers[i]);
}

//問2
class Car {
    constructor (gas , number) {
        this.gas = gas;
        this.number = number;
    }
    getNumGas() {
        console.log(`ガソリンは${this.gas}です。ナンバーは${this.number}です。`);
    }
}
let mycar = new Car(30.5 , 1234);
mycar.getNumGas();
