const buttonBerger = document.getElementById("buttonBerger")
let count = 0;
const counter = document.getElementById("count")

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


const disable = document.getElementById("not")
disable.addEventListener("click", () => {
   exitLabelle()
})


function ajouterContact() {
   // créer un counter de repertoire
   counter.innerHTML = `( ${++count} )`
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
      if (rowData[5].innerText === telephone) {
         // Si le contact existe déjà, informer l'utilisateur
         alert("Le contact existe déjà !");
         return; // Arrêter la fonction
      }
   }

   // Créer un nouvel élément de ligne <tr> pour le contact avec 2 boutons
   const newRow = document.createElement("tr");
   const buttonModify = document.createElement("button");
   const buttonDelet = document.createElement("button");

   // Créer un id pour chaque bouton
   buttonModify.setAttribute("id", "modify")
   buttonDelet.setAttribute("id", "delet")
   newRow.setAttribute("id", "row")
   // Remplir la ligne avec les données du contact
   newRow.innerHTML = `
        <td>${prenom}</td>
        <td>${nom}</td>
        <td>${entreprise}</td>
        <td>${fonction}</td>
        <td>${email}</td>
        <td>${telephone}</td>
        
    `;
   buttonModify.innerText = "Modifier"
   buttonDelet.innerText = "Supprimer"
   // Ajouter la nouvelle ligne à la table contactList
   newRow.appendChild(buttonModify);
   newRow.appendChild(buttonDelet);
   contactList.appendChild(newRow);

   // style du bouton
   const modify = document.getElementById("modify");
   const delet = document.getElementById("delet");
   modify.style.boxShadow = "none";
   delet.style.boxShadow = "none";

   // Réinitialiser les valeurs des champs du formulaire
   document.getElementById("prenom").value = "";
   document.getElementById("nom").value = "";
   document.getElementById("entreprise").value = "";
   document.getElementById("fonction").value = "";
   document.getElementById("email").value = "";
   document.getElementById("tel").value = "";
   document.getElementById("anniversaire").value = "";
   document.getElementById("note").value = "";

   // Event


   delet.addEventListener("click", () => {
      const row = document.getElementById("row")
      row.remove()
   })

   modify.addEventListener("click", () => {
      const row = document.getElementById("row")
      row.inputMode
   })

}


document.getElementById("submit").addEventListener("click",
   function (event) {
      event.preventDefault(); // Empêcher le rechargement de la page
      ajouterContact();
      document.getElementById("addContact").style.display = "none";
      document.getElementById("contactList").style.display = "flex";

   })

// libellée
document.getElementById('save').addEventListener('click', function () {
   // Get the value from the input field
   const newLabel = document.getElementById('addlibelle').value;


   // Check if the input is not empty
   if (newLabel.trim() !== "") {
      // Create a svg element

      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
      svg.setAttribute('width', '16')
      svg.setAttribute('height', '16')
      svg.setAttribute('fill', 'currentColor')
      svg.setAttribute('class', 'bi bi-caret-right-fill')
      svg.setAttribute('viewBox', '0 0 16 16')

      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', 'm12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z')
      svg.appendChild(path)

      // Create a new div element for the label
      const labelDiv = document.createElement('div');
      labelDiv.className = 'label-item';
      labelDiv.appendChild(svg)
      labelDiv.appendChild(document.createTextNode(" " + newLabel))

      // style
      labelDiv.style.marginLeft = "2rem";

      // Append the new label to the labelList div
      document.getElementById('labelList').appendChild(labelDiv);

      // reset the input aeria
      document.getElementById('addlibelle').value = "";
   } else {
      alert("Le libellé ne peut pas être vide.");
   }
});


// addMail
addMail.addEventListener("click", function () {
   const addSeconEmail = document.getElementById("addSecondEmail")
   const addMail = document.createElement('input');
   addMail.setAttribute('type', 'email')
   addMail.setAttribute('id', 'email')
   addMail.setAttribute('name', 'email')
   addMail.setAttribute('placeholder', 'Nouvelle adresse email');
   // Ajoutez un saut de ligne pour la mise en forme 
   const br = document.createElement('br');
   // Ajoutez le nouvel input et le saut de ligne au conteneur 
   addSeconEmail.appendChild(addMail)
   addSeconEmail.appendChild(br)
});

