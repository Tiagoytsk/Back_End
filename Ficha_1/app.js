function notafinal(nt,np){
    var mean= nt*0.4+np*0.6;
    console.log("Your average is:"+mean);
    if (mean<9.5){
        console.log("you failed")
    }
    else{
        console.log("you passed")
    }
}
notafinal(8,10);

function mes(num){
    var mes=["janeiro","fevereiro","marco","abril","maio","junho","julho","agosto","setembro","outrubro","novembro","dezembro"]
    console.log(mes[num-1]);
}
mes(8);
function calculator(op1,op2,operator){
    if (operator=="+")
        return op1+op2;
    else if(operator=="*")
        return op1*op2;
    else if(operator=="/")
        return op1/op2;
    else if(operator=="-")
        return op1-op2;
    else if (operator=="^")
        return Math.pow(op1,op2)
}
console.log(calculator(2,2,"^"))

function multiple(value,limit){
    for(var i=value;i<=limit;i+=value)
        console.log(i)
}
multiple(5,20)
function intmult(i){
    for(var i=0;i<=100;i++)
        console.log(i)
}
intmult(1)
function fact(n){
    var f=1;
    for(var i=n;i>1;i-- )
        f*=i;
    return f;
}
function getMax(array){
    var max=array[0];
    for(let i=1;i<array.length;i++){
        if(array[i]>max)
            max=array[i];
    }
    return max;
}
function getMin(array){
    var min=array[0];
    for(var i=1;i<array.length;i++){
        if(array[i]<min)
            min=array[i];
    }
    return min;
}
function getMed(array){
    var med=0;
    for(var i=0;i<array.length;i++){
        med+=array[i]
    }
    return med/array.length;
}