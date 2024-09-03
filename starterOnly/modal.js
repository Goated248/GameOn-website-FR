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

function validerNom(nom) {
  console.log(nom)
  if (nom.length >= 2) {
    return true
  }
  console.log("nom invalide")
  return false

}

//pour valider le prénom

function validerPrenom(prenom) {
  console.log(prenom)
  if (prenom.length >= 2) {
    return true
  }
  console.log("prenom invalide")
  return false
}

//pour valider mail

function validerMail (email) {
  console.log(email)
  let emailRegex = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+")
  if (emailRegex.test(email)) {
    return true
  }
  console.log("email invalide")
  return false
}

//pour valider le nombre de tournoi du participant

function validerNbrTournoi (nbrTournoi) {
  console.log(nbrTournoi)
if(nbrTournoi.trim()=== '') {

  console.log("nombre de tournoi : le champs est vide")
  return false 
}

  if (!isNaN(nbrTournoi)) {
    return true
  }
  console.log("nombre de tournoi invalide")
  return false
}

//pour valider si un ville est séléctionnée

function validerVilleTournoi () {
  
  let btnVille = document.querySelectorAll('input[type="radio"]');
  for (let i = 0; i < btnVille.length; i++) {
    if (btnVille[i].checked) {
      console.log(btnVille)
      return true;
    }
  }
  console.log("case non coché")
  return false;
}

//pour verifier que les conditions d'utilisation sont cochées

function validerConditions() {
let condition = document.getElementById("checkbox1")
 return condition.checked 

}
//pour verifier si une date est remplie et au bon format

function validerBirthdate(birthdate){
  console.log(birthdate)
  if( birthdate === "") {
    console.log("la date est vide")
    return  false
  }
  let dateActuelle = new Date ()
  let birthdateClient = new Date (birthdate) 
  
  if (dateActuelle >=birthdateClient) {
    return true
  }
  console.log("la date est invalide")
  return false


}


//fonction de control de validation des champs avant submit
function validate() {
    
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


let nomValid = validerNom(nom)
let prenomValid = validerPrenom(prenom)
let emailValid = validerMail(email)
let nbrTournoiValid = validerNbrTournoi(nbrTournoi)
let villeValid = validerVilleTournoi()
let conditionValid = validerConditions()
let birthdateValid = validerBirthdate(birthdate)

console.log(nomValid)
console.log(prenomValid)
console.log(emailValid)
console.log(nbrTournoiValid)
console.log(villeValid)
console.log(conditionValid)
console.log(birthdateValid)

if (validerNom (nom)&& 

validerPrenom(prenom)&&

validerMail (email)&&

validerBirthdate(birthdate)&&

validerNbrTournoi (nbrTournoi)&&

validerVilleTournoi ()&&

validerConditions()
) {
  console.log("validé")
return true
} else {
  console.log("erreur")
  return false
}

}

function envoyerFormulaire () {
if (validate()) {
  return true
} else {
  return false
}

  }


//empeche le rechargement de la page quand le formulaire est submit
let submitForm = document.querySelector("form")

submitForm.addEventListener("submit", (event) => {
  event.preventDefault()
})
