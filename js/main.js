var passBound = 500;
var bonusBound = 250;
var parcentage = +prompt("Qancha pulingiz bor")
var elText = document.querySelector(".js-text")

if (passBound <= parcentage) {
    elText.textContent = "ketishingiz mumkin"

    if (bonusBound <= parcentage) {
        elText.textContent = `Oq yo'l "jonibek"`
    } else {
        elText.textContent = elText.textContent + ` ketish uchun ${bonusBound - parcentage}$ yetmayabdi`
    }
} else {
    var differance = passBound - parcentage
    elText.textContent = `Borish-kelish samolyot bileti uchun ${differance}$ yetmayabdi! va Mehmonxona to'lovi (to'liq safar davomiyligi uchun) ${bonusBound - parcentage}$ yetmayabdi.  “Jonibek, Shahzoddan so'ra, balki berar! U ham bermasa bollardan so'ra! Ularam bermasa uyda telefonda kino ko'r.” `
} 

