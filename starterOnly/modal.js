function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";

  let btnClose = document.querySelector(".close");
  btnClose.addEventListener ("click" , () => {
    modalbg.style.display = "none";
  } )


}

// pour valider le nom

function validerNom(nom , champNom) {
 
  if (nom.length >= 2) {
    return true
  }
  
 showerror(champNom , "Le nom doit contenir au moins 2 caractères")
  return false

}

//pour valider le prénom

function validerPrenom(prenom , champPrenom) {
  
  if (prenom.length >= 2) {
    return true
  }
  showerror(champPrenom , "le prénom doit contenir au moins 2 caractères")
  return false
}

//pour valider mail

function validerMail (email, champEmail) {
  
  let emailRegex = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+")
  if (emailRegex.test(email)) {
    return true
  }
  showerror(champEmail , "L'email est invalide")
  return false
}

//pour valider le nombre de tournoi du participant

function validerNbrTournoi (nbrTournoi , champNbrTournoi) {
 
if(nbrTournoi.trim()=== '') {

  showerror(champNbrTournoi, "Ce champs doit être rempli")
  return false 
}

  if (!isNaN(nbrTournoi)) {
    return true
  }
  showerror(champNbrTournoi, "Le nombre doit être entre 0 et 99")
  return false
}

//pour valider si un ville est séléctionnée

function validerVilleTournoi () {
  
  let btnVille = document.querySelectorAll('input[type="radio"]');
  let champVille = btnVille[0].closest(".formData")
  for (let i = 0; i < btnVille.length; i++) {
    if (btnVille[i].checked) {
      
      return true;
    }
  }
  showerror(champVille , "Vous devez choisir une option")
  return false;
}

//pour verifier que les conditions d'utilisation sont cochées

function validerConditions() {
let condition = document.getElementById("checkbox1")
let champCondition = condition.closest(".formData")
 if(condition.checked) {
  return true
 } else {
  showerror(champCondition, "Vous devez accepter les conditions d'utilisations")
  return false
 }
}

//pour verifier si une date est remplie et au bon format

function validerBirthdate(birthdate ,champBirthdate){
  
  if( birthdate === "") {
    showerror(champBirthdate, "Vous devez entrer votre date de naissance")
    return  false
  }
  let dateActuelle = new Date ()
  let birthdateClient = new Date (birthdate) 
  
  if (dateActuelle >=birthdateClient) {
    return true
  }
  showerror(champBirthdate, "Vous devez entrer une date de naissance valide")
  return false


}


// pour gerer et afficher les messages d'erreur
function showerror (element , message) {

  let inputParent = element.closest(".formData")

  let existingError = inputParent.querySelector("span[data-error]")

  if(existingError) {
    return
  }
  
  
   let messageErreur = document.createElement("span")
   messageErreur.innerText = message
   messageErreur.setAttribute("data-error", message)
   messageErreur.setAttribute("data-error-visible", "true")



  inputParent.appendChild(messageErreur)

}

//fonction de controle de validation des champs avant submit
function validate() {
  //effacement des erreurs précédente éventuelle
 document.querySelectorAll(".formData span[data-error]").forEach(span => span.remove())   

 //récupération des elements html
let champPrenom = document.getElementById("first")
let prenom = champPrenom.value

let champNom = document.getElementById("last")
let nom = champNom.value

let champEmail = document.getElementById("email")
let email = champEmail.value

let champNbrTournoi = document.getElementById ("quantity")
let nbrTournoi= champNbrTournoi.value

let champBirthdate = document.getElementById("birthdate")
let birthdate = champBirthdate.value

//creation des variables avec résultats des fonctions de validations
let nomValid = validerNom(nom, champNom)
let prenomValid = validerPrenom(prenom, champPrenom)
let emailValid = validerMail(email , champEmail)
let nbrTournoiValid = validerNbrTournoi(nbrTournoi,champNbrTournoi)
let villeValid = validerVilleTournoi()
let conditionValid = validerConditions()
let birthdateValid = validerBirthdate(birthdate,champBirthdate)

//validation de la fonction selon resultat des validations
if (nomValid && prenomValid && emailValid && nbrTournoiValid && villeValid && conditionValid && birthdateValid){
  console.log("validé")
return true
} else {
  console.log("erreur")
  return false
}

}

//function envoyerFormulaire () {
//if (validate()) {
  //return true
//} else {
  //return false
//}
//}


//empeche le rechargement de la page quand le formulaire est submit
let submitForm = document.querySelector("form")

submitForm.addEventListener("submit", (event) => {
  event.preventDefault()
  //fonction validate
  //fonction envoyerForm
})
