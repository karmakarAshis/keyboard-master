// function play() {
//     //step-1 hide home screen ;to hide add hidden class to the home screen

//     const homeSection = document.getElementById('home-screen')
//     homeSection.classList.add('hidden')

//     //step-2  show the play ground
//     const playGroundSection = document.getElementById('play-ground')
//     playGroundSection.classList.remove('hidden')



// }

function continueGame(){
    const alphabet = getARandomAlphabet()
    
    const currentAlphabetElement = document.getElementById('current-alphabet')
    currentAlphabetElement.innerText=alphabet

    setBackGroundColorById(alphabet)
}

function play() {
    hideElementById('home-screen')
    showElementById('play-ground-screen')
    continueGame() 
}
