function imc(peso, altura){
    var imc=peso/altura*altura
    if(imc<18,5)
        console.log("Abaixo do peso")
    else if(imc>=18,5 && imc<=25)
        console.log("no peso normal")
    else if(imc>25 && imc<=30)
        console.log("acima do peso")
    else if(imc<30)
        console.log("obeso")
}

function reverseWords(str){
    var reversedstr = "";
    var words = str.split(" ");
    for(let i = 0; i<words.length; i++){
        var word= words[i];
        for(let j=word.length-1;j>=0;j--){
            reversedstr+=word[j];
        }
        reversedstr+=" ";
    }
    return reversedstr
}
//console.log(reverseWords("hoje e domingo"))

function voals(str){
    let count=0
    for(let i=0;i<str.length;i++){
        if(str[i]=="a" || str[i]=="e" || str[i]=="i" ||str[i]=="o" ||str[i]=="u")
            count++
    }
    return count
}
//console.log(voals("olaaaaa"))

function countLeter(leter,phrase){
    phrase=phrase.toLowerCase();
    leter=leter.toLowerCase();
    let count=0
    for(let i = 0;i<phrase.length;i++){
        if(phrase[i]==leter)
            count++
    }
    return count
}
//console.log(countLeter("a","ola tiaga e linda"))

function workingHours(entrada,out){
    worked=entrada-out
}

function drawRectangle(width, heigth){
    var line="";
    for(let j=0;j<heigth;j++){
        for(let i=0;i<width;i++){
            line+="*"
        }
        console.log(line)
        line=""
    }
    
}
//drawRectangle(2,5)
function drawTriangle(heigth){
    var line=""
    var width=1
    for(let j=0;j<heigth;j++){
        for(let i=0;i<width;i++){
            line+="*"
        }
        console.log(line)
    }
}
//drawTriangle(10)

function drawBox(heigth){
    var line=""
    for(let i=0;i<heigth;i++){
        if(i==0 || i==heigth-1){
            for(let j=0; j<heigth;j++){
                line+="*"
            }
            console.log(line)

        }
        else{
            for(let k=0;k<heigth;k++){
                if(k==0||k==heigth-1){
                    line+="*"
                }
                else{
                    line+=" "
                }
            }
            console.log(line)
        }
        line=""
    }
}
drawBox(10)