function calcul_moyenne(){
    var n1= prompt("Donner la premiere note: ");
    var n2= prompt("Donner la deuxieme note: ");
    var n3= prompt("Donner la troisieme note: ");

    var somme =Number(n1)+Number(n2)+Number(n3);
    document.write ("Voici la somme: "+somme+ "<Hr>");
    
    var moyenne= somme/3
    document.write ("Voici la moyenne: "+moyenne+"<br>");

    if (moyenne<10)
    document.write("Vous etes redoublant");
    else
    document.write("Vous etes Admis");
}

function text_age(){
    let age= prompt("Quel est votre age: ");
    if (age<18){
    document.write("<font size ='8em' color='pink'>"+"Vous etes mineur"+"</font>");
    document.bgColor="red";}
    else{
    document.write("<font size ='8em' color='pink'>"+"Vous etes majeur"+"</font>");
    document.bgColor="green";}

}

function simple_affichage(){
    let name =prompt("Donner votre prenom: ");
    let familyname =prompt("Donner votre nom: ");
    document.write('<div style="margin:auto; width:300px; border:2px solid blue;">');
    document.write("Bonjour   " +name+ "  " +familyname );
    document.write('</div>');

}

function test_couleur(){
     let c= prompt("Donner une couleur: ");
     if (c=="rouge"||c=="ROUGE"){
        document.body.style.background="red";
     }
     else if (c=="bleu"||c=="BLEU"){
        document.body.style.background="blue";
     }
     else if (c=="rose"||c=="ROSE"){
        document.body.style.background="pink";
     }
     else {
        document.write("Couleur non comprise");
     }
}

