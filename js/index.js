document.addEventListener("DOMContentLoaded", function() {
let bookData
fetch(" http://localhost:3000/books")
.then(response => response.json())
.then(books => {
    bookData = books
    updateBookTitles(books)
})


const updateBookTitles = (book) => {
    book.forEach(item =>{
    const ul = document.getElementById("list")
    const li = document.createElement("li")
    li.innerText = item.title
    ul.appendChild(li)

    li.addEventListener("click",() =>{
        // console.log(item)
          updateFullDetails(item)
    })
})
}


const updateFullDetails = (details) => {
    const div = document.getElementById("show-panel")
    const image = document.createElement("img")
    image.src= details.img_url
    const h2 = document.createElement("h2")
    h2.innerText = details.title    
    const h3 = document.createElement("h3")
    h3.innerText = details.subtitle
    const h4 = document.createElement("h4")
    h4.innerText = details.author
    const p = document.createElement("p")
    p.innerText = details.description
    const ul = document.createElement("ul")
    const li = document.createElement("li")
    li.innerText = " "
    const button = document.createElement("button")
    button.innerText = " Likes "
    ul.appendChild(li)
    ul.appendChild(button)


    button.addEventListener("click", () => {
       fetch("http://localhost:3000/users")
    .then(response => response.json())
    .then(data => {
     data.forEach(user => {
     li.innerText = user.username;

     })

    })
    })
 

    div.appendChild(image)
    div.appendChild(h2)
    div.appendChild(h3)
    div.appendChild(h4)
    div.appendChild(p)
    div.appendChild(ul)

}


// function updateUser() {
//     fetch("http://localhost:3000/users")
//     .then(response => response.json())
//     .then(data => {
//      data.forEach(user => {
//      li.innerText = user.username;

//      })

//     })

// }



});
