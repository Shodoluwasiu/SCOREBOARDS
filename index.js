
let homeb1 = document.getElementById("homedis") 
let homeb2 = document.getElementById("homedis")
let homeb3 = document.getElementById("homedis")

let guest1 = document.getElementById("guesdis") 
let guest2 = document.getElementById("guesdis")
let guest3 = document.getElementById("guesdis")
count = 0
countg= 0



function one(){
    count +=1
    homeb1.innerText = count   
    
   }

function two(){
    count +=2
    homeb2.innerText = count  
}
function three(){
    count +=3
   homeb3.innerText = count   
}
function oneg(){
    countg +=1
    guest1.innerText = countg   
    
   }

function twog(){
    countg +=2
    guest1.innerText = countg  
}
function threeg(){
    countg +=3
    guest3.innerText = countg   
}

