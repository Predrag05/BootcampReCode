/// Исписати програм који на задат број N исписује да ли је број дељив са 3 а ако није онда исписати да број није дељив са 3

let N = 6

switch(N % 3){
    case 1:
    case 2:
        console.log("Број није дељив са 3")
        break
    case 0:
        console.log("Број је дељив са 3")
        break
    default:
        console.log("Није добар унос")
        break
}