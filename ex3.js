function calc(){
    let a=Math.floor(Math.random() * 10)
    let b=Number(prompt("donner unn nombre"))
    let i=1
    while(a!=b && i<=6){
        if(a<b){
            alert("trop grand")
            i++
            b=Number(prompt("Donner un autre nombre"))
        }
        else if(a>b){
            alert("trop petit")
            i++
            b=Number(prompt("Donnner un autre nombre"))
        }
    }
    if(i<=6){
        alert("Gangnant")
    }
    else{
        alert("perdue")
    }
    

}