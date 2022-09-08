// Gestion des notes de l'étudiant
// Ajouter et supprimer une matiere et sa note.
const addMatiere = document.getElementById("matiere");
const addNote = document.getElementById("note");
const addButton = document.getElementById("boutonAjouter");

let matiereNoteData = {};

// let selectedRow = null;

function getMatiereNoteFormData(){
    matiereNoteData["matiere"] = addMatiere.options[addMatiere.selectedIndex].text;
    matiereNoteData["note"] = addNote.value;
    // il faudra rajouter un control supplementaire de valeur
    
}

//cette dfonction doit etre amelioree
function resetMatiereNoteFormData() {
   addMatiere.value = "";
    addNote.value = "";
    selectedRow = null;
}

addButton.addEventListener('click',(event)=>{
    event.preventDefault();
    event.stopPropagation();
    getMatiereNoteFormData();
    let tableMatiereNoteOne = document.getElementById("matiere-note-1").getElementsByTagName("tbody")[0];
    let newRow = tableMatiereNoteOne.insertRow(tableMatiereNoteOne.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = matiereNoteData.matiere;
    cell1.classList.add("text-center");
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = matiereNoteData.note;
    cell2.classList.add("text-center");
    cell3 = newRow.insertCell(2);   
    cell3.innerHTML = `<ul class="list-inline m-0">
                        <li class="list-inline-item">
                            <button class="btn btn-danger btn-sm rounded-0" type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete" id="btnDelete1"><i class="fa-solid fa-minus"></i></button>
                        </li>
                    </ul>`;
    cell3.classList.add("text-center"); 
    resetMatiereNoteFormData();
});

//Gestion des informations globales d'un étudiants

let studentData = {} // l'objet qui va contenir toutes les données d'un étudiant

const matriculeStudent = document.getElementById("matricule");
const nomStudent = document.getElementById("nom"); 
const prenomStudent = document.getElementById("prenom");
const bornStudent = document.getElementById("datenaissance");
const lieuNiassanceStudent = document.getElementById("lieunaissance");
const sexeStudent = document.getElementsByName("sexe");
const parcourStudent = document.getElementById("parcours");
const tailleStudent = document.getElementById("taille");
const poidStudent = document.getElementById("poids");

const saveButton = document.getElementById("saveBtn");

//function qui recupere la valeur de l'input radio
function getChoiceSexe(){
    for(let i = 0; i < sexeStudent.length; i++) {
        if(sexeStudent[i].checked){
            return sexeStudent[i].value;
        }
    }
}

function getStudentsInformationsFormData(){
    studentData["nom"] = nomStudent.value;
    studentData["prenom"] = prenomStudent.value;
    studentData["naissance"] = bornStudent.value;
    studentData["lieu"]= lieuNiassanceStudent.value;
    studentData["matricule"] = matriculeStudent.value;
    studentData["sexe"] = getChoiceSexe();
    studentData["parcours"] = parcourStudent.options[parcourStudent.selectedIndex].text;
    studentData["taille"] = tailleStudent.value;
    studentData["poids"] = poidStudent.value;
    studentData["matieresNotes"] = getMatiereNoteFormData();

}

//Enregistrer les informations d'un nouvel etudiant cree dans le tableau de la liste des etudiants
saveButton.addEventListener('click', (event) =>{
    event.preventDefault();
    event.stopPropagation();
    getStudentsInformationsFormData()
    let tableStudents = document.getElementById("table-students").getElementsByTagName("tbody")[0];
    let newRow = tableStudents.insertRow(tableStudents.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = studentData.matricule;
    cell1.classList.add("text-center");
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = studentData.nom;
    cell2.classList.add("text-center");
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = studentData.prenom;
    cell3.classList.add("text-center");
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = studentData.naissance;
    cell4.classList.add("text-center");  
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = studentData.lieu;
    cell5.classList.add("text-center");
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = studentData.sexe;
    cell6.classList.add("text-center");
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = studentData.parcours;
    cell8 = newRow.insertCell(7);
    cell8.classList.add("text-center");
    cell8.innerHTML = `<ul class="list-inline m-0">
                            <li class="list-inline-item">
                                <button class="btn btn-primary btn-sm rounded-0" id="fa-plus" type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Add"><i class="fa-solid fa-plus"></i></button>
                            </li>
                            <li class="list-inline-item">
                                <button class="btn btn-success btn-sm rounded-0" id="fa-edit" type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><i class="fa fa-edit"></i></button>
                            </li>
                            <li class="list-inline-item">
                                <button class="btn btn-info btn-sm rounded-0" id="fa-view" type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="View"><i class="fa-solid fa-eye"></i></button>
                            </li>
                            <li class="list-inline-item">
                                <button class="btn btn-danger btn-sm rounded-0" type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><i class="fa-solid fa-minus"></i></button>
                            </li>
                        </ul>`;
});


//FUnction pour sauvegarder les données de l'étudiant dans le local storage
function saveStudentsInfo(data){
    //code
   
}



