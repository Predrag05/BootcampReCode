function isDivisibleBy5YesYes(x){
    return x % 5 === 0
}

console.log(isDivisibleBy5YesYes(10))

console.log("Ово испод није добро, јер не треба конзоллоговати функцију која у ретурну има већ свој конзол-лог")


function isDivisibleBy5NoNo(x){
    return console.log(x % 5 === 0)
}

console.log(isDivisibleBy5NoNo(10))

console.log("Ово испод je добро, јер има console.log() u return-у а онда нема у позивању функције")

function isDivisibleBy5Yes(x){
    return console.log(x % 5 === 0)
}

isDivisibleBy5Yes(10)


function sumKonzolLogBezReturn(a,b){
    let sum = a + b
    console.log(sum) //  Исписаће али ништа неће вратити јер нема return и вредност коју смо добили не може да упамти јер нема return
}

console.log(sumKonzolLogBezReturn(2,3)) // Дакле поѕивањем исписује суму, али због додатног console.log() на функцији даје и undefined - што није добро

console.log("Испод је варијанта овога изнад али са додатим return-om")

function sumKonzolLogSaReturn(a,b){
    let sum = a + b
    console.log(sum)
    return "hello" // Ово да враћа нема пуно смисла али да би се разликовало у конзоли
}

console.log(sumKonzolLogSaReturn(5,6))
