
// setTimeout(() => {
//     console.log("Start Warten für 3 sekunden");
//     console.log("Erledigt. Du hast 3 Sekunden verschwendet");
// }, 3000)



let counter = 10;
const countDown = () => {
    console.log(counter--)
}
countDown()

const setCountDown = setInterval (countDown, 1000);

const clearIntVal = () => {
    clearInterval(setCountDown)
}

setTimeout(() => {
    clearIntVal(setCountDown)

}, 9000);

setInterval(() => {
    counter--;
}, 5000);




