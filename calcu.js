function addition(){
    var a= document.getElementById("a").value;
    var b= document.getElementById("b").value;
    var c= Number(a)+Number(b);

       r.value= c;
}

function soustraction(){
    var a= document.getElementById("a").value;
    var b= document.getElementById("b").value;
    var d= Number(a)-Number(b);

       r.value= d; 
}

function division(){
    var a= document.getElementById("a").value;
    var b= document.getElementById("b").value;
    var e= Number(a)/Number(b);
      
       r.value= e;
}

function multiplication(){
    var a= document.getElementById("a").value;
    var b= document.getElementById("b").value;
    var f= Number(a)*Number(b);
    
       r.value= f;
}

function parite(){
    var x;
    x= Number(document.getElementById("r").value);
    if (x%2==0)
    p.value=("Pair");
    else
    p.value=("Impair");
}

function permute(){
    var v="";
    var n1= document.getElementById("a").value;
    var n2= document.getElementById("b").value;
    v=n1;
    n1=n2;
    n2=v;

    a.value =n1;
    b.value =n2;

}
