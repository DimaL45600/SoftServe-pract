// Task 1 start
let inputT1 = document.querySelector('.inputT1') // input T1
let buttonT1 = document.querySelector('.buttonT1') // buttonT1
buttonT1.onclick = function(){
    let notArrT1 = inputT1.value;
    notArrT1 = notArrT1.replace(/\s+/g, ' ').trim();
    let arr = notArrT1.toString().split(' ');
    const arrLength = arr.length;
    let res = new Array(arrLength);
    for( let i = 0; i < arrLength; i++){
        const wordLength = arr[i].length;
        for( let k = 0; k < wordLength; k++){
            if(false == isNaN(arr[i][k])){
                const num = +arr[i][k];
                res[num-1] = arr[i];
            }
        }
    }
    let result = res.join(' ');
    document.getElementById('resultT1').innerHTML = "Обработанная строка: " + result;
}
// Task 1 end
// Task 2 start   X,O,X,O,X,O,O,O,X = X    O,X,O,X,O,X,X,X,O = O    X,X,O,X,O,X,X,X,O = N
let inputT2 = document.querySelector('.inputT2') // input T1
let buttonT2 = document.querySelector('.buttonT2') // buttonT2
buttonT2.onclick = function(){
    let notArrT2 = inputT2.value;
    let arr = notArrT2.toString().split(',');
    let result = winCheck(arr);
    if(result == 1){
        document.getElementById('resultT2').innerHTML = "Победили X";
    }
    if(result == 2){
        document.getElementById('resultT2').innerHTML = "Победили O";
    }
    if(result == 0){
        document.getElementById('resultT2').innerHTML = "Ничья";
    }
    if(result == -1){
        document.getElementById('resultT2').innerHTML = "заполнено не до конца";
    }
}

function winCheck(field){
    let w = 0
    const win = [[0,1,2],[3,4,5],[6,7,8],[0,3,4],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    for (let i = 0; i < 8; i++) {
        if (field[win[i][0]] == "X" && field[win[i][1]] == "X" && field[win[i][2]] == "X") {
            w = 1;
            console.log(w);
        }
        if (field[win[i][0]] == "O" && field[win[i][1]] == "O" && field[win[i][2]] == "O"){
            w = 2;
            console.log(w);  
        } 
    }
    for (let i = 0; i < 9; i++){
        if(field[i] != 'X' || field[i] != 'O') w = -1;
    }
    return w;
}
// Task 2 end
// Task 3 start
function chairs(arr) {
    const arrLength = arr.length;
    const needChairs = arr[arrLength - 1];
    const roomsCount = arrLength - 1;
    let chairsHave = 0;
    let chairsTake = new Array();
    for(let i = 0; i < roomsCount; i++){
        if(chairsHave != needChairs){
        const peopleInRoom = arr[i][0].length;
        const chairsInRoom = arr[i][1];
        const availableChairs = chairsInRoom - peopleInRoom;
        if(availableChairs > 0){
            if((chairsHave + availableChairs) > needChairs){
                chairsTake.push(needChairs - chairsHave);
                chairsHave = needChairs;
            }
            else{
                chairsTake.push(availableChairs);
                chairsHave += availableChairs;
            }
        }
        else{
            chairsTake.push(0);
        }
        }
        else{
            break;
        }
    }
    chairsTake.join(', ');
    if(chairsHave < needChairs){
        document.getElementById('resultT31').innerHTML = "Порядок взятия стульев: " + chairsTake;
        document.getElementById('resultT32').innerHTML = "но стульев не хватило!";
    }
    else{
        document.getElementById('resultT31').innerHTML = "Порядок взятия стульев: " + chairsTake;
        document.getElementById('resultT32').innerHTML = "Стульев достаточно!";
    }
}