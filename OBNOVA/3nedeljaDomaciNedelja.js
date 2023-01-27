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



// 