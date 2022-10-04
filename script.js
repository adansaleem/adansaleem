//============preloader===========
let preloader = document.getElementById("preloader");
window.addEventListener("load",function(){
    preloader.style.display="none";
});
// =========menu========
let navlink = document.getElementById("navlink");

closeMenu = () => {
    navlink.style.right = "-300px";
}

openMenu = () => {
    navlink.style.right = "0";
}
//=====================auto text ================
const text = document.querySelector(".second-text");
const loadText = ()=>{
    setTimeout(()=>{
        text.textContent = "Frontend web developer";
    },0);
}
loadText();
// ===============portfolio===============
let portfolio = document.getElementById("portfolio-box");

function loadMore(){
    portfolio.style.display = "block";

}

  const scriptURL = 'https://script.google.com/macros/s/AKfycbxFUfaqbRqxGdOZvhvSPnmhkCz0ZomWb-823PE2uBvqaX4QTjr4Y3SC5IZGqRZScXHx/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })
  //====================contact us========================
//   let submit = document.getElementById("submit");
  function submitbtn(){
    alert("Message sent successfully");
  }