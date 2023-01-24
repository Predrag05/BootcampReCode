// 2. Задатак
// Написати програм који исписује дијамант са рупом за унето N: 
// (Нема потребе проверавати улазне податке)
// Напомена: За пола поена, исписати горњи део слике (првих N редова, 
//     тј до реда који садржипразнину, укључујући њега)

let N = 5
let M = N + 1
let red = ''
let zve = '*'
let spe = ' '

for(let i = 1; i < N; i++){
    red = spe.repeat(N - i) + zve.repeat(i) + zve.repeat(i) + spe.repeat(N - i)
    console.log(red)
}

let centar = '*'
console.log(centar.repeat(N -1),'',centar.repeat(N -1))

// for(let i; i <= N-1; i--){
//     red = spe.repeat(N - i) + zve.repeat(i) + zve.repeat(i) + spe.repeat(N - i)
//     console.log(red)
//     if(i === 0){
//         break
//     }

// }