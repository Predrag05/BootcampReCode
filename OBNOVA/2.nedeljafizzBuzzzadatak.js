// За првих 100 бројева исписати:

// FizzBuzz ако је број дељив и са 3 и са 5
// Fizz ако је број дељив само са 3
// Buzz ако је број дељив само са 5
// Број ако није дељив ни са 3 ни са 5
// (1,2,Fizz,4,Buzz,...)


let N = 100
let f = "Fizz"
let b = "Buzz"
let fb = "Број је дељив са 3 и са 5"
let ne = "Број није дељив ни са три ни са пет"
let ft = "Број је дељив само са 3"
let bt = "Број је дељив само са 5"


for(let i = 1; i <= N; i++){
    
    if(i % 3 === 0 || i % 5 === 0){
        if(i % 3 === 0 && i % 5 === 0){
            console.log(i,fb, f+b)
            continue}
        if(i % 3 === 0 && i % 5 !== 0){
            console.log(i,ft,f)
            continue} 
        if(i % 5 === 0 && i % 3 !== 0){
            console.log(i,bt,b)
            continue
            } 
        }   
    
    else{
        console.log(i,ne)
        continue
    }
}