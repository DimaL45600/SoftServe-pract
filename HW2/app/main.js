// Task 1 start
let notarrT1;
let result1;

let inputT1 = document.querySelector('.inputT1') // input T1
let buttonS = document.querySelector('.buttonT1') // buttonT1

buttonS.onclick = function(){
    notarrT1 = inputT1.value;
    let arr = notarrT1.toString().split('|');
    let row_kol = arr.length;
    for (let index = 0; index < row_kol; index++) {
        let temp = arr[index];
        arr[index] = temp.toString().split(','); 
    }
    for (let index = 0; index < row_kol; index++) {
        let colums = arr[index].length;
        for (let index2 = 0; index2 < colums; index2++) {
            let temp = +arr[index][index2];
            arr[index][index2] = temp;
        }
    }
    console.log(arr);
    result1 = SumOfMin(arr,row_kol);
    document.getElementById("resultT1").innerHTML = "Сумма минимальных елементов каждой строки = "+ result1;
}

function SumOfMin(array,row_kol) {
    let sum = 0; 
    for (let index = 0; index < row_kol; index++) {
        array[index].sort((a, b) => a - b)
        sum = sum + array[index][0];
    }
    return sum;
}
// Task 1 end
// Task 2 start
let notarrT2;
let resultT2;

let inputT2 = document.querySelector('.inputT2') // input T2
let buttonT2 = document.querySelector('.buttonT2') // buttonT2

buttonT2.onclick = function(){
    notarrT2 = inputT2.value;
    let arrT2 = notarrT2.toString().split(',');
    let num_kol = arrT2.length;
    for (let index = 0; index < num_kol; index++) {
        let temp = +arrT2[index];
        arrT2[index] = temp;
    }
    if (num_kol >= 2) {
        resultT2 = TwoOldest(arrT2);
        document.getElementById("resultT2").innerHTML = "Два старших елемента - " + resultT2;
    } else {
        document.getElementById("resultT2").innerHTML = "необходимо ввести минимум 2 елемента";
    }
}
function TwoOldest(array) {
    let res = [0,0];
    array.sort((a, b) => b - a);
    res[0]=array[1];
    res[1]=array[0];
    console.log(array);
    return res;
}
// Task 2 end
// Task 3 start
let notarrT3;
let resultT3;

let inputT3 = document.querySelector('.inputT3') // input T2
let buttonT3 = document.querySelector('.buttonT3') // buttonT2

buttonT3.onclick = function(){
    notarrT3 = inputT3.value;
    notarrT3 = notarrT3.replace(/\s+/g, ' ').trim();
    resultT3 = ShortestWord(notarrT3);
    document.getElementById("resultT3").innerHTML = "Длинна минимального слова = " + resultT3;
}

function ShortestWord (string) {
    let res = 0;
    let ArrOfL = new Array();
    let tempArr = notarrT3.toString().split(' ');
    console.log(tempArr);
    for (let index = 0; index < tempArr.length; index++) {
        ArrOfL[index] = tempArr[index].length;  
    }
    console.log(ArrOfL);
    ArrOfL.sort((a, b) => a - b);
    res = ArrOfL[0];
    return res;
}
// Task 3 end