let random = parseInt(Math.random()*100)+1;

let searchBox = document.getElementById('search');
let btn = document.getElementById('search-btn');
let result = document.getElementById('result');
let replay = document.getElementById('replay');

btn.addEventListener('click',()=>{
    let num=searchBox.value;
    if(num>random){
        result.innerText='The number is lesser';
    }else if(num<random){
        result.innerText='The number is greater';
    }else{
        result.innerText='congratulation, you won the game!';
        replay.style.visibility = "visible";
        searchBox.style.visibility = "hidden";
        btn.style.visibility = "hidden";
    }
})
replay.addEventListener('click',()=>{
    replay.style.visibility = "hidden";
    searchBox.style.visibility = "visible";
    btn.style.visibility = "visible";
    searchBox.value = "";
    result.innerText='';
})

