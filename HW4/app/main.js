// Task 1 start

buttonT1.onclick = function(){
    let firstIp = inputFirstIP.value.split('.');
    let secondIp = inputSecondIP.value.split('.');
    for(let i = 0; i < 4; i++){
        firstIp[i] = +firstIp[i];
        secondIp[i] = +secondIp[i];
    }
    if(isValid(firstIp,secondIp)){
        let kolAdr = 0;
        kolAdr += secondIp[3] > firstIp[3] ? (secondIp[3] - firstIp[3]) : kolAdr;
        kolAdr += secondIp[2] < firstIp[2] ? kolAdr : secondIp[3] < firstIp[3] ? ((secondIp[2] - 1) - firstIp[2]) * 256 + (256 - (firstIp[3] - secondIp[3])) : (secondIp[2] - firstIp[2]) * 256;
        kolAdr += secondIp[1] < firstIp[1] ? kolAdr : secondIp[2] < firstIp[2] ? ((secondIp[1] - 1) - firstIp[1]) * 65536 + (65536 - (firstIp[2] - secondIp[2])) : (secondIp[1] - firstIp[1]) * 65536;
        kolAdr += secondIp[0] < firstIp[0] ? kolAdr : secondIp[1] < firstIp[1] ? ((secondIp[0] - 1) - firstIp[0]) * 16777216 + (16777216 - (firstIp[1] - secondIp[1])) : (secondIp[0] - firstIp[0]) * 16777216;
        document.getElementById('resultT1').innerHTML = "Количество доступных IP адресов: " + kolAdr;
    }
    else{
        alert("Ip введён неправильно!");
    }
}

function isValid(ip1,ip2){
    let res = true;
    const checkIP1 = ip1.length == 4 && ip1[0] <= 255 && ip1[1] <= 255 && ip1[2] <= 255 && ip1[3] <= 255 && ip1[0] >= 0 && ip1[1] >= 0 && ip1[2] >= 0 && ip1[3] >= 0;
    const checkIP2 = ip2.length == 4 && ip2[0] <= 255 && ip2[1] <= 255 && ip2[2] <= 255 && ip2[3] <= 255 && ip2[0] >= 0 && ip2[1] >= 0 && ip2[2] >= 0 && ip2[3] >= 0;
    res = checkIP1 ?  true : false;
    res = checkIP2 ?  true : false;
    return res;
}

// Task 1 end
// Task 2 Start

buttonT2.onclick = function(){
    let morse = inputMorse.value.trim().split('   ');
    for (let i = 0; i < morse.length; i++) {
        morse[i] = morse[i].toString().split(' '); 
    }
    console.log(morse);
    let result = morseDecode(morse);
    document.getElementById('resultT2').innerHTML = "Расшифровка: " + result.join(' ');
}
function morseDecode(code){
    const morseCode = ["0", "-----","1", ".----","2", "..---","3", "...--","4", "....-","5", ".....","6", "-....","7", "--...","8", "---..","9", "----.","a", ".-","b", "-...","c", "-.-.","d","-..","e", ".","f", "..-.","g", "--.","h", "....","i", "..","j", ".---","k", "-.-","l", ".-..","m", "--","n", "-.","o", "---","p", ".--.","q", "--.-","r", ".-.","s", "...","t", "-","u", "..-","v", "...-","w", ".--","x", "-..-","y", "-.--","z", "--..",".", ".-.-.-",",", "--..--","?", "..--..","!", "-.-.--","-", "-....-","/", "-..-.","@", ".--.-.","(", "-.--.",")", "-.--.-"];
    const wordKol = code.length;
    let res = new Array();
    for(let i = 0; i < wordKol; i++){
        const wordlength = code[i].length;
        let word = new Array();
        for(let k = 0; k < wordlength; k++){
            let cIndex = morseCode.findIndex(el => el == code[i][k]);
            word.push(morseCode[cIndex-1]);
        }
        res.push(word.join(''));
    }
    return res;
}
// Task 2 End
// Task 3 start

    const chronos = (year, month,day) =>{
        year<500 ? sum = Math.trunc(year/5)-Math.trunc(year/100):(year%500==0&&month<=2&&day<=31) ?sum = Math.trunc(year/5)+Math.trunc(year/500)-Math.trunc(year/100)-1:
        sum = Math.trunc(year/5)+Math.trunc(year/500)-Math.trunc(year/100)
        console.log(sum)
        count = (year-1)*360+(month-1)*30+day+sum;
        console.log(count %7)
        switch(count %7)
        {
            case 0 : {
            console.log("Saturday");return "Saturday";
            break;
            }
            case 1 : {
            console.log("Sunday");return "Sunday";
            break;
            }
            case 2 : {
            console.log("Monday");return "Monday";
            break;
            }
            case 3 : {
            console.log("Tuesday");return "Tuesday";
            break;
            }
            case 4 : {
            console.log("Wednesday");return "Wednesday";
            break;
            }
            case 5 : {
            console.log("Thursday");return "Thursday";
            break;
            }
            case 6 : {
            console.log("Friday");return "Friday";
            break;
            }
        }
        }

// Task 3 end