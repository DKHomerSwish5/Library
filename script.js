const addBtn = document.querySelector('.add-btn');
const remBtn = document.querySelector('.remove-btn');
const modal = document.getElementById("myModal");
const myLibrary = [];


addBtn.addEventListener("click", bookModal);
remBtn.addEventListener("click", updateBtn);
window.addEventListener("click", closeModal);
function bookModal(){
    modal.style.display = "block";
}
function closeModal(event){
    if (event.target == modal) {
        modal.style.display = "none";
      }
}
function updateBtn(event){
    
}
function Book(){

}

function addBookToLibrary(){
    
}