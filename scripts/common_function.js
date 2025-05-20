function setInnerText(id, value) {
   document.getElementById(id).innerText = value;
}

function getInnerText(id)
{
    document.getElementById(id).innerText;
}

function appendChild(id,childValue){
    const parent = document.getElementById(id);
    const p = document.createElement('p');
    p.innerText=childValue;
    parent.appendChild(p);
}