function calc(){
    do{
        ch=prompt("do,nner un chaine")
    }
    while(verif(ch)==false)
    d=0
    f=1
    while(f<ch.length){
        ch1=ch.substring(d,f)
        n=occ(ch1,ch)
        document.write("le nombre doccurence est"+String(n))
        document.write("<br>")
        d++
        f++

    }

}

function verif(ch){
    i=0
    while(i<ch.length && ch[i]>="a" && ch[i]<="z"){
        i++
    }
    return i==ch.length
}
function occ(ch1,ch){
    d=0
    f=1
    s=0
    while(f<ch.length){
        ch2=ch.substring(d,f+1)
        if (ch2==ch1){
            s++
        }
        d++
        f++
    }
    return s
}