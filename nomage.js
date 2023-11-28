
function AL() {
    var nom=document.getElementById('nom').value;
    var age=document.getElementById('age').value;
    if (nom=="" || age=="") {
        alert("Rempliser les input");
        
    }else if(age<10 || age>20){
        alert("l'age n'est pas valider");  
    }else{    
        var table = document.getElementById("m");
        var newRow = table.insertRow(-1);
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        cell1.innertText = nom.toString();
        cell2.innertText = age.toString();
   }
} 