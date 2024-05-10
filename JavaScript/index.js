
//   function closeBurger() {
//     document.getElementById("#add").style.marginLeft = "0%";
//     document.getElementById("#contactList").style.display = "none";
//     document.getElementById("#addContact").style.display = "inline-block";
// }

const buttonBerger = document.getElementById("buttonBerger")
buttonBerger.addEventListener("click", function () {
  document.getElementById("sidebar").style.display = "none";
  document.getElementById("contactList").style.marginLeft = "0%";
           document.getElementById("contactList").style.display = "flex";
           document.getElementById("contactList").style.width ="100%";
           document.getElementById("container").style.margin = "0%"
           document.getElementById("container").style.padding = "0%"
       })  

       const closeAddContact = document.getElementById("buttonBerger")
       closeAddContact.addEventListener("click", function () {
  document.getElementById("sidebar").style.display = "none";
  document.getElementById("contactList").style.display = "none";
  document.getElementById("addContact").style.marginLeft = "0%";
  document.getElementById("addContact").style.display = "block";
  document.getElementById("addContact").style.width ="100%";
                  })  

// function openBurger() {
//     document.getElementById("main").style.marginLeft = "25%";
//     document.getElementById("sidebar").style.width = "25%";
//     document.getElementById("sidebar").style.display = "block";
//     document.getElementById("openNav").style.display = 'none';
//   }




  const AddContacts = document.getElementById("add")
  AddContacts.addEventListener("click", function () {
       document.getElementById("contactList").style.display = "none";
    document.getElementById("addContact").style.display = "block";
       })
  
   const showContactsList = document.getElementById("showContactList")
   showContactsList.addEventListener("click", function () {
        document.getElementById("addContact").style.display = "none";
     document.getElementById("contactList").style.display= "flex";
        })