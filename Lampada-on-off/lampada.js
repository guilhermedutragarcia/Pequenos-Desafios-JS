var img = document.getElementById('lamp2')

function setaquebrada(){
    return img.src.indexOf('quebrada3') > -1
}
function ligar(){
    if(!setaquebrada()){
        img.src = './ligada2.jpg'
        document.body.style.backgroundColor='#fffd5a'
        document.getElementById('titulo').style.color ='black'
    }    
}
function desligar(){
    if(!setaquebrada()){
        img.src = './desligada2.jpg'
        document.body.style.backgroundColor='black'
        document.getElementById('titulo').style.color ='#fffd5a'
    }    
}
function quebrado(){
    img.src = './quebrada3.jpg'
    document.body.style.backgroundColor='black'
}
img.addEventListener("mouseover", ligar)
img.addEventListener("mouseout", desligar)
img.addEventListener('dblclick',quebrado)
