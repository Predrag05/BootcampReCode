/// Продавница, када купац купи производ исписати да је направио успешну куповину и колико му је пара остало

let pare = 50
let proizvod = 50
let valuta = "дин"
 
if(pare >= proizvod){
    console.log("Производ је успешно купљен. Ваш кусур је", pare - proizvod, valuta)
}
else{
    console.log("Немате довољно пара на рачуну")
}