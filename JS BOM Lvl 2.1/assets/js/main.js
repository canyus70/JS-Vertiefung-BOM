

document.addEventListener("click", () => {
    const countElement = document.getElementById("count");
    let count =10;

    const countDown = setInterval(() => {
        count--;
        countElement.textContent = count;

        if (count <=0 ) {
            document.querySelector(".message").style.display ="none";
        }
    }, 1000)


})