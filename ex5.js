function calc(){
    let sem=[ 'lun ', 'mra ', 'mer ', 'jeu ', 'ven ', 'sam ', 'ddi ' ]
    let sem1=[]
    for(i=0;i<=sem.length-2;i++){
        sem1+=sem[i]

    }
    for(i=0;i<=sem1.length-1;i++){
        document.write(sem1[i]+"<br>")
    }
}