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



