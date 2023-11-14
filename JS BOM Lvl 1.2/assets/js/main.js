const button = document.body.querySelector("#btn");

button.addEventListener("click", () => {
    let prozent = 100;
    const zeit = document.querySelector(".zeit");
    const intvall = setInterval(() => {
        if (prozent > 0) {
            prozent -= 1;
            zeit.textContent = prozent + "%";
        } else {
            clearInterval(intvall)
        }
    })

}, 1000)