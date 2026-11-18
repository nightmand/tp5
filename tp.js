function calc(){
    a=Number(prompt("val de a"))
    b=Number(prompt("val de b"))
    c=Number(prompt("val de c"))
    d=b**2-4*a*c
    if (d==0){
        x=-b/(2*a)
        alert(x)
    }
    else if(d>0){
        x1=-b+Math.sqrt(d)/2*a 
        x2=-b-Math.sqrt(d)/2*a
        alert(x1+" x2 = "+x2)
            
        }
    else{
        alert("lequation ne possede aucune solution")

    }
    }

