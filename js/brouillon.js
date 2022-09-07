// //on pointe sur le champ de saisie du nom 
// const nomStudent = document.getElementById("nom");

// //on pointe sur le champ de saisie du prenom 
// const prenomStudent = document.getElementById("prenom");

// //on pointe sur le champ de saisie de la date de naissance
// const bornStudent = document.getElementById("datenaissance");


//On pointe sur l'élément de bouton ajouter pour ajouter une matiere et sa note d'un etudiant
const boutonAjouter = document.getElementById("boutonAjouter");

//On pointe sur l'élément de champ de saisie de la note
const noteInput = document.getElementById("note");


//Gestion des notes de l'étudiant: ajouts d'une 


// //on definit les variables matiere et note qu'on utilisera
// let matiere;
// let note;


// function AjouterMatiereNote(){
//     //On récupère la saisie de la note et on transforme le texte en nombre
//     note = parseInt(noteInput.value);
//     //Si la saisie n'est pas un nombre, on affiche un message d'erreur
//     if(isNaN(note)){
//         alert("Ceci n'est pas un nombre");
//         return;
//     }
// }

// //Matiere:  on pointe sur la matiere selectionnee et on recupere sa valeur
// const matiere = document
//     .getElementById("matiere")
//     .addEventListener("change", (event) => {
//     document
//         .getElementById("s-matiere")
//         .innerText = event.target.value;
// });

// console.log(matiere);


// //Note : on pointe sur la note saisie et on recupere sa valeur
// document
//     .getElementById("note")
//     .addEventListener("change", (event) =>{
//         document
//             .getElementById("s-note")
//             .innerText = event.target.value;
// });

// //on pointe sur le bouton ajouter 
// const addButton = document.getElementById("btnAddNote");
// addButton.addEventListener('click', function addMatiereNote(){
//     const newTr = document.createElement("tr"); //on cree une nouvelle ligne du tableau
//     let tbodyEl = document.getElementsByTagName("tbody");
//     tbodyEl.appendChild(newTr);
    
//     //colonne matiere
//     const tdMatiere = document.createElement("td");
//     tdMatiere.classList.add("text-center");
//     newTr.appendChild(tdMatiere);
    
//     //colonne note
//     const tdNote = document.createElement("td");
//     tdNote.classList.add("text-center");
//     newTr.appendChild(tdNote);

//     //colonne action
//     const tdAction = document.createElement("td");
//     tdAction.classList.add("text-center");

//     //creation de ul
//     const newUl = document.createElement("ul");
//     newUl.classList.add("list-inline m-0")
        
//     //creation de li
//     const newLi = document.createElement("li");
//     newLi.classList.add("list-inline-item");
//     newUl.appendChild(newLi);

//     //creation du button
//     const newButton = document.createElement("button");
//     newButton.classList.add("btn btn-danger btn-sm rounded-0");
//     newButton.setAttribute("type","button");
//     newButton.setAttribute("title", "Delete");
//     newButton.setAttribute("id", "btnDelete1");
//     newButton.dataset.bsToggle = "tooltip";
//     newButton.dataset.bsPlacement = "top";    
//     newLi.appendChild(newButton);

//     //creation fa-minus
//     newiFa = document.createElement("i");
//     newiFa.classList.add("fa-solid fa-minus");
//     newButton.appendChild(newiFa);
    
        
//     // console.log(`matiere : ${matiere}; note ${note}`);
// });

const enregistrerEtudiant = document.getElementById("enregistrer-etudiant");
const zoneAffichage = document.getElementById("zone-affichage");
const zoneDetails= document.getElementById("zone-details");

const btnNouveauEtudiant = document.getElementById("new-recordStudent");
btnNouveauEtudiant.addEventListener('click', () =>{
    enregistrerEtudiant.setAttribute('style', 'display: block;');
});

const tableAllStudents = document.getElementById("students"); //tableau de la liste de tous les etudiants
let selectedRow = null; //au depart on a aucune ligne dans le tableau

const btnFaPlus = document.getElementById("fa-plus");
btnFaPlus.addEventListener('click', () =>{
    enregistrerEtudiant.setAttribute('style', 'display: block;');
});

const btnFaEdit = document.getElementById("fa-edit");
btnFaEdit.addEventListener('click', () =>{
    enregistrerEtudiant.setAttribute('style', 'display: block;');
    document.getElementById("legend").innerText = "Modifier les données de l'étudiant";
    selectedRow = td.parentElement.parentElement;
    document.getElementById("nom").value = selectedRow.cells[1].innerHTML;
    document.getElementById("prenom").value = selectedRow.cells[2].innerHTML;
    document.getElementById("datenaissance").value = selectedRow.cells[3].innerHTML;
    document.getElementById("lieunaissance").value = selectedRow.cells[4].innerHTML;
   
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
    enregistrerEtudiant.setAttribute('style', 'display: none;');
});



