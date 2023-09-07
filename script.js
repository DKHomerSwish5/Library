const addBtn = document.querySelector('.add-btn');
const modal = document.getElementById("myModal");
const myLibrary = [];


addBtn.addEventListener("click", bookModal);
window.addEventListener("click", closeModal);
function bookModal(){
    modal.style.display = "block";
}
function closeModal(event){
    if (event.target == modal) {
        modal.style.display = "none";
      }
}
function Book(){

}

function addBookToLibrary(){
    
}