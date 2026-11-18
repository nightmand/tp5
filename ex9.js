function calc(){
    do{
        a=prompt("D onner votre anne de naissance")

    }
    while(verif(a)==false)
    ass=Number(new Date().getFullYear())
    ms=Number(new Date().getMonth())+1
    aa=Number(a.substring(6))
    mm=Number(a.substring(3,5))
    document.write("votre age est "+String(ass-aa)+"ans"+String(ms-mm)+"Mois")








    
}
function verif(ch){
    p=ch.indexOf("/")
    p1=ch.lastIndexOf("/")
    return p==2 && p1==5
}