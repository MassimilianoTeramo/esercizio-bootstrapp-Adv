let bookMark = document.querySelectorAll(".bi-bookmark")
let bookMark1 = document.querySelectorAll(".bi-bookmark-fill")
console.log (bookMark)

for (let i=0; i<bookMark.length; i++){

        let newBookmark=bookMark[i]
       newBookmark.addEventListener("mouseover", animation);
        
        console.log(newBookmark)
    }

function animation (bookMark1){
    console.log (bookMark1.length)
    for (let i=0; i<bookMark1.length; i++){
    console.log (bookMark1)
        bookMark1[i].classList.toggle("newClass")
        
        
       } }
