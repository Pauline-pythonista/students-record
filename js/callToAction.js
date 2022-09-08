const btnNouveauEtudiant = document.getElementById("new-recordStudent");
const zoneEnregistrementEtudiant = document.getElementById("zone-enregistrement-etudiant");
const zoneAffichage = document.getElementById("zone-affichage");
const zoneDetails= document.getElementById("zone-details");

let selectedRow = null; //au depart on a aucune ligne dans le tableau

btnNouveauEtudiant.addEventListener('click', () =>{
    zoneEnregistrementEtudiant.setAttribute('style', 'display: block;');
});

const btnFaPlus = document.getElementById("fa-plus");
console.log(btnFaPlus);
btnFaPlus.addEventListener('click', (event) =>{
    event.preventDefault();
    event.stopPropagation();
    zoneEnregistrementEtudiant.setAttribute('style', 'display: block;');
});

const btnFaEdit = document.getElementById("fa-edit");
btnFaEdit.addEventListener('click', () =>{
    zoneEnregistrementEtudiant.setAttribute('style', 'display: block;');
    document.getElementById("legend").innerText = "Modifier les données de l'étudiant";
});

const btnFaView = document.getElementById("fa-view");
btnFaView.addEventListener('click', ()=>{
    zoneDetails.setAttribute('style', 'display: block;');
     
});

// const btnFaDelete = document.getElementsByClassName("fa-delete");
// btnFaDelete.addEventListener('click', ()=>{
//     alert("Vous voulez vraiment supprimer cet étudiant ? ");
    

// });

const btnEnregistrer = document.getElementById("saveBtn");
btnEnregistrer.addEventListener('click', () =>{
    zoneEnregistrementEtudiant.setAttribute('style', 'display: none;');
});



