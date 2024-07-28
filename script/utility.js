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

function setBackGroundColorById(elementId){
    const element = document.getElementById(elementId)
    element.classList.add('bg-green-500')
}

function removeBackGroundColorById(elementId){
    const element = document.getElementById(elementId)
    element.classList.remove('bg-green-500')
}