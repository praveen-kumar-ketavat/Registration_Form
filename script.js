let pass=document.querySelector("#pass");
let conf=document.querySelector("#conf");
let submit=document.querySelector("#submit");
let tick=document.querySelector(".correct");
let form=document.querySelector(".form");
let success=document.querySelector(".success");
let msg=document.querySelector("#msg");


conf.onkeyup=()=>{
    if(pass.value !== conf.value){
        console.log("not matchedd...");
    }else{
        console.log("matched..");
        tick.classList.toggle('on');
    }
}

submit.onclick=()=>{
    if(pass.value == conf.value){
        form.classList.toggle("off");
        success.classList.toggle("on");
    }
    else{
        msg.innerText="password mismatch..";
    }
}

