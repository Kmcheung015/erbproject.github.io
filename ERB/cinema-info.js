//add class to change the star color
const btns = document.querySelectorAll('.sbtn');
btns.forEach(btn => btn.addEventListener('click', () => {
    btn.classList.toggle('active');
})
);

//on click event,add class show to display a popup box.
const link = document.querySelectorAll('.link');
const popup = document.querySelector(".p-container");
const closeBtn = document.querySelector('#closeBtn');
link.forEach(btn => btn.addEventListener('click', () => {
    popup.classList.toggle("show");
})
);
closeBtn.addEventListener('click', (e) => {
    popup.classList.remove("show");
}); 

//display a rate form, and change the bg color .
const btn = document.querySelector("button");
const block = document.querySelector(".rate-container");
const post = document.querySelector(".post");
const widget = document.querySelector(".star-widget");
const editbtn = document.querySelector(".edit");
widget.onclick = () => {
    block.style.background = "black";
    block.style.border="1px solid #eee";
}
btn.onclick = () =>{
    widget.style.display = "none";
    post.style.display = "block";
    editbtn.onclick = () =>{
        widget.style.display = "block";
        post.style.display = "none";
    }
    return false;
} 

