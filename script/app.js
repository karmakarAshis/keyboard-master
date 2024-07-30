
function continueGame() {
    const alphabet = getARandomAlphabet()

    const currentAlphabetElement = document.getElementById('current-alphabet')
    currentAlphabetElement.innerText = alphabet

    setBackGroundColorById(alphabet)
}

function handleKeyboardButtonPressed(event) {
    const playerPressed = event.key
    // stop game if Escape pressed
    if(playerPressed === "Escape"){
        gameOver()
    }
    // get the expected pressed key
    const currentAlphabetElement = document.getElementById('current-alphabet')
    const currentAlphabet = currentAlphabetElement.innerText
    const expectedAlphabet = currentAlphabet.toLowerCase()

    // check matched or not
    if (playerPressed === expectedAlphabet) {
        // console.log('you get a point');

        const currentScore = getTextElementValueById('current-score')
        const newScore = currentScore + 1
        setTextElementValueById('current-score', newScore)

        // const currentScoreElement = document.getElementById('current-score')
        // const currentScoreText = currentScoreElement.innerText
        // const currentScore = parseInt(currentScoreText)

        // const newScore = currentScore + 1
        // currentScoreElement.innerText = newScore



        removeBackGroundColorById(expectedAlphabet)
        continueGame()
    } else {

        const currentLife = getTextElementValueById('current-life')
        const updatedLife = currentLife - 1
        setTextElementValueById('current-life', updatedLife)

        if (updatedLife === 0) {
            gameOver()
        }


        // const currentLifeElement = document.getElementById('current-life')
        // const currentLifeText = currentLifeElement.innerText
        // const currentLife = parseInt(currentLifeText)

        // const newLife = currentLife - 1
        // currentLifeElement.innerText = newLife
    }
}
document.addEventListener('keyup', handleKeyboardButtonPressed)


function play() {
    hideElementById('home-screen')
    hideElementById('final-score')
    showElementById('play-ground-screen')

    const life = 5
    const score = 0
    setTextElementValueById('current-score', score)
    setTextElementValueById('current-life', life)

    continueGame()
}

function gameOver() {

    hideElementById('play-ground-screen')
    showElementById('final-score')

    const lastScore = getTextElementValueById('current-score')
    setTextElementValueById('game-final-score', lastScore)

    const currentAlphabet = getElementTextById('current-alphabet')
    removeBackGroundColorById(currentAlphabet)

}