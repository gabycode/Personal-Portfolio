const textDisplay = document.getElementById("desc")
const phrases = ['front-end developer.', 'css lover.', 'website designer']
i = 0
j = 0
let currentPhrase = ['']
let isDeleting = false
let isEnd = false

function loop() {
  isEnd = false
  textDisplay.innerHTML = currentPhrase.join('')
 
  if ( i < phrases.length) {
    
    if (!isDeleting && j < phrases[i].length) {
      currentPhrase.push(phrases[i][j])
      j++
      textDisplay.innerHTML = currentPhrase.join('')
    }
    
    if ( isDeleting && j <= phrases[i].length){
      currentPhrase.pop(phrases[i][j])
      j--
      textDisplay.innerHTML = currentPhrase.join('')
    }
    
    if ( j == phrases[i].length) {
      isDeleting = true
    }
    
    if ( isDeleting && j === 0 ) {
      currentPhrase = []
      isDeleting = false
      i++
      if ( i == phrases.length) {
        i = 0
      }
    }
  }
  const spedUp = Math.random() * (150 - 100) + 100
  const normalSpeed = Math.random() * ( 300 - 200 ) + 200
  const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed 
  
  setTimeout( loop, time)
}

loop()