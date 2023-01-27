// Написати функцију која исписује све елементе низа који су дељиви са 5

let niz = [1,2,5,7,8,10,12,13,14,15,16,17,18,19,20,21,22,23]

function printDivisibleBy5(arr){
    arr.forEach(el => {
        if(el % 5 === 0){
            console.log("Овај број је дељив са 5",el)
            }
        })
    }

printDivisibleBy5(niz)



// niz.forEach(el =>{
//     if(el % 5 === 0){
//         console.log("Овај број је дељив са 5",el)
//         }
// })


// // Написати функцију која враћа колико пице вам је довољно за доживотно снабдевање
// Уноси се колико пице поједете на месечном нивоу, и колико година имате (Рачуна се да је довољно достављати до стоте године)


function lifePizza(picaMesecno,brojGodina){
    let picaGodisnje = picaMesecno * 12
    let ostaloGodina = 100 - brojGodina
    
    return picaGodisnje * ostaloGodina
}

console.log(lifePizza(20,23))