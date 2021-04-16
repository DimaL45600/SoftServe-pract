//  Task 1 start

let L , W , H, S;
let resultt1;

let inputL = document.querySelector('.inputL') // input l
let inputW = document.querySelector('.inputW') // input W
let inputH = document.querySelector('.inputH') // input H
let button1 = document.querySelector('.button1') // button1

button1.onclick = function (){
    L = +inputL.value;
    W = +inputW.value;
    H = +inputH.value;
    if (L > 0 && W > 0 && H > 0) {
    if ( L <= 1000 && W <= 1000 && H <= 1000 ) {
        S = ((L*2)+(W*2))*H;
        resultt1 = S/16;
        resultt1 = Math.ceil(resultt1);
        document.getElementById("result1").innerHTML = "Нужно краски для помещения - "+ resultt1;
    }
    else{
        document.getElementById("result1").innerHTML = "Вы ввели значение превышающие 1000!";
    }
    }
    else{
        document.getElementById("result1").innerHTML = "Значения не могут быть меньше либо равными 0!";
    }
}

//  Task 1 end
//  Task 2 start

let A1 , A2 , A3 , B1 , B2 , B3;
let resultt2;

let inputA1 = document.querySelector('.inputA1') // input A1
let inputA2 = document.querySelector('.inputA2') // input A2
let inputA3 = document.querySelector('.inputA3') // input A3
let inputB1 = document.querySelector('.inputB1') // input B1
let inputB2 = document.querySelector('.inputB2') // input B2
let inputB3 = document.querySelector('.inputB3') // input B3
let button2 = document.querySelector('.button2') // button2

button2.onclick = function(){
    A1 = +inputA1.value;
    A2 = +inputA2.value;
    A3 = +inputA3.value;
    B1 = +inputB1.value;
    B2 = +inputB2.value;
    B3 = +inputB3.value;
    if (A1>0 && A2>0 && A3>0 && B1>0 && B2>0 && B3>0){
    if (A1<=100 && A2<=100 && A3<=100 && B1<=100 && B2<=100 && B3<=100) {
        let arrA = [A1 , A2 , A3];
        let arrB = [B1 , B2 , B3];
        arrA.sort();
        arrB.sort(); 
        resultt2 = arrA[0] * arrB[0] + arrA[1] * arrB[1] + arrA[2] * arrB[2];
        document.getElementById("result2").innerHTML = "Максимально возможная прибыль - "+ resultt2 +" грн";
    } 
    else {
        document.getElementById("result2").innerHTML = "Вы ввели значение превышающие 100!";
    }
    }
    else {
        document.getElementById("result2").innerHTML = "Значения не могут быть меньше либо равными 0!";
    }
}

//  Task 2 end
//  Task 3 start

let ticket , leftside , rightside;

let input_ticket = document.querySelector('.inputTicket') // input Ticket
let button3 = document.querySelector('.button3') // button3

button3.onclick = function(){
    ticket = input_ticket.value;
    let splitedticket = ticket.toString().split('');
    let arrTicket = splitedticket.map(Number)
    if (arrTicket.length == 6) {
        leftside = arrTicket[0] + arrTicket[1] + arrTicket[2];
        rightside = arrTicket[3] + arrTicket[4] + arrTicket[5];
        if (rightside == leftside){
            document.getElementById("result3").innerHTML = "Поздравляем вы счастливчик!!!";
        }
        else{
            document.getElementById("result3").innerHTML = "К сожалению сегодня не ваш день";
        }
    }
    else{
        document.getElementById("result3").innerHTML = "Номер билета должен состоять из 6 цифр!";
    }
}

// Task 3 end