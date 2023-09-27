const addBtn = document.querySelector('.add-btn');
const remBtn = document.querySelector('.remove-btn');
const submitBtn = document.querySelector('.submit-btn');
const modal = document.getElementById("myModal");
const myLibrary = [];

addBtn.addEventListener("click", bookModal);
remBtn.addEventListener("click", updateBtn);
submitBtn.addEventListener("click", addBookToLibrary);
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

function addBookToLibrary(){
    let title = document.getElementById("Title").value;
    let author = document.getElementById("Author").value;
    let pages = document.getElementById("Pages").value;
    let read = document.getElementById("Checkbox").checked;
    function Book(title, author, pages, read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
    let addedBook = new Book(title, author, pages, read);
    myLibrary.push(addedBook);
    console.log(myLibrary);
    return
}