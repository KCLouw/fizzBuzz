for(x = 1; x <= 100; x++){
    if(x % 3 === 0 && x % 5 === 0){
        document.getElementById("update").innerHTML += "Fizz-Buzz" + "<br>";
    }else if(x % 3 === 0){
        document.getElementById("update").innerHTML += "Fizz" + "<br>";
    }else if(x % 5 === 0){
        document.getElementById("update").innerHTML += "Buzz" + "<br>";
    }else{
        document.getElementById("update").innerHTML += x + "<br>";
    };
};


