//modal-cv

const modalContainerCv = document.querySelector(".modal-container-cv");
const modalTriggersCv = document.querySelectorAll(".modal-trigger-cv");
modalTriggersCv.forEach(triggerCv => triggerCv.addEventListener("click", toggleModalCv))
function toggleModalCv(){
    modalContainerCv.classList.toggle("active-cv")
}


//modal-cc

const modalContainerCc = document.querySelector(".modal-container-cc");
const modalTriggersCc = document.querySelectorAll(".modal-trigger-cc");
modalTriggersCc.forEach(triggercc => triggercc.addEventListener("click", toggleModalCc))
function toggleModalCc(){
    modalContainerCc.classList.toggle("active-cc")
}

//modal-dec

const modalContainerDec = document.querySelector(".modal-container-dec");
const modalTriggersDec = document.querySelectorAll(".modal-trigger-dec");
modalTriggersDec.forEach(triggerdec => triggerdec.addEventListener("click", toggleModaldec))
function toggleModaldec(){
    modalContainerDec.classList.toggle("active-dec")
}
