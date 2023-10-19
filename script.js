const addBtn = document.querySelector('.add-btn');
const modal = document.getElementById("myModal");
const form = document.getElementById("input-form");
const cardGrid = document.querySelector('.card-grid');

let myLibrary = [];
addBtn.addEventListener("click", bookModal);
window.addEventListener("click", closeModal);
form.addEventListener("submit",addBookToLibrary);

function bookModal(){
    modal.style.display = "block";
}
function closeModal(event){
    if (event.target == modal) {
        modal.style.display = "none";
    }
    return
}
function Book(title, author, pages, read){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
    return
}
function addBookToLibrary(event){
    event.preventDefault();
    let title = document.getElementById("Title");
    let author = document.getElementById("Author");
    let pages = document.getElementById("Pages");
    let read = document.getElementById("Checkbox");
    let addedBook = new Book(title.value, author.value, pages.value, read.checked);
    myLibrary.push(addedBook);
    modal.style.display = "none";
    bookCard(title, author, pages, read);
    form.reset();
    return
}
function bookCard(){
    cardGrid.innerHTML = '';
    myLibrary.forEach(book =>{
        const cardDiv = document.createElement('div');
        cardDiv.className = "card";
        const titleP = document.createElement('p');
        titleP.className = "title";
        titleP.textContent = `${book.title}`;
        const authorP = document.createElement('p');
        authorP.className = "author";
        authorP.textContent = `${book.author}`;
        const pagesP = document.createElement('p');
        pagesP.className = "pages";
        pagesP.textContent = `${book.pages}`;
        const readBtn = document.createElement('button');
        readBtn.className = "read-btn";
        if(book.read == true){
            readBtn.textContent = "Read";
        }
        else{
            readBtn.textContent = "Not Read";
            readBtn.style.backgroundColor = "red";
            readBtn.style.color = "black";
        }
        const removeBtn = document.createElement('button');
        removeBtn.className = "remove-btn";
        removeBtn.textContent = "Remove";
    
        cardGrid.appendChild(cardDiv);
        cardDiv.appendChild(titleP);
        cardDiv.appendChild(authorP);
        cardDiv.appendChild(pagesP);
        cardDiv.appendChild(readBtn);
        cardDiv.appendChild(removeBtn);

        removeBtn.addEventListener("click", ()=> {
            cardGrid.removeChild(cardDiv);
            myLibrary.splice(myLibrary.indexOf(book), 1);
        })
        readBtn.addEventListener("click", ()=>{
            if(book.read == false){
                readBtn.style.backgroundColor = "rgb(107, 41, 195)";
                readBtn.textContent = "Read";
                book.read = true;
            }
            else{
                readBtn.style.backgroundColor = "red";
                readBtn.style.color = "black";
                readBtn.textContent = "Not Read";
                book.read = false;
            }
        })
        readBtn.addEventListener("mouseenter", ()=>{
            if(book.read == false){
                readBtn.style.backgroundColor = "rgb(101, 32, 32)";
            }
            else{
                readBtn.style.backgroundColor = "rgb(70, 26, 127)";
            }
        })
        readBtn.addEventListener("mouseleave", ()=>{
            if(book.read == false){
                readBtn.style.backgroundColor = "red";
            }
            else{
                readBtn.style.backgroundColor = "rgb(107, 41, 195)";
            }
        })

    })
}