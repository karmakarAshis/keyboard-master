function hideElementById(elementId){
    const element = document.getElementById(elementId)
    element.classList.add('hidden')
}
function showElementById(elementId){
    const element = document.getElementById(elementId)
    element.classList.remove('hidden')
}

function getARandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz'
    const alphabets = alphabetString.split('')
    
    const randomNum = Math.random()*25
    const index = Math.round(randomNum)
    
    const alphabet = alphabets[index]

    return alphabet
}

function getTextElementValueById(elementId){
    const element = document.getElementById(elementId)
    const elementValueText = element.innerText
    const value = parseInt(elementValueText)
    return value
}

function setTextElementValueById(elementId,value){
    const element = document.getElementById(elementId)
    element.innerText = value
}

function getElementTextById(elementId){
    const element = document.getElementById(elementId)
    const text = element.innerText
    return text
}

function setBackGroundColorById(elementId){
    const element = document.getElementById(elementId)
    element.classList.add('bg-green-500')
}

function removeBackGroundColorById(elementId){
    const element = document.getElementById(elementId)
    element.classList.remove('bg-green-500')
}

