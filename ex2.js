function calc(){
    let ch=prompt("donner un chaine")
    let ch1=""
    for(i=0;i<ch.length;i++){
        ch1=ch[i]+ch1
    }
    if (ch1==ch){
        alert("la chaine ch est palindrome")
    }
    else{
        alert("chaine nest pas palindrome")
    }
}