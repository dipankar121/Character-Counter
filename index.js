const textAreaEl = document.getElementById("textarea");
const totalCounterEl = document.getElementById("total-character");
const remCounterEl = document.getElementById("rem-character");
const totalWordsEl = document.getElementById("total-words");

//To track the number of words we need a eventlistener
textAreaEl.addEventListener("keyup", ()=>{
    updateCounter();
})

//When user visits, first thing to execute is-----
updateCounter();

function updateCounter(){
    totalCounterEl.innerText = textAreaEl.value.length;
    remCounterEl.innerText = textAreaEl.getAttribute("maxlength") - textAreaEl.value.length;
    totalWordsEl.innerText = textAreaEl.value.match(/\w+/g).length; //From Technical Thapa

}