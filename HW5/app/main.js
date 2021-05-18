// Task 1 start
buttonT1.onclick = function(){
    let baseString = inputT1.value.trim().split('');
    let action = '';
    let sepPos = -1;
    baseString.includes("+") ? action = '+' : baseString.includes("-") ? action = '-' : baseString.includes("*") ? action = '*' : action = '/';
    sepPos = baseString.indexOf(action);
    let rightSide = baseString.splice(sepPos+1);
    let leftSide = baseString.splice(0,sepPos);
    let lR = +toNum(leftSide);
    let rR = +toNum(rightSide);
    let res = 0;
    switch (action) {
        case "+":
            res = lR+rR;
            break;
        case "-":
            res = lR-rR;
            break;
        case "*":
            res = lR*rR;
            break;
        case "/":
            res = lR/rR;
            break;
    }
    alert("результат вычисления в числах : " + res + "\nВ Quipu : " + toQuipu(res));
}

function toNum(arr){
    let num = "";
    let kol = 0;
    for(let i = 0; i < arr.length; i++){
        arr[i] == '@' ? kol++ : console.log('@');
        arr[i] =='@' && i == arr.length - 1 ? (num = num.concat(kol), console.log(kol), kol = 0 ): console.log('add last num'); 
        arr[i] =='~' && arr[i-1] == '@' ? (num = num.concat(kol), console.log(kol), kol = 0 ): console.log('add num');
        arr[i] =='~' && arr[i-1] == '~' ? num = num.concat(0) : console.log('add 0'); 
    }
    return num;
}

function toQuipu(result){
    let resStr = "";
    let nums = "" + result;
    nums = nums.split('');
    console.log(nums);
    for(let i = 0; i < nums.length; i++){
        nums[i] = +nums[i];
        nums[i] > 0 ? (resStr = resStr.concat('@'.repeat(nums[i])),resStr = resStr.concat('~')) : resStr = resStr.concat('~');

    }
    return resStr;
}

// Task 1 end
// Task 2 start
let maxA = [];
function findMaxProd (num){
    maxA = [num,num];
    let arr = [num,0];
    let iter = num;
    while (iter != 1) {
            //console.log("opachi");
            arr.splice(1)
            arr[0]--;
            iter = arr[0];
            arr[1] = num - arr[0];
            findMax(arr);
            if(arr[1] > 2){
            checkArr(arr,1);
            }else{
                if(arr[1] == 2){
                    arr.splice(1);
                    arr.push(1);
                    arr.push(1);
                }
            }
            findMax(arr);
    }
    console.log(arr + "   final");
    console.log(maxA);
    alert(maxA.join(' '));
}

function checkArr(arr,i){
    let temp = arr[i];
    while (arr[i] !=1 ) {
            arr.splice(i+1)
            arr[i]--;
            arr[i+1] = temp - arr[i];
            findMax(arr);
            if(arr[i+1] > 2){
            checkArr(arr,i+1);
            }else{
                if(arr[i+1] == 2){
                    arr.splice(i+1);
                    arr.push(1);
                    arr.push(1);
                }
            }
           findMax(arr);
    }
}

function findMax(arr){
    let m = 1;
    let a = new Array();
    arr.forEach(element => {
        m *= element;        
    });
    if(m > maxA[0]){
        maxA[0] = m;
        maxA.splice(1);
        maxA.push(arr.join(','));
    }
    if(m == maxA[0]){
        console.log(arr);
        maxA.push(arr.join(','));
    }
}
// Task 2 end
// Task 3 start

function clerk(arr){
    const arrL = arr.length;
    let serve = true;
    let twentyFife = 0;
    let fifty = 0;
    let sto = 0;
    let i = 0;
    while(i < arrL){
        
        
        switch (arr[i]) {
            case 25:
                twentyFife++;
                break;
            case 50:
                twentyFife >= 1 ? (fifty++ , twentyFife--) : serve = false;
                break;
            case 100:
                fifty >= 1 && twentyFife >= 1 ? (sto++ , fifty-- , twentyFife--) : twentyFife >= 3 ? (sto++ , twentyFife -= 3) : serve = false; 
                break;
        } 
        i++;
        console.log(twentyFife + "  " + fifty + "  " + sto);
    }
    serve == true ? alert("Все клиенты были обслужены!  :)") : alert("Не все клиенты были обслужены!  :(");
}

// Task 3 end