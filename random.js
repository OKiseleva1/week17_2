let random = document.querySelector(".random");
let min = document.querySelector(".min");
let max = document.querySelector(".max");
let middle = document.querySelector(".middle");
let sum = document.querySelector(".sum");
let multiplication = document.querySelector(".multiplication");

function generate (){
    let numberMax = 10;
    let numberMin = -10;
    return (Math.ceil(Math.random()*(numberMax-numberMin))+numberMin);

}
function generateArr(){
    let arr = [];
    for (i=0; i<10; i++){
        let number= generate();
        arr.push(number);
       }
       

 random.innerHTML = "Сгенерировали: " + arr;
 min.textContent= "Минимальное: " + Math.min(...arr);
 max.textContent= "Максимальное: " + Math.max(...arr);
 sum.textContent = "Сумма чисел: " + arr.reduce((a, b) => a + b);
 let a = arr.reduce((a, b) => a + b);
 middle.textContent = "Среднее арифметическое: " + a/arr.length;
 multiplication.textContent = "Произведение чисел: " + arr.reduce((a, b) => a * b);

}
generateArr();


