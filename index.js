function get(id) {
    return document.getElementById(id)
}
const app = get("app");
const header = get("header")
const content = get("content")
const cliq = document.querySelector("input[type=button]")

fetch("https://api.blablagues.net/?rub=blagues")
.then((res)=> res.json())
.then((data)=> {
    header.textContent = data.data.content.text_head;
    cliq.addEventListener('click',()=>{
        content.style.visibility = "visible";
        content.textContent = data.data.content.text !== ""
        ?data.data.content.text : data.data.content.text_hidden;
    })
})