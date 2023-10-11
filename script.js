const addBtn = document.querySelector('.add-btn');
const remBtn = document.querySelector('.remove-btn');
const submitBtn = document.querySelector('.submit-btn');
const modal = document.getElementById("myModal");
const form = document.getElementById("input-form");

let myLibrary = [];
addBtn.addEventListener("click", bookModal);
remBtn.addEventListener("click", deleteBook);
submitBtn.addEventListener("click", addBookToLibrary);
window.addEventListener("click", closeModal);
function bookModal(){
    modal.style.display = "block";
}
function closeModal(event){
    if (event.target == modal) {
        modal.style.display = "none";
    }
    return
}
function deleteBook(event){
    
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
    createCard(addedBook);
    console.log(myLibrary);
    modal.style.display = "none";
    form.reset();
    return
}
function createCard(addedBook){
    const cardDiv = document.createElement('div');
    cardDiv.className = "card";
    const titleP = document.createElement('p');
    titleP.className = "title";
    const authorP = document.createElement('p');
    authorP.className = "author";
    const pagesP = document.createElement('p');
    pagesP.className = "pages";
    const readBtn = document.createElement('button');
    readBtn.className = "read-btn";
    readBtn.textContent = "Read";
    const removeBtn = document.createElement('button');
    removeBtn.className = "remove-btn";
    removeBtn.textContent = "Remove";
    
    for (let key in addedBook){
        if(addedBook.hasOwnProperty(key)){
            const value = addedBook[key];
            if(key === 'title'){
                titleP.textContent = `${value}`;
            }
            else if(key === 'author'){
                authorP.textContent = `${value}`;
            }
            else if(key === 'pages'){
                pagesP.textContent = `${value}`;
            }
        }
    }

    
    const parentDiv = document.querySelector('.card-grid');
    parentDiv.appendChild(cardDiv);
    cardDiv.appendChild(titleP);
    cardDiv.appendChild(authorP);
    cardDiv.appendChild(pagesP);
    cardDiv.appendChild(readBtn);
    cardDiv.appendChild(removeBtn);

    return
}