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

//const array = document.querySelector("tbody");
//document.getElementById("contactLength").innerHTML = array.length



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


function creatContact() {
   const prenomValue = document.getElementById("prenom").value;
   const nomValue = document.getElementById("nom").value;
   const entrepriseValue = document.getElementById("entreprise").value;
   const fonctionValue = document.getElementById("fonction").value;
   const emailValue = document.getElementById("email").value
   const telValue = document.getElementById("tel").value;


   const contactListTable = []
   const object =
   {
      prenom: prenomValue,
      Nom: nomValue,
      Entreprise: entrepriseValue,
      Fonction: fonctionValue,
      email: emailValue,
      tel: telValue

   }
   contactListTable.push(object)
   contactAdded.append(contactListTable)

   // let object = books.find(
   //    function (book) {

   //       return book => book.title == title
   //    });

   // if (object) {
   //    return object
   // }

   // else {
   //    object = { title, author, publicationYear, isCheckedOut: false }
   //    books.push(object)

   //    return object

}

/**   
 * * Table start here
 * */
function generate_table() {
   /**
 * * get the reference for the body
 * */
   const body = document.getElementsByTagName("body")[0];

   /**
    ** creates a <table> element and a <tbody> element
   **/

   const tbl = document.createElement("table");
   const tblBody = document.createElement("tbody");

   // creating all cells
   for (let i = 0; i < 2; i++) {
      // creates a table row
      const row = document.createElement("tr");

      for (var j = 0; j < 2; j++) {
         /**
    ** Create a <td> element and a text node, make the text
** node the contents of the <td>, and put the <td> at
** the end of the table row
   **/
         const cell = document.createElement("td");
         const cellText = document.createTextNode(
            "cell in row " + i + ", column " + j,
         );
         cell.appendChild(cellText);
         row.appendChild(cell);
      }

      /**
       * *add the row to the end of the table body
       * */

      tblBody.appendChild(row);
   }

   /**
       * * put the <tbody> in the <table>
       * */

   tbl.appendChild(tblBody);

   /**
    * * appends <table> into <body> named contactList
    * * appends <table> into <body> named contactList
    */

   body.appendChild(tbl);

   // sets the border attribute of tbl to 2;
   tbl.setAttribute("border", "2");
}

const button = document.getElementById("submit")
const list = document.getElementById("contactList")
list = button.value
