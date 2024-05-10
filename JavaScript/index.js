const buttonBerger = document.getElementById("buttonBerger")

function toggleSideBar() {
   const sidebar = document.getElementById("sidebar")
   if (sidebar.style.display === "none") {
      sidebar.style.display = "block";
      document.getElementById("content").style.display = "block";

      // document.getElementById("contactList").style.marginLeft = "20%";
      // document.getElementById("contactList").style.display = "flex";
      // document.getElementById("contactList").style.width = "80%";
   } else {

      sidebar.style.display = "none";
      // document.getElementById("contactList").style.marginLeft = "0%";
      // document.getElementById("contactList").style.display = "flex";
      // document.getElementById("contactList").style.width = "100%";
      // document.getElementById("container").style.margin = "0%"
      // document.getElementById("container").style.padding = "0%"
   }
}


buttonBerger.addEventListener("click", toggleSideBar)

//        const AddContact = document.getElementById("buttonBerger")
//        AddContact.addEventListener("click", function () {
//   document.getElementById("sidebar").style.display = "none";
//   document.getElementById("contactList").style.display = "none";
//   document.getElementById("addContact").style.marginLeft = "0%";
//   document.getElementById("addContact").style.display = "block";
//   document.getElementById("addContact").style.width ="100%";
//                   })  

// End function 






// function openSideBars()

// End function 



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