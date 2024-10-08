function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.getElementById("modal-form");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalConfirm = document.getElementById("modal-confirm")

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
    hideError(champNom)
    return true
  }
  
 showerror(champNom , "Le nom doit contenir au moins 2 caractères")
  return false

}

//pour valider le prénom

function validerPrenom(prenom , champPrenom) {
  
  if (prenom.length >= 2) {
    hideError(champPrenom)
    return true
  }
  showerror(champPrenom , "le prénom doit contenir au moins 2 caractères")
  return false
}

//pour valider mail

function validerMail (email, champEmail) {
  
  let emailRegex = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+")
  if (emailRegex.test(email)) {
    hideError(champEmail)
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
    hideError(champNbrTournoi)
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
      hideError(champVille)
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
  hideError(champCondition)
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
    hideError(champBirthdate)
    return true
  }
  showerror(champBirthdate, "Vous devez entrer une date de naissance valide")
  return false


}


// pour afficher les messages d'erreur
function showerror (element , message) {

  let inputParent = element.closest(".formData")

   inputParent.setAttribute("data-error", message)
   inputParent.setAttribute("data-error-visible", "true")

}
//pour effacer les messages d'erreur

function hideError (element) {

  let inputParent = element.closest(".formData")

  inputParent.removeAttribute("data-error")
  inputParent.removeAttribute("data-error-visible")
}


//pour afficher fenetre de confirmation

function showConfirm () {

  
  let modalHeight = modalbg.querySelector('.content').offsetHeight

  modalbg.style.display = "none"
  modalConfirm.style.display = "flex"


  modalConfirm.querySelector('.content').style.height = modalHeight + 'px'



  let closeCross = document.getElementById("close-confirm")
  let closebtn = document.getElementById("close-confirm-btn")

  closeCross.addEventListener ("click" , () => {
    modalConfirm.style.display = "none"
  } )

  closebtn.addEventListener ("click" , () => {
    modalConfirm.style.display= "none"
  })
}


//fonction de controle de validation des champs avant submit
function validate() {
 


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
  showConfirm()
return true
} else {
  console.log("erreur")
  return false
}

}

//function afficherFenetre () {
 // let fenetre = document.createElement("div")
 // fenetre.innerHTML = `
//  <p>Inscription validée</p>
 // <button id= "close-btn">fermer</button>
  //`

//}



//empeche le rechargement de la page quand le formulaire est submit
let submitForm = document.querySelector("form")

submitForm.addEventListener("submit", (event) => {
  event.preventDefault()
  validate()
    //afficherfenetre()
  //}
 
})
