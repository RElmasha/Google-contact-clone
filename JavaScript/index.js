
//   function closeBurger() {
//     document.getElementById("#add").style.marginLeft = "0%";
//     document.getElementById("#contactList").style.display = "none";
//     document.getElementById("#addContact").style.display = "inline-block";
// }

// function openBurger() {
//     document.getElementById("main").style.marginLeft = "25%";
//     document.getElementById("sidebar").style.width = "25%";
//     document.getElementById("sidebar").style.display = "block";
//     document.getElementById("openNav").style.display = 'none';
//   }
  
  const AddContacts = document.getElementById("add")
  AddContacts.addEventListener("click", function () {
       document.getElementById("contactList").style.display = "none";
    document.getElementById("addContact").style.display = "flex";
       })
  
   const showContactsList = document.getElementById("showContactList")
   showContactsList.addEventListener("click", function () {
        document.getElementById("addContact").style.display = "none";
     document.getElementById("contactList").style.display= "flex";
        })