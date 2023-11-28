function AL(){
    var table= document.getElementById('m');
    var newRow =table.insertRow(-1);
    var cell1 =newRow.insertCell(0);
    var cell2 =newRow.insertCell(1);
    cell1.innerHTML ="Nouveau Nom";
    cell2.innerHTML ="Nouvel Age";
}