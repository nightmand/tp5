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
    
    jo=["Lundi","Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"]
    mo = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
            "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]
    p=ch.indexOf("/")
    jj=jo[Number(ds.getDay())-1]
    p1=ch.lastIndexOf("/")
    mm=mo[Number(ch.substring(p+1,p1))-1]
    ch3=jj+" "+ch.substr(0,p)+" "+mm+" "+a
    document.write(ch3)



}