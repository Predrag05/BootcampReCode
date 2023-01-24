// 1. ЗАДАТАК 
// Написати програм који исписује рачун у кафани, али само муштеријама које имају више од 18 година
// Додатно, попуст се одобрава у два следећа случаја:
// 1. Број година дељив са 7 (15% попуста)
// 2. Број година дељив са 11 (25% попуста)

// Улазни подаци:
// Количина (број пића)
// Цена једног пића
// Број година 
// муштеријеНапомена: Проверити улазне податке (Валидност количине, цене и година)

let valuta = "din"
let musterija = 33
let cena = 320
let brojPica = 5
let sumaPica = cena * brojPica
let popust15 = sumaPica - (sumaPica / 100 * 15)
let popust25 = sumaPica - (sumaPica / 100 * 25)


if(cena > 0 && brojPica > 0 && musterija > 0){
    if(musterija > 18){
        if(musterija % 7 === 0 || musterija % 11 === 0){
            if(musterija % 7 === 0){
                console.log("Цена пића у кафани са попустом од 15 посто је:",popust15, valuta)}
            if(musterija % 11 === 0){
                console.log("Цена пића у кафани са попустом од 25 посто је:",popust25, valuta) 
            }  
    }
        else{console.log("Цена пића у кафани је:",sumaPica,valuta)}

    }
    else{
        console.log("Мораш да имаш 18 година да би купио пиће")
    }
}
else{
    console.log("Мора да се укуца цена производа и број пића, и сви остали подаци.")
}