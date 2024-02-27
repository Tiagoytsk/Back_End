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
//drawBox(10)


let aluno1={nome:"joao",nota:3};
var alunos=[];
alunos.push(aluno1)

let aluno2={nome:"qntonio",nota:8};
alunos.push(aluno2)

let aluno3={nome:"francisco",nota:15};
alunos.push(aluno3)

let aluno4={nome:"pedro",nota:18};
alunos.push(aluno4)

function seeStudent(alunos){
    for(let i=0;i<alunos.length;i++){
        console.log("O "+alunos[i].nome+" teve "+alunos[i].nota)
    }
}
//seeStudent(alunos)
function greatesGrade(alunos){
    var bestgrade=alunos[0]
    for(let i=0;i<alunos.length;i++){
        console.log(alunos[i+1])
        if(alunos[i].nota>bestgrade.nota){
            bestgrade=alunos[i]
        }

    }
    console.log("O melhor aluno foi "+bestgrade.nome+" com a nota "+bestgrade.nota)
}
function lowestGrade(alunos){
    var bestgrade=alunos[0]
    for(let i=0;i<alunos.length;i++){
        console.log(alunos[i+1])
        if(alunos[i].nota<bestgrade.nota){
            bestgrade=alunos[i]
        }

    }
    console.log("O pior aluno foi "+bestgrade.nome+" com a nota "+bestgrade.nota)
}
function avrgGrade(alunos){
    let avg=0
    let soma=0
    for(let i=0;i<alunos.length;i++){
        soma+=alunos[i].nota
    }
    avg=soma/alunos.length
    console.log(avg)
}
function negativeGrades(alunos){
    let count=0
    for(let i=0;i<alunos.length;i++){
        if(alunos[i].nota<9.5){
            console.log("O "+alunos[i].nome+" chumbou com a nota "+alunos[i].nota)
            count++
        }
    }
    console.log("O numero total de negativas foram:"+count)
}
function positiveGrades(alunos){
    for(let i=0;i<alunos.length;i++){
        if(alunos[i].nota<9.5){
            console.log("O "+alunos[i].nome+" chumbou com a nota "+alunos[i].nota)
        }
    }
}
function menuGrades(alunos,menu){
    switch(menu){
        case "a":
                seeStudent(alunos);
                break;
        case "c":
                greatesGrade(alunos);
                break;
        case "d":
                lowestGrade(alunos);
                break;
        case "e":
                avrgGrade(alunos);
                break;
        case "f":
                negativeGrades(alunos);
                break;
        case "g":
                positiveGrades(alunos);
                break;
        case "s":
                return; 
        default:
                console.log("Opção inválida!");
    }
}
menuGrades(alunos,"f")

function calcularTempoDeTrabalho(horaEntrada, horaSaida) {
    const horaAbertura = new Date();
    horaAbertura.setHours(8, 0, 0); // 08:00:00
    const horaFechamento = new Date();
    horaFechamento.setHours(18, 0, 0); // 18:00:00
    const entrada = new Date('1970-01-01T' + horaEntrada);
    const saida = new Date('1970-01-01T' + horaSaida);
    if (entrada < horaAbertura || saida > horaFechamento) {
        return "Fora do horário de trabalho!";
    }
    const tempoDeTrabalho = saida - entrada;
    const horas = Math.floor(tempoDeTrabalho / 3600000);
    const minutos = Math.floor((tempoDeTrabalho % 3600000) / 60000);
    const segundos = Math.floor((tempoDeTrabalho % 60000) / 1000);

    return `Tempo de trabalho: ${horas} horas, ${minutos} minutos, ${segundos} segundos.`;
}

const horaEntrada = '09:30:00';
const horaSaida = '17:45:00';

console.log(calcularTempoDeTrabalho(horaEntrada, horaSaida));