/// Написати првих 100 бројева дељивих са 5

{
    let count = 0
    let i = 1

    while(count <= 100){
        
        if(i % 5 === 0){
            console.log(i)
            count++
            
        }
        i++
    }
}

{
    let count = 0

    for(let i = 1; count <= 100; i++){
        if(i % 5 === 0){
            console.log(i)
            count++ 
        }
    }
}