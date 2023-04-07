// javascript code goes here
let isStop= true;
let sec=0;
let min =0;
let hr =0;
function start(){
    if(isStop == true){
        isStop = false;          
        timer();
        document.getElementById('startbtn').disabled = true;  
        document.getElementById('stopbtn').disabled = false;
        document.getElementById('pausebtn').disabled = false;
    }
}
function timer(){
    if(isStop == false){
        sec = parseInt(sec);
        min = parseInt(min);
        hr= parseInt(hr);
        sec++;
        if(sec == 60){
            sec =0;
            min++;
        }
        if(min == 60){
            min =0;
            hr++;
        }
        if(sec <10){
            sec = "0"+ sec;
        }
        if(min <10){
            min = "0"+ min;
        }
        if(hr <10){
            hr = "0"+ hr;
        }
        stopwatch.innerHTML= hr +" : "+ min+" : " + sec;
        setTimeout("timer()",1000);
    }
}
let flag= true;
let a;
function pause(){
    isStop =true;
    document.getElementById('startbtn').disabled = true;  
    
    if(flag == true){
        flag = false;
        pausebtn.innerHTML= "continue"
        a= setInterval(x, 1000)
        
       
    }
    else{
        flag= true;
        clearInterval(a);
        pausebtn.innerHTML =" pause"
    }
    start();
}
function stop(){
    isStop = true;
    sec =0;
    min =0;
    hr= 0;
    stopwatch.innerHTML = "00 : 00 : 00";
    document.getElementById('startbtn').disabled = false; 
    document.getElementById('stopbtn').disabled = true;
    document.getElementById('pausebtn').disabled = true;
}