//your JS code here. If required.
const submitButton = document.querySelector("#submit");
const bookList = document.getElementById("book-list");

submitButton.addEventListener("click",addBook);

function addBook(){
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const isbn = document.getElementById("isbn").value;

    // create new row
    const newRow=document.createElement("tr");
    newRow.innerHTML=`
    <td>${title}</td>
    <td>${author}</td>
    <td>${isbn}</td>
    <td><button class="delete">Clear</button></td>
    `;

    //Add the row
    bookList.append(newRow);

    //Delete
    const deleteButton=newRow.querySelector(".delete");
    deleteButton.addEventListener("click", ()=>{
        newRow.remove();
    });
    
    //clear input fields
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
}
