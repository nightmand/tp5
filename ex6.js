function calc(){
    var fruits = [ 'Mangue', 'Raisin', 'Figue', 'Kiwi'];
    alert(fruits)
    c=prompt("Donner un fruit")
    test=false
    i=0
    while(test==false && i<fruits.length){
        if (c.toLowerCase() == fruits[i].toLowerCase()){
            test=true

        }
        else{
            i++
        }
    }
    k=fruits.length
    if(test==true){
        alert("ok!")
        t1=[]
        for(j=0;j<i;j++){
            t1[j]=fruits[j]

        }
        t2=[]
        for(j=i+1;j<fruits.length;j++){
            t2[j-i-1]=fruits[j]
        }
        fruits=t1.concat(t2)
    }
    else{
        alert("indisponible")
    }
    document.write(fruits)

}
