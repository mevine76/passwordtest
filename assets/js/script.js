// je declare mon element
const myInput = document.getElementById('myInput')
const myCounter = document.getElementById('myCounter')



myInput.addEventListener('input', function() {
// je déclare une variable total que j'initialise à zéro à chaque input
    let total = 0

    // je stock la valeur de l'input dans une variable
    let userPassword = myInput.value

    // je déclare les regex
    let regexMini = new RegExp('[a-z]')
    let regexNbr = new RegExp('[0-9]')
    let regexMaj = new RegExp('[A-Z]')
    let regexSpec = new RegExp('[@$?!]')
    
    
    // je teste toutes mes regex ce qui modifiera le score de total
    if(regexMini.test(userPassword)){
        total = total + 1
    }

    if(regexNbr.test(userPassword)){
        total = total + 1
    }

    if(regexMaj.test(userPassword)){
        total = total + 1
    }

    if(regexSpec.test(userPassword)){
        total = total + 1
    }

    if(userPassword.length <= 8){
        total = total -1
    }
        console.log(total)
    
    if(total <= 1) {
        console.log('faible')
    } else if(total == 2){
        console.log('modéré')
    } else if(total == 3){
        console.log('fort')
    } else if(total == 4){
        console.log('sécurisé')
        
    }
    })

    