
// Create a "close" button and append it to each list item
let myNodeList = document.getElementsByTagName("LI");
for (let i = 0; i < myNodeList.length; i++) {
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodeList[i].appendChild(span);
}

let close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        let div = this.parentElement;
        remove(div)
    }
}

function remove(el) {
    let element = el;
    element.remove()
}

function newElement() {
    let input = document.createElement("input");
    input.setAttribute("type", "text")
    input.setAttribute("name", "task")
    input.setAttribute("class", "form-control")
    document.getElementById("myUL").appendChild(input);

}




