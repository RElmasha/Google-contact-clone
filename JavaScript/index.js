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