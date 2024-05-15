const buttonBerger = document.getElementById("buttonBerger")

function toggleSideBar() {
   const sidebar = document.getElementById("sidebar")
   if (sidebar.style.display === "none") {
      sidebar.style.display = "block";
      document.getElementsByTagName("main").style.display = "inline";
   } else {

      sidebar.style.display = "none";
   }
}


buttonBerger.addEventListener("click", toggleSideBar)

const AddContacts = document.getElementById("add")
AddContacts.addEventListener("click", function () {
   document.getElementById("contactList").style.display = "none";
   document.getElementById("addContact").style.display = "block";
})

const showContactsList = document.getElementById("showContactList")
showContactsList.addEventListener("click", function () {
   document.getElementById("addContact").style.display = "none";
   document.getElementById("contactList").style.display = "flex";
})


function showPopupForm() {
   document.getElementById("popup-form-container").style.display = "flex";
}

function hidePopupForm() {
   document.getElementById("popup-form-container").style.display = "none";
}


const popup = document.getElementById('show-popup').addEventListener('click', () => {
   showPopupForm();
});

document.addEventListener('keydown', (event) => {
   if (event.key === 'Escape')
      hidePopupForm()
});


function exitLabelle() {
   const libelle = document.getElementById("popup-form-container")
   libelle.style.display = "none"

}

function addLibelle() {

}

const disable = document.getElementById("not")
disable.addEventListener("click", () => {
   exitLabelle()
})


function ajouterContact() {
   // Récupérer les valeurs des champs du formulaire
   const prenom = document.getElementById("prenom").value;
   const nom = document.getElementById("nom").value;
   const entreprise = document.getElementById("entreprise").value;
   const fonction = document.getElementById("fonction").value;
   const email = document.getElementById("email").value;
   const telephone = document.getElementById("tel").value;
   const anniversaire = document.getElementById("anniversaire").value;
   const note = document.getElementById("note").value;

   // Vérifier si le contact existe déjà dans le tableau
   const contactList = document.getElementById("contactTable").getElementsByTagName("tbody")[0];
   const rows = contactList.getElementsByTagName("tr");

   for (let i = 0; i < rows.length; i++) {
      const rowData = rows[i].getElementsByTagName("td");
      if (rowData[0].innerText === prenom &&
         rowData[1].innerText === nom &&
         rowData[2].innerText === entreprise &&
         rowData[3].innerText === fonction &&
         rowData[4].innerText === email &&
         rowData[5].innerText === telephone &&
         rowData[6].innerText === anniversaire &&
         rowData[7].innerText === note) {
         // Si le contact existe déjà, informer l'utilisateur
         alert("Le contact existe déjà !");
         return; // Arrêter la fonction
      }
   }

   // Créer un nouvel élément de ligne <tr> pour le contact
   const newRow = document.createElement("tr");

   // Remplir la ligne avec les données du contact
   newRow.innerHTML = `
        <td>${prenom}</td>
        <td>${nom}</td>
        <td>${entreprise}</td>
        <td>${fonction}</td>
        <td>${email}</td>
        <td>${telephone}</td>
        <td>${anniversaire}</td>
        <td>${note}</td>
    `;

   // Ajouter la nouvelle ligne à la table contactList
   contactList.appendChild(newRow);

   // Réinitialiser les valeurs des champs du formulaire
   document.getElementById("prenom").value = "";
   document.getElementById("nom").value = "";
   document.getElementById("entreprise").value = "";
   document.getElementById("fonction").value = "";
   document.getElementById("email").value = "";
   document.getElementById("tel").value = "";
   document.getElementById("anniversaire").value = "";
   document.getElementById("note").value = "";
}


document.getElementById("submit").addEventListener("click",
   function (event) {
      event.preventDefault(); // Empêcher le rechargement de la page
      ajouterContact();

      document.getElementById("addContact").style.display = "none";
      document.getElementById("contactList").style.display = "flex";
   })



/**
** count
**/


const a = document.getElementById("contactTable");
const b = document.getAnimations("count ");
for (let index = 0; index < a.length; index++) {
   b.innerHTML = a[index];

}

