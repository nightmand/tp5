function calc(){
    ds=new Date()
    j=ds.getDate()
    m=ds.getMonth()+1
    a=ds.getFullYear()
    h=ds.getHours()
    mi=ds.getMinutes()
    s=ds.getSeconds()
    if(j<10){
        j="0"+j
    }
    if(m<10){
        m="0"+m
    }
    ch=j+"/"+m+"/"+a
    ch2=h+":"+mi+":"+s
    document.write(ch)
    document.write("<br>")
    document.write(ch2)
}